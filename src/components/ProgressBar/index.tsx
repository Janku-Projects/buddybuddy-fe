import { generalInterface } from "@/Util/util";
import { FC } from "react";
import { Container } from "@/components/ProgressBar/ProgressBar.styled";

interface iProgressBarProps extends generalInterface{
    label: string;
    value: number;
    color?: string;
}


const ProgressBar: FC<iProgressBarProps> = ({ label, value, color }) => {
    return (
        <Container color={color}>
            <span className="label">{label}</span>
            <progress value={value} max={100}/>
            <span>{value}%</span>
        </Container>
    )
}

export default ProgressBar;