import { FC, useEffect, useState } from "react";
import { BuddyWrapper } from "@/components/Buddy/Buddy.styled";
import Three from "@/components/Three";
import InfoLabel from "src/components/InfoLabel";
import StatusLabel from "src/components/StatusLabel";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Timer from "@/components/Timer";

const Buddy: FC<any> = ({ fileName = 'chicken_lv_1', isShowLabel = true, level = 1, name = "" }) => {
    const [height, setHeight] = useState("55vh");
    const { action } = useSelector((state: RootState) => state.action);

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
            {/*SECT: 상태 호출*/}
            {action === 6 && <StatusLabel/>}

            {/*SECT: 액션 중일 때, 타이머*/}
            {(action !== 0 && action !== 6) && <Timer/>}

            {/*SECT: 모델 */}
            <Three fileName={fileName} style={{ height }}/>
            {/*{action.toString()}*/}

            {/*SECT: 레벨과 이름*/}
            {isShowLabel && <InfoLabel/>}
        </BuddyWrapper>
    );
};

export default Buddy;
