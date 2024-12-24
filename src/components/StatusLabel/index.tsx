import { generalInterface } from "@/Util/util";
import { FC } from "react";
import {  StatusLabelBox, GaugeArea } from "@/components/StatusLabel/StatusLabel.styled";

import { theme } from "@/styles/theme";
import ProgressBar from "@/components/ProgressBar";

interface iActionLabelProps extends generalInterface {

}

const ActionLabel: FC<iActionLabelProps> = ({ style }) => {
    return (
        <StatusLabelBox>
            <GaugeArea>
                <ProgressBar label={`레벨20`} value={Math.round(30)} color={theme.colors.primary}/>
                <ProgressBar label="피로도" value={0} color={theme.colors.error}/>

            </GaugeArea>
        </StatusLabelBox>
    );
};


export default ActionLabel;