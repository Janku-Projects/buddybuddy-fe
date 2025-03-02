import { InfoLabelBox } from "@/components/InfoLabel/InfoLabel.styled";
import { FC, useEffect, useState } from "react";
import { generalInterface } from "@/Util/util";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";


interface iLabelProps extends generalInterface {

}

const InfoLabel = ({ style = {}, buddyInfo }) => {
    const { buddy } = useSelector((state: RootState) => state.buddy);
    const [level, setLevel] = useState<number>(0);

    // SECT: Calculate EXP to Level
    const convertExpToLevel = () => {
        const tempLevel = ~~(buddyInfo.exp / 100);
        if (tempLevel > 2) {
            setLevel(3);
        } else if (tempLevel > 1) {
            setLevel(2);
        } else {
            setLevel(1);
        }
    };

    // SECT: MOUNTED
    useEffect(() => {
        convertExpToLevel();
    }, []);

    return (
        <InfoLabelBox style={style}>
            <span className="level">LV {level}</span>
            <span className="name">{buddyInfo.name}</span>
        </InfoLabelBox>
    );
};

export default InfoLabel;