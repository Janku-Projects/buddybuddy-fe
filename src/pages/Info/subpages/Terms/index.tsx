import { TermsWrapper } from "@/pages/Info/subpages/Terms/Terms.styled";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setHeader } from "@/store/slices/uiSlice";
import { termsOfUse } from "@/constants/paragraph/terms";

const Terms = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setHeader("이용약관"));

    }, [dispatch]);





    return (
        <TermsWrapper>
            <TermsWrapper>{termsOfUse}</TermsWrapper>
        </TermsWrapper>
    );
}

export default Terms;