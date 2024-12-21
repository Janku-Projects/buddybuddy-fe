import { LabelBox } from "@/components/Label/Label.styled";
import { FC } from "react";
import { generalInterface } from "@/Util/util";


interface iLabelProps extends generalInterface {

}

const Label: FC<iLabelProps> = ({ style }) => {
    return (
        <LabelBox style={style}>
            <span className="level">LV 1</span>
            <span className="name">멋쟁이</span>
        </LabelBox>
    );
};

export default Label;