import { InfoLabelBox } from "@/components/InfoLabel/InfoLabel.styled";
import { FC } from "react";
import { generalInterface } from "@/Util/util";


interface iLabelProps extends generalInterface {

}

const InfoLabel: FC<iLabelProps> = ({ style }) => {
    return (
        <InfoLabelBox style={style}>
            <span className="level">LV 1</span>
            <span className="name">멋쟁이</span>
        </InfoLabelBox>
    );
};

export default InfoLabel;