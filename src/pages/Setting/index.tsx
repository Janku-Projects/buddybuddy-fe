import {
    SettingWrapper,
    SettingContainer,
    NicknameSect,
    InputBox,
    TitleBox,
    EmailSect, FooterSect, CellphoneSect
} from "@/pages/Setting/Setting.styled";
import { useEffect, useState } from "react";
import { setHeader } from "@/store/slices/uiSlice";
import { useDispatch } from "react-redux";
import CustomButton from "@/components/Button";

const Setting = () => {
    const [isReady, setReady] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setHeader("세팅페이지")); // 헤더 확인
        setReady(true); // 화면 준비
    }, []);
    return (
        <SettingWrapper>
            <SettingContainer>

                <NicknameSect>
                    <InputBox></InputBox>
                </NicknameSect>


                <CellphoneSect>
                    <TitleBox>휴대폰 번호</TitleBox>
                    <InputBox />
                </CellphoneSect>


                <EmailSect>
                    <TitleBox>이메일 주소</TitleBox>
                    <InputBox />
                </EmailSect>


                <FooterSect>
                    <CustomButton type="button" color="primary" size="large" onClick={()=>{}}>
                        저장하기
                    </CustomButton>
                </FooterSect>
            </SettingContainer>
        </SettingWrapper>
    );
};


export default Setting;