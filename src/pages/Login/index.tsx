import LoginHandler from "@/pages/Login/Login.func";
import { useEffect, useState } from "react";
import { BottomSect, InputBox, LoginWrapper, MidSect, Subtitle, Title, TopSect } from "@/pages/Login/Login.styled";
import Button from "@/components/Button";
import CustomCheckbox from "@/components/Checkbox";

const Login = () => {
    const { isLoggedIn, navigate } = LoginHandler();
    const [isError, setError] = useState(false);



    const onClickSelectBuddy = () => {

    };


    return (
        <LoginWrapper>
            <TopSect>
                <Title>사용할 정보를 입력해주세요 !</Title>
                <Subtitle>
                    <li>모든 정보는 개인 기기에 저장됩니다.</li>
                    <li>데이터를 서버에 저장하지 않습니다.</li>
                    <li>앱을 삭제할 경우, 데이터가 삭제되니, <b style={{color: 'red'}}>"주의"&nbsp;</b>해주세요!</li>
                </Subtitle>
            </TopSect>


            <MidSect>
                <InputBox>
                    <h2>닉네임</h2>
                    <input type="text" value={""} onChange={() => {}} placeholder="닉네임을 입력해주세요"/>
                    {isError
                        ? <div className="validation">유효성 문구 노출 영역</div>
                        : <div className="validation" style={{ visibility: 'hidden' }}>비밀!</div>
                    }
                </InputBox>

                <InputBox>
                    <h2>닉네임</h2>
                    <input type="text" value={""} onChange={() => {}} placeholder="닉네임을 입력해주세요"/>
                    {isError
                        ? <div className="validation">유효성 문구 노출 영역</div>
                        : <div className="validation" style={{ visibility: 'hidden' }}>비밀!</div>
                    }
                </InputBox>

                <InputBox>
                    <h2>아래의 내용을 동의해주세요.</h2>

                    <CustomCheckbox isChecked={true} onChecked={()=>{}} message={"Hello World"}/>
                    <CustomCheckbox isChecked={true} onChecked={()=>{}} message={"Hello World"}/>
                    <CustomCheckbox isChecked={true} onChecked={()=>{}} message={"Hello World"}/>

                </InputBox>

            </MidSect>

            <BottomSect>
                <Button type="button" color="primary" size="large" onClick={onClickSelectBuddy} disabled={isError}>
                    인증번호 받기
                </Button>
            </BottomSect>

        </LoginWrapper>
    );
};

export default Login;