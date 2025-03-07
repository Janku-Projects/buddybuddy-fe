import { Box, Container } from "@/components/ActionNav/ActionNav.styled";
import { generalInterface } from "@/Util/util";
import { FC } from "react";
import Icon from "@/components/Common/Icon";
import { setGainBuddyInfo } from "@/store/slices/buddySlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";


interface iActionNavProps extends generalInterface {
    actionList: any[];
    onClick: (payload) => void;
}

export const ActionNav: FC<iActionNavProps> = ({ actionList, onClick }) => {
    const dispatch = useDispatch();
    const { action } = useSelector((state: RootState) => state.action);


    const onClickAction = (payload) => {
        console.log("action:: ", action)

        onClick(payload);
    };


    return (
        <Container>
            {
                actionList.map((action) => (
                    <Box onClick={() => onClickAction(action)} key={action.key}>
                        <Icon width={action.width} height={action.height} icon={action.icon}/>
                        {action.label}
                    </Box>
                ))
            }
        </Container>
    );
};