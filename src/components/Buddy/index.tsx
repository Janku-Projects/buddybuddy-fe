import { FC, Suspense } from "react";
import { BuddyWrapper } from "@/components/Buddy/Buddy.styled";


import Three from "@/components/Three";
import InfoLabel from "src/components/InfoLabel";
import ActionLabel from "src/components/StatusLabel";
import { ActionNav } from "@/components/ActionNav";


const Buddy: FC<any> = ({ fileName = 'chicken_lv_1', isShowLabel = true, level = 1, name = "" }) => {


    return (
        <BuddyWrapper>
            <ActionLabel />
            <Three fileName={fileName}/>
            <InfoLabel style={{ }}/>
        </BuddyWrapper>
    );
};

export default Buddy;


