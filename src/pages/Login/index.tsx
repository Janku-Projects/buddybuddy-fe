import LoginHandler from "@/pages/Login/Login.func";
import { useEffect, useState } from "react";
import { dexieDB } from "@/db/dexieDB";

import {
    BottomSect, CheckBox,
    InputBox,
    MyInfoSetupWrapper,
    MidSect,
    Subtitle,
    Title,
    TopSect,
    MyBuddySetupWrapper,
    BuddySect,
    BuddyBox
} from "@/pages/Login/Login.styled";
import Button from "@/components/Button";
import CustomCheckbox from "@/components/Checkbox";
import CustomCarousel from "@/components/Carousel/CustomCarousel";
import { importAll } from "@/Util/util";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import dayjs from "dayjs";
import { User } from "@/db/dexieDB.def";


const inputArray = [
    { key: "nickname", label: "닉네임", placeholder: "닉네임을 입력해주세요." },
    // { key: "buddyName", label: "버디 닉네임", placeholder: "버디 닉네임을 입력해주세요." },
];

const agreementArray = [
    "모든 정보는 개인기기에 저장",
    "데이터를 따로 서버에 저장 안함",
    "앱 삭제시, 모든 데이터 삭제"
]

// @ts-ignore
const buddyList = importAll(require.context("src/assets/images/buddies/", false, /\.(png|jpe?g|svg)$/)).filter(buddy => buddy.name.includes("1"));


const MyInfoSetup = ({ onSuccess }) => {
    const { isLoggedIn, navigate } = LoginHandler();
    const [form, setForm] = useState<{ nickname: string }>({ nickname: "" });
    const [isError, setError] = useState(false);
    const [agreements, setAgreements] = useState([false, false, false]);

    const isAllAgreed = agreements.every(Boolean);

    const onToggleAgreement = (index) => {
        const updatedAgreements = [...agreements];
        updatedAgreements[index] = !updatedAgreements[index];
        setAgreements(updatedAgreements);
    };

    const onChangeInput = (event: any) => {
        const { id, value } = event.target;
        setForm((prev) => ({ ...prev, [id]: value }));
    };

    const handleNextStep = async () => {
        // TODO:: 정보 local에 저장
        if(form?.nickname.length < 1) return false;

        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleString("ko-KR", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        });

        const payload: User = {
            name: form?.nickname ?? "", // 기본값 설정
            createdDate: formattedDate,
            lastLoginInDate: formattedDate,
            currentBuddyId: 0,
        }
        // dexieDB.buddy.add({ exp: "0", name: "Alice"});
        const userId = await dexieDB.user.add(payload);
        localStorage.setItem("userId", userId)
        onSuccess();
    };

    return (
        <MyInfoSetupWrapper>
            <TopSect>
                <Title>사용자정보</Title>
                <Subtitle>
                    <li>모든 정보는 개인 기기에 저장됩니다.</li>
                    <li>데이터를 서버에 저장하지 않습니다.</li>
                    <li>
                        앱을 삭제할 경우, 데이터가 삭제되니,
                        <b style={{ color: 'red' }}> "주의" </b>해주세요!
                    </li>
                </Subtitle>
            </TopSect>

            <MidSect>
                {
                    inputArray.map((item, index) => (
                        <InputBox key={item.key}>
                            <h2>{item.label}</h2>
                            <input
                                id={item.key}
                                type="text"
                                value={form[item.key]}
                                onChange={onChangeInput}
                                placeholder={item.placeholder}
                            />
                            <div className="validation">
                                <span style={{ visibility: isError ? 'visible' : 'hidden', color: 'red' }}>dd</span>
                            </div>
                        </InputBox>
                    ))
                }

                <CheckBox>
                    <h2>아래 내용을 동의해주세요.</h2>
                    {agreements.map((isChecked, index) => (
                        <div>
                            <CustomCheckbox
                                key={index}
                                isChecked={isChecked}
                                onChecked={() => onToggleAgreement(index)}
                                message={`약관 ${index + 1}. ${agreementArray[index]}`}
                            />
                        </div>
                    ))}
                </CheckBox>
            </MidSect>

            <BottomSect>
                <Button
                    type="button"
                    color="primary"
                    size="large"
                    onClick={handleNextStep}
                    disabled={isError || !isAllAgreed}
                >
                    인증번호 받기
                </Button>
            </BottomSect>
        </MyInfoSetupWrapper>
    );
};

const MyBuddySetup =  ({ onSuccess }) => {
    const [buddyIndex, setBuddyIndex] = useState(0);
    const [nickName, setBuddyName] = useState("");

    const handleNavigateDashboard = async () => {
        const userId = localStorage.getItem("userId") || null;
        if (!userId) {
            enqueueSnackbar("저장된 유저 정보가 없습니다.", { variant: "error" });
            return false;
        }
        const userInfo = await dexieDB.user.get(+userId);

        const buddyInfo = {
            originalId: +buddyIndex + 1,
            name: nickName,
            exp: "0",
            createBy: userInfo.userId,
        };
        const buddyId = await dexieDB.buddy.add(buddyInfo);
        await dexieDB.user.update(userInfo.userId, {currentBuddyId: +buddyId})
        onSuccess();
    };


    return (
        <MyBuddySetupWrapper>
            <TopSect>
                <Title>버디선택</Title>
                <Subtitle>
                    <li>처음 선택한 버디는 나중에 변경할 수 있어요.</li>
                    <li>버디는 경험치를 쌓으면 성장하며, 특정 레벨에서 모습이 변화해요.</li>
                    <li>모든 데이터는 개인 기기에 저장되며, 앱 삭제 시 함께 삭제됩니다.</li>
                    <li>
                        앱을 삭제할 경우, 데이터가 사라지니,
                        <b style={{ color: 'red' }}> "주의" </b>해주세요!
                    </li>
                </Subtitle>
            </TopSect>

            <InputBox key={1}>
                <input
                    id={"nickName"}
                    type="text"
                    value={nickName}
                    onChange={({target: {value}})=>setBuddyName(value)}
                    placeholder={"함께할 친구의 이름을 정해주세요."}
                />
            </InputBox>
            <BuddySect>
                <BuddyBox>
                    <CustomCarousel onChange={(index) => setBuddyIndex(index)} imageList={buddyList}/>
                </BuddyBox>

            </BuddySect>
            <BottomSect>
                <Button
                    type="button"
                    color="primary"
                    size="large"
                    onClick={handleNavigateDashboard}
                >
                    함께하기
                </Button>
            </BottomSect>
        </MyBuddySetupWrapper>
    );
};


const Login = () => {
    const [isMyInfoSetup, setMyInfoSetup] = useState(true);
    const navigate = useNavigate();


    // FUNC:: handleSuccessInfoSetup
    const handleSuccessInfoSetup = () => {
        setMyInfoSetup(false);
    };

    // FUNC:: handleSuccessBuddySetup
    const handleSuccessBuddySetup = () => {
        navigate("/")
    };



    return (
        isMyInfoSetup
            ? <MyInfoSetup onSuccess={handleSuccessInfoSetup}/>
            : <MyBuddySetup onSuccess={handleSuccessBuddySetup}/>
    );
};


export default Login;
