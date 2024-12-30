import { Box, Container } from "@/components/ActionNav/ActionNav.styled";
import { generalInterface } from "@/Util/util";
import { FC } from "react";
import Icon from "@/components/Common/Icon";


interface iActionNavProps extends generalInterface {
    actionList: any[]
}

export const ActionNav: FC<iActionNavProps> = ({actionList}) => {

    return (
        <Container>
            {
                actionList.map((action) =>(
                    <Box onClick={action.handlerAction} key={action.key}>
                        <Icon width={action.width} height={action.height} icon={action.icon}/>
                        {action.label}
                    </Box>
                ))
            }
        </Container>
    )
}