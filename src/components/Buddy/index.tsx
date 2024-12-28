import { FC } from "react";
import { BuddyWrapper } from "@/components/Buddy/Buddy.styled";
import Three from "@/components/Three";
import InfoLabel from "src/components/InfoLabel";
import StatusLabel from "src/components/StatusLabel";


const Buddy: FC<any> = ({ fileName = 'chicken_lv_1', isShowLabel = true, level = 1, name = "" }) => {

    return (
        <BuddyWrapper>
            {/*<StatusLabel/>*/}
            <Three fileName={fileName} style={{ height: '550px' }}/>
            <InfoLabel/>
        </BuddyWrapper>
    );
};

export default Buddy;


