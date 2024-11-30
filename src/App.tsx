import React, { useState } from "react";
import {
  Modal,
  Box,
  Button,
  Typography,
  Slide,
  Container,
} from "@mui/material";
import step2Image from "./assets/experian-step2.png";
import step3Image from "./assets/experian-step3.png";
import step6Image from "./assets/experian-step6.png";
import step7Image from "./assets/experian-step7.png";
import equifaxStep4Image from "./assets/equifax-step4.png";
import equifaxStep5Image from "./assets/equifax-step5.png";
import equifaxStep6Image1 from "./assets/equifax-step6.1.png";
import equifaxStep6Image2 from "./assets/equifax-step6.2.png";
import transunionStep4Image from "./assets/transunion-step4.png";
import transunionStep5Image from "./assets/transunion-step5.png";
import transunionStep6Image from "./assets/transunion-step6.png";
import transunionStep7Image from "./assets/transunion-step7.png";

const experianSteps = [
  {
    step: "Go to Registration https://www.experian.com/",
    imageUrl: "",
    link: "https://www.experian.com/",
  },
  {
    step: 'Click "Sign In" in the top right',
    imageUrl: step2Image,
  },
  {
    step: 'Click "Sign up for free"',
    imageUrl: step3Image,
  },
  {
    step: "Go through all the steps to create your account",
    imageUrl: "",
  },
  {
    step: "Go to Freeze dashboard https://usa.experian.com/mfe/regulatory/security-freeze",
    imageUrl: "",
    link: "https://usa.experian.com/mfe/regulatory/security-freeze",
  },
  {
    step: 'Under "Your file is unfrozen", click Frozen',
    imageUrl: step6Image,
  },
  {
    step: "Done when the page looks like this",
    imageUrl: step7Image,
  },
];

const equifaxSteps = [
  {
    step: "Go to Registration",
    imageUrl: "",
    link: "https://my.equifax.com/consumer-registration/UCSC/index.html",
  },
  {
    step: "Go through all the steps to create your account",
    imageUrl: "",
  },
  {
    step: "Go to Freeze dashboard",
    imageUrl: "",
    link: "https://my.equifax.com/membercenter/#/freeze",
  },
  {
    step: 'Click the "Place A Freeze" button',
    imageUrl: equifaxStep4Image,
  },
  {
    step: 'Again, click the "Place A Freeze" button',
    imageUrl: equifaxStep5Image,
  },
  {
    step: "Done when the page looks like this",
    images: [equifaxStep6Image1, equifaxStep6Image2],
  },
];

const transunionSteps = [
  {
    step: "Go to Registration",
    imageUrl: "",
    link: "https://service.transunion.com/dss/orderStep1_form.page",
  },
  {
    step: "Go through all the steps to create your account",
    imageUrl: "",
  },
  {
    step: "Go to Freeze dashboard",
    imageUrl: "",
    link: "https://service.transunion.com/dss/freezeStatus.page",
  },
  {
    step: "Click the “Add Freeze” button",
    imageUrl: transunionStep4Image,
  },
  {
    step: "Click the “Continue” button",
    imageUrl: transunionStep5Image,
  },
  {
    step: 'Again, click the "Continue" button',
    imageUrl: transunionStep6Image,
  },
  {
    step: "Done when the page looks like this",
    imageUrl: transunionStep7Image,
  },
];

