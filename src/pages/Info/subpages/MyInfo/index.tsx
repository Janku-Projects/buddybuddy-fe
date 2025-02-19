import { useEffect, useState } from "react";
import { setHeader } from "@/store/slices/uiSlice";
import { useDispatch } from "react-redux";
import CustomButton from "@/components/Button";
import {
    MyInfoContainer, MyInfoWrapper, NicknameSect,
    InputBox,
    TitleBox,
    EmailSect, FooterSect, CellphoneSect
} from "@/pages/Info/subpages/MyInfo/MyInfo.styled";

const MyInfo = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        nickname: "",
        buddyName: "",
        phoneNumber: "",
        emailAddress: ""
    });

    useEffect(() => {
        dispatch(setHeader("개인 정보 수정")); // 헤더 설정
    }, [dispatch]);

    // 입력값 변경 핸들러
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value // 기존 값 복사 후, 변경된 값 업데이트
        }));
    };

    const handleConfirm = () => {
        console.log("저장된 데이터:", formData);
        // 저장 로직 추가 가능
    };

    return (
        <MyInfoWrapper>
            <MyInfoContainer>
                <NicknameSect>
                    <TitleBox>닉네임</TitleBox>
                    <InputBox
                        name="nickname"
                        value={formData.nickname}
                        onChange={handleChange}
                        type="text"
                        placeholder="닉네임을 입력하세요"
                    />
                </NicknameSect>

                <NicknameSect>
                    <TitleBox>버디</TitleBox>
                    <InputBox
                        name="buddyName"
                        value={formData.buddyName}
                        onChange={handleChange}
                        type="text"
                        placeholder="버디 이름을 입력하세요"
                    />
                </NicknameSect>

                <CellphoneSect>
                    <TitleBox>휴대폰 번호</TitleBox>
                    <InputBox
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        type="tel"
                        placeholder="휴대폰 번호를 입력하세요"
                    />
                </CellphoneSect>

                <EmailSect>
                    <TitleBox>이메일 주소</TitleBox>
                    <InputBox
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={handleChange}
                        type="email"
                        placeholder="이메일을 입력하세요"
                    />
                </EmailSect>

                <FooterSect>
                    <CustomButton type="button" color="primary" size="large" onClick={handleConfirm}>
                        저장하기
                    </CustomButton>
                </FooterSect>
            </MyInfoContainer>
        </MyInfoWrapper>
    );
};

export default MyInfo;
