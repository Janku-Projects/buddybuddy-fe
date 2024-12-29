import { FC, useEffect, useState } from "react";
import { BuddyWrapper } from "@/components/Buddy/Buddy.styled";
import Three from "@/components/Three";
import InfoLabel from "src/components/InfoLabel";
import StatusLabel from "src/components/StatusLabel";

const Buddy: FC<any> = ({ fileName = 'chicken_lv_1', isShowLabel = true, level = 1, name = "" }) => {
    const [height, setHeight] = useState("55vh");

    const calculateHeight = () => {
        if (window.innerHeight <= 700) return "48vh";
        if (window.innerHeight <= 768) return "55vh";
        return "62vh";
    };

    useEffect(() => {
        setHeight(calculateHeight());
    }, []);

    return (
        <BuddyWrapper>
            <Three fileName={fileName} style={{ height }} />
            {isShowLabel && <InfoLabel />}
        </BuddyWrapper>
    );
};

export default Buddy;
