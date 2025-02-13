import { useState } from "react";
import { Box, Button, MobileStepper } from "@mui/material";
import SwipeableViews from "react-swipeable-views";


interface iCustomCarousel {
    onChange: () =>  void;
    imageList: any[];
}





const CustomCarousel = ({onChange, imageList}:iCustomCarousel) => {
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = imageList.length;

    const onClickNext = () => {
        setActiveStep((prev) => (prev + 1) % maxSteps);

    }

    const onClickBack = () => {
        setActiveStep((prev) => (prev - 1 + maxSteps) % maxSteps);
    }

    return (
        <Box sx={{ maxWidth: 800, flexGrow: 1 }}>
            <SwipeableViews index={activeStep} onChangeIndex={setActiveStep}>
                {imageList.map((src, index) => (
                    <Box
                        key={index}
                        component="img"
                        sx={{ width: "100%", height: 400, objectFit: "cover", borderRadius: "8px" }}
                        src={src}
                        alt={`slide-${index}`}
                    />
                ))}
            </SwipeableViews>

            <MobileStepper
                variant="dots"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                sx={{ borderRadius: "8px" }}
                nextButton={<Button onClick={onClickNext}>Next</Button>}
                backButton={<Button onClick={onClickBack}>Back</Button>}
            />
        </Box>
    )
}



export default CustomCarousel;