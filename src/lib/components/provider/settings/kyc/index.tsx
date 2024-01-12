import React from "react";
import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import { FaCar, FaRegUser } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import GeneralInfo from "./GeneralInfo";
import ServiceInfo from "./ServiceInfo";
 
const KycIndex = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
 
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
 
  return (
    <div className="w-full  py-4">
      <div className="px-2 lg:px-16">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step onClick={() => setActiveStep(0)}>
          <FaRegUser className="h-5 w-5" />
          <div className="absolute -bottom-8 lg:-bottom-[4.5rem] w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 0 ? "blue-gray" : "gray"}
            >
              Step 1
            </Typography>
            <Typography
              color={activeStep === 0 ? "blue-gray" : "gray"}
              className="font-normal hidden lg:block"
            >
              Profile Information
            </Typography>
          </div>
        </Step>
        <Step onClick={() => setActiveStep(1)}>
          <FaCar className="h-5 w-5" />
          <div className="absolute -bottom-8 lg:-bottom-[4.5rem] w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 1 ? "blue-gray" : "gray"}
            >
              Step 2
            </Typography>
            <Typography
              color={activeStep === 1 ? "blue-gray" : "gray"}
              className="font-normal hidden lg:block"
            >
                Service Information
            </Typography>
          </div>
        </Step>
        <Step onClick={() => setActiveStep(2)}>
          <BsBank2 className="h-5 w-5" />
          <div className="absolute -bottom-8 lg:-bottom-[4.5rem] w-max text-center">
            <Typography
              variant="h6"
              color={activeStep === 2 ? "blue-gray" : "gray"}
            >
              Step 3
            </Typography>
            <Typography
              color={activeStep === 2 ? "blue-gray" : "gray"}
              className="font-normal hidden lg:block"
            >
             Bank Infomation
            </Typography>
          </div>
        </Step>
      </Stepper>
      </div>
      <div className="mt-24 px-4">
        {activeStep === 0 && <GeneralInfo/>}
        {activeStep === 1 && <ServiceInfo/>}
      </div>
      <div className="mt-16 px-4 flex justify-between">
        <Button onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </Button>
        <Button onClick={handleNext} disabled={isLastStep}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default KycIndex