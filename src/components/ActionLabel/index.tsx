import { generalInterface } from "@/Util/util";
import { FC } from "react";
import { ActionLabelBox, GaugeArea } from "@/components/ActionLabel/ActionLabel.styled";
import { theme } from "@/styles/theme";
import ProgressBar from "@/components/ProgressBar";

interface iActionLabelProps extends generalInterface {

}

const ActionLabel: FC<iActionLabelProps> = ({ style }) => {
    return (
        <ActionLabelBox>
            <GaugeArea>
                <ProgressBar label={`레벨20`} value={Math.round(30)} color={theme.colors.primary} />
                <ProgressBar label="피로도" value={ 0} color={theme.colors.error} />

            </GaugeArea>
        </ActionLabelBox>
    )
};


export default ActionLabel;