import * as React from "react";
import Login from "./Login";
import Check from "./Check";
import Review from "./Review";
import Stepper from "./Stepper";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export default function MultiStepForm() {
  const [step, setStep] = React.useState(1);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <Box sx={{}}>
      {" "}
      <Box sx={{ marginBottom: 4 }}>
        <Stepper activeStep={step} />
      </Box>
      <Box sx={{ padding: 2 }}>
        {step === 1 && <Login />}
        {step === 2 && <Check />}
        {step === 3 && <Review />}
        <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
          {step !== 1 && (
            <Button variant="contained" onClick={handlePrevious}>
              Previous
            </Button>
          )}
          {step !== 3 && (
            <Button variant="contained" onClick={handleNext}>
              Next
            </Button>
          )}
        </Stack>
      </Box>
    </Box>
  );
}
