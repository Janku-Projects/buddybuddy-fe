import LoginHandler from "@/pages/Login/Login.func";
import { useEffect, useState } from "react";
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


const inputArray = [
    { key: "nickname", label: "닉네임", placeholder: "닉네임을 입력해주세요." },
    { key: "buddyName", label: "버디 닉네임", placeholder: "버디 닉네임을 입력해주세요." },
];


const MyInfoSetup = ({ onSuccess }) => {
    const { isLoggedIn, navigate } = LoginHandler();
    const [form, setForm] = useState<{ nickname: string, buddyName: string }>({ nickname: "", buddyName: "" });
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

    const handleNextStep = () => {
        // TODO:: 정보 local에 저장

        // TODO:: 다음으로 이동

        onSuccess();
    };

    return (
        <MyInfoSetupWrapper>
            <TopSect>
                <Title>사용할 정보를 입력해주세요!</Title>
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
                        <InputBox key={index}>
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
                                message={`약관 ${index + 1} 동의`}
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

const MyBuddySetup = ({ onSuccess }) => {

    const handleNavigateDashboard = () => {

    };


    return (
        <MyBuddySetupWrapper>
            <TopSect>
                <Title>사용할 정보를 입력해주세요!</Title>
                <Subtitle>
                    <li>모든 정보는 개인 기기에 저장됩니다.</li>
                    <li>데이터를 서버에 저장하지 않습니다.</li>
                    <li>
                        앱을 삭제할 경우, 데이터가 삭제되니,
                        <b style={{ color: 'red' }}> "주의" </b>해주세요!
                    </li>
                </Subtitle>
            </TopSect>
            <BuddySect>
                <BuddyBox>Hello</BuddyBox>

            </BuddySect>
            <BottomSect>
                <Button
                    type="button"
                    color="primary"
                    size="large"
                    onClick={handleNavigateDashboard}
                >
                    버디 보러가기
                </Button>
            </BottomSect>
        </MyBuddySetupWrapper>
    );
};


const Login = () => {
    const [isMyInfoSetup, setMyInfoSetup] = useState(false);

    // FUNC:: handleSuccessInfoSetup
    const handleSuccessInfoSetup = () => {
        setMyInfoSetup(false);
    };

    // FUNC:: handleSuccessBuddySetup
    const handleSuccessBuddySetup = () => {

    }


    // FUNC:: MOUNTED
    useEffect(() => {

    }, []);

    return (
        isMyInfoSetup
            ? <MyInfoSetup onSuccess={handleSuccessInfoSetup}/>
            : <MyBuddySetup onSuccess={handleSuccessBuddySetup}/>
    );
};


export default Login;