const App: React.FC = () => {
  const [openExperian, setOpenExperian] = useState(false);
  const [openEquifax, setOpenEquifax] = useState(false);
  const [openTransUnion, setOpenTransUnion] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState<any[]>(experianSteps);

  const handleOpen = (bureau: string) => {
    setCurrentStep(0);
    if (bureau === "Experian") {
      setSteps(experianSteps);
      setOpenExperian(true);
    } else if (bureau === "Equifax") {
      setSteps(equifaxSteps);
      setOpenEquifax(true);
    } else {
      setSteps(transunionSteps);
      setOpenTransUnion(true);
    }
  };

  const handleClose = () => {
    setOpenExperian(false);
    setOpenEquifax(false);
    setOpenTransUnion(false);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "50px", textAlign: "center" }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Credit Freeze Guide
      </Typography>
      <Typography variant="h5" paragraph>
        Freezing your credit is an important step in protecting yourself from
        identity theft, especially if your SSN has been part of a data leak.
        This guide will help you navigate the process of freezing your credit
        with the three major credit bureaus: Experian, TransUnion, and Equifax.
        Click on the button below to learn more about how to initiate a credit
        freeze.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpen("Experian")}
        sx={{
          margin: "10px",
          padding: { xs: "8px 16px", md: "16px 32px" },
          fontSize: { xs: "1rem", md: "1.5rem" },
        }}
      >
        Experian
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpen("Equifax")}
        sx={{
          margin: "10px",
          padding: { xs: "8px 16px", md: "16px 32px" },
          fontSize: { xs: "1rem", md: "1.5rem" },
        }}
      >
        Equifax
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpen("TransUnion")}
        sx={{
          margin: "10px",
          padding: { xs: "8px 16px", md: "16px 32px" },
          fontSize: { xs: "1rem", md: "1.5rem" },
        }}
      >
        TransUnion
      </Button>

      <Modal
        open={openExperian || openEquifax || openTransUnion}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Slide
          direction="up"
          in={openExperian || openEquifax || openTransUnion}
          mountOnEnter
          unmountOnExit
        >
          <Box
            sx={{
              width: { xs: "90%", sm: "80%", md: "90%" },
              maxWidth: "900px",
              maxHeight: "90vh",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 3,
              borderRadius: 2,
              overflowY: "auto",
              textAlign: "center",
              position: "relative",
            }}
          >
            <Typography variant="h4" component="h2" gutterBottom>
              Step {currentStep + 1} of {steps.length}
            </Typography>
            <Typography variant="h6" paragraph>
              {steps[currentStep].link ? (
                <>
                  {steps[currentStep].step.split(steps[currentStep].link)[0]}{" "}
                  {/* Text before the link */}
                  <br /> {/* Line break between the text and the link */}
                  <a
                    href={steps[currentStep].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#1a0dab", // Link color
                      textDecoration: "none", // Remove underline by default
                      wordWrap: "break-word", // Ensure long URLs wrap
                      wordBreak: "break-all", // Break long URLs at any point if necessary
                      display: "inline-block", // Ensure the link behaves as an inline block element
                      maxWidth: "100%", // Ensure the link does not overflow horizontally
                    }}
                  >
                    {steps[currentStep].link}
                  </a>
                </>
              ) : (
                steps[currentStep].step // If no link, render the step normally
              )}
            </Typography>

            {steps[currentStep].imageUrl && (
              <img
                src={steps[currentStep].imageUrl}
                alt={`Step ${currentStep + 1}`}
                style={{ maxWidth: "100%", marginBottom: "15px" }}
              />
            )}
            {steps[currentStep].images &&
              steps[currentStep].images.map((img: string, index: number) => (
                <img
                  key={index}
                  src={img}
                  alt={`Step ${currentStep + 1} - Image ${index + 1}`}
                  style={{ maxWidth: "100%", marginBottom: "15px" }}
                />
              ))}
            <Box display="flex" justifyContent="space-between" marginTop={2}>
              <Button
                variant="contained"
                color="secondary"
                onClick={handlePrevious}
                disabled={currentStep === 0}
                sx={{
                  padding: { xs: "8px 16px", md: "16px 32px" },
                  fontSize: { xs: "1rem", md: "1.5rem" },
                }}
              >
                Previous
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                disabled={currentStep === steps.length - 1}
                sx={{
                  padding: { xs: "8px 16px", md: "16px 32px" },
                  fontSize: { xs: "1rem", md: "1.5rem" },
                }}
              >
                Next
              </Button>
            </Box>
            <Button
              onClick={handleClose}
              variant="contained"
              color="error"
              sx={{
                marginTop: "20px",
                padding: { xs: "8px 16px", md: "16px 32px" },
                fontSize: { xs: "1rem", md: "1.5rem" },
              }}
            >
              Close
            </Button>
          </Box>
        </Slide>
      </Modal>
    </Container>
  );
};

export default App;
