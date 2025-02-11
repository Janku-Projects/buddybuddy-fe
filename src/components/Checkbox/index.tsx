import { CheckboxLabel, CheckboxInput, CheckboxContainer, CheckboxText } from "@/components/Checkbox/Checkbox.styled";

interface iCustomCheckbox {
    message: string;
    isChecked: boolean;
    onChecked: () => void
    key: any;
}


const CustomCheckbox = ({message, isChecked, onChecked}: iCustomCheckbox) => {

    return (
        <CheckboxContainer>
            <CheckboxLabel>
                <CheckboxInput
                    type="checkbox"
                    name="checkbox1"
                    onChange={onChecked}
                />
            </CheckboxLabel>
            <CheckboxText>{message}</CheckboxText>
        </CheckboxContainer>

    )
}

export default CustomCheckbox;