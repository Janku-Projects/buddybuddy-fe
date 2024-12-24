import { Box, Container } from "@/components/ActionNav/ActionNav.styled";
import { generalInterface } from "@/Util/util";
import { FC } from "react";


interface iActionNavProps extends generalInterface {

}

export const ActionNav: FC<iActionNavProps> = ({}) => {

    return (
        <Container>
            <Box onClick={() => {}}>
                {/*<Icon width={30} height={30} icon="LiftingWeights" />*/}
                운동
            </Box>
            <Box onClick={() => {}}>
            {/*<Box onClick={() => handleAction("SHOWER")}>*/}
                {/*<Icon width={30} height={30} icon="Bathtub" />*/}
                샤워
            </Box>
            <Box onClick={() => {}}>
            {/*<Box onClick={() => handleAction("SLEEP")}>*/}
            {/*    <Icon width={30} height={30} icon="Bad" />*/}
                잠자기
            </Box>
            <Box onClick={() => {}}>
            {/*<Box onClick={handleTalkAction}>*/}
                {/*<Icon width={30} height={30} icon="ThoughtBalloon" />*/}
                대화
            </Box>
        </Container>
    )
}