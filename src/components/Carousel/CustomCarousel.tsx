import { useEffect, useState } from "react";
import { Box, Button, MobileStepper } from "@mui/material";
import SwipeableViews from "react-swipeable-views";


interface iCustomCarousel {
    onChange: (index: number) =>  void;
    imageList: any[];
}





const CustomCarousel = ({onChange, imageList}:iCustomCarousel) => {
    const [isReady, setReady] = useState(false)
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = imageList.length;

    const onClickNext = () => {
        setActiveStep((prev) => (prev + 1) % maxSteps);

    }

    const onClickBack = () => {
        setActiveStep((prev) => (prev - 1 + maxSteps) % maxSteps);
    }


    useEffect(() => {
        setReady(true);
        if(isReady){
            onChange(activeStep)
        }
    }, [activeStep]);

    return (
        <Box sx={{ maxWidth: 800, flexGrow: 1 }}>
            <SwipeableViews index={activeStep} onChangeIndex={setActiveStep} style={{  }}>
                {imageList.map((src, index) => (
                    <Box
                        key={index}
                        component="img"
                        alt={JSON.stringify(src)}
                        sx={{ width: "100%", height: 'inherit', objectFit: "contain", borderRadius: "12px" }}
                        src={src.path}
                    />
                ))}
            </SwipeableViews>

            <MobileStepper
                variant="dots"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                sx={{ borderRadius: "12px" }}
                nextButton={<Button onClick={onClickNext}>Next</Button>}
                backButton={<Button onClick={onClickBack}>Back</Button>}
            />
        </Box>
    )
}



export default CustomCarousel;