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
    const [isReady, setReady] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setHeader("개인 정보 수정")); // 헤더 확인
        setReady(true); // 화면 준비
    }, []);


    return (
        <MyInfoWrapper>
            <MyInfoContainer>

                <NicknameSect>
                    <InputBox></InputBox>
                </NicknameSect>


                <CellphoneSect>
                    <TitleBox>휴대폰 번호</TitleBox>
                    <InputBox/>
                </CellphoneSect>


                <EmailSect>
                    <TitleBox>이메일 주소</TitleBox>
                    <InputBox/>
                </EmailSect>


                <FooterSect>
                    <CustomButton type="button" color="primary" size="large" onClick={() => {
                    }}>
                        저장하기
                    </CustomButton>
                </FooterSect>
            </MyInfoContainer>
        </MyInfoWrapper>
    );
};


export default MyInfo;