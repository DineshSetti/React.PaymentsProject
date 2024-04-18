import * as React from "react";
import Login from "./Login";
import Check from "./Check";
import Review from "./Review";
import Stepper from "./Stepper";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export default function MultiStepForm() {
  const [step, setStep] = React.useState(0);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <Box sx={{ padding: 1 }}>
      <Box sx={{ marginBottom: 4 }}>
        <Stepper activeStep={step} />
      </Box>

      <Box sx={{ padding: 2 }}>
        {step === 0 && <Login />}
        {step === 1 && <Check />}
        {step === 2 && <Review />}
        <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
          {step !== 0 && (
            <Button variant="contained" onClick={handlePrevious}>
              Previous
            </Button>
          )}
          {step !== 2 && (
            <Button variant="contained" onClick={handleNext}>
              Next
            </Button>
          )}
        </Stack>
      </Box>
    </Box>
  );
}
