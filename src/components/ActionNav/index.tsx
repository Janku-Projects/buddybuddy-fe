import { Box, Container } from "@/components/ActionNav/ActionNav.styled";
import { generalInterface } from "@/Util/util";
import { FC } from "react";
import Icon from "@/components/Common/Icon";
import { setGainBuddyInfo } from "@/store/slices/buddySlice";
import { useDispatch } from "react-redux";


interface iActionNavProps extends generalInterface {
    actionList: any[]
}

export const ActionNav: FC<iActionNavProps> = ({actionList}) => {
    const dispatch = useDispatch();

    const onClickAction = (payload) => {

        // TODO::
        console.log(112, payload.gain)
        if(payload.gain){
            const {key, value} = payload.gain
            dispatch(setGainBuddyInfo({ [key]: value }));
        }

        if(payload.minus){
            const {key, value} = payload.minus
            dispatch(setGainBuddyInfo({ [key]: value }));

        }

        // TODO::
        payload.handlerAction()
    }


    return (
        <Container>
            {
                actionList.map((action) =>(
                    <Box onClick={() => onClickAction(action)} key={action.key}>
                        <Icon width={action.width} height={action.height} icon={action.icon}/>
                        {action.label}
                    </Box>
                ))
            }
        </Container>
    )
}