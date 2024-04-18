import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["Shipping address", "Payment details", "Review your order"];

interface StepperProps {
  activeStep: number;
}

const HorizontalLinearAlternativeLabelStepper: React.FC<StepperProps> = ({
  activeStep,
}) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default HorizontalLinearAlternativeLabelStepper;
