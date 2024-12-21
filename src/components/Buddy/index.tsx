import { FC, Suspense } from "react";
import { BuddyWrapper } from "@/components/Buddy/Buddy.styled";


import Three from "@/components/Three";
import Label from "@/components/Label";


const Buddy: FC<any> = ({ fileName = 'chicken_lv_1', isShowLabel = true, level = 1, name = "" }) => {


    return (
        <BuddyWrapper>
            <Label style={{ }}/>
            <Three fileName={fileName}/>
        </BuddyWrapper>
    );
};

export default Buddy;


