import React, { useState } from 'react';
import { Modal, Box, Button, Typography, Slide, Container } from '@mui/material';
import step2Image from './assets/experian-step2.png';
import step3Image from './assets/experian-step3.png';
import step6Image from './assets/experian-step6.png';
import step7Image from './assets/experian-step7.png';
import equifaxStep4Image from './assets/equifax-step4.png';
import equifaxStep5Image from './assets/equifax-step5.png';
import equifaxStep6Image1 from './assets/equifax-step6.1.png';
import equifaxStep6Image2 from './assets/equifax-step6.2.png';
import transunionStep4Image from './assets/transunion-step4.png';
import transunionStep5Image from './assets/transunion-step5.png';
import transunionStep6Image from './assets/transunion-step6.png';
import transunionStep7Image from './assets/transunion-step7.png';

const experianSteps = [
  {
    step: '1. Go to https://www.experian.com/',
    imageUrl: '',
    link: 'https://www.experian.com/',
  },
  {
    step: '2. Click "Sign In" in the top right',
    imageUrl: step2Image,
  },
  {
    step: '3. Click "Sign up for free"',
    imageUrl: step3Image,
  },
  {
    step: '4. Go through all the steps to create your account',
    imageUrl: '',
  },
  {
    step: '5. Go to https://usa.experian.com/mfe/regulatory/security-freeze',
    imageUrl: '',
    link: 'https://usa.experian.com/mfe/regulatory/security-freeze',
  },
  {
    step: '6. Under "Your file is unfrozen", click Frozen',
    imageUrl: step6Image,
  },
  {
    step: '7. Done when the page looks like this',
    imageUrl: step7Image,
  },
];

const equifaxSteps = [
  {
    step: '1. Go to Registration',
    imageUrl: '',
    link: 'https://my.equifax.com/consumer-registration/UCSC/index.html',
  },
  {
    step: '2. Go through all the steps to create your account',
    imageUrl: '',
  },
  {
    step: '3. Go to Freeze dashboard',
    imageUrl: '',
    link: 'https://my.equifax.com/membercenter/#/freeze',
  },
  {
    step: '4. Click the "Place A Freeze" button',
    imageUrl: equifaxStep4Image,
  },
  {
    step: '5. Again, click the "Place A Freeze" button',
    imageUrl: equifaxStep5Image,
  },
  {
    step: '6. Done when the page looks like this',
    images: [equifaxStep6Image1, equifaxStep6Image2], // Multiple images for this step
  },
];

const transunionSteps = [
  {
    step: '1. Go to Registration',
    imageUrl: '',
    link: 'https://service.transunion.com/dss/orderStep1_form.page?',
  },
  {
    step: '2. Go through all the steps to create your account',
    imageUrl: '',
  },
  {
    step: '3. Go to Freeze dashboard',
    imageUrl: '',
    link: 'https://service.transunion.com/dss/freezeStatus.page?',
  },
  {
    step: '4. Click the “Add Freeze” button',
    imageUrl: transunionStep4Image,
  },
  {
    step: '5. Click the “Continue” button',
    imageUrl: transunionStep5Image,
  },
  {
    step: '6. Again, click the "Continue" button',
    imageUrl: transunionStep6Image,
  },
  {
    step: '7. Done when the page looks like this',
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
    if (bureau === 'Experian') {
      setSteps(experianSteps);
      setOpenExperian(true);
    } else if (bureau === 'Equifax') {
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
    <Container maxWidth="md" style={{ marginTop: '50px', textAlign: 'center' }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Credit Freeze Guide
      </Typography>
      <Typography variant="h5" paragraph>
        Freezing your credit is an important step in protecting yourself from identity theft, especially if your SSN has been part of a data leak.
        This guide will help you navigate the process of freezing your credit with the three
        major credit bureaus: Experian, TransUnion, and Equifax. Click on the button below to
        learn more about how to initiate a credit freeze.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => handleOpen('Experian')} style={{ margin: '10px' }}>
        Experian
      </Button>
      <Button variant="contained" color="primary" onClick={() => handleOpen('Equifax')} style={{ margin: '10px' }}>
        Equifax
      </Button>
      <Button variant="contained" color="primary" onClick={() => handleOpen('TransUnion')} style={{ margin: '10px' }}>
        TransUnion
      </Button>

      {/* Modal for Steps */}
      <Modal
        open={openExperian || openEquifax || openTransUnion}
        onClose={handleClose}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Slide direction="up" in={openExperian || openEquifax || openTransUnion} mountOnEnter unmountOnExit>
          <Box
            sx={{
              width: '90vw',
              height: '90vh',
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
              overflow: 'auto',
              textAlign: 'center',
            }}
          >
            <Typography variant="h4" component="h2" gutterBottom>
              Step {currentStep + 1} of {steps.length}
            </Typography>
            <Typography variant="h6" paragraph>
              {steps[currentStep].step}
            </Typography>
            {steps[currentStep].link && (
              <Typography variant="body1" paragraph>
                <a
                  href={steps[currentStep].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '1.5em' }}
                >
                  {steps[currentStep].link}
                </a>
              </Typography>
            )}
            {steps[currentStep].imageUrl && (
              <img
                src={steps[currentStep].imageUrl}
                alt={`Step ${currentStep + 1}`}
                style={{ maxWidth: '100%', marginBottom: '15px' }}
              />
            )}
            {steps[currentStep].images && steps[currentStep].images.map((img: string, index: number) => (
              <img
                key={index}
                src={img}
                alt={`Step ${currentStep + 1} - Image ${index + 1}`}
                style={{ maxWidth: '100%', marginBottom: '15px' }}
              />
            ))}

            <Box display="flex" justifyContent="space-between" marginTop={2}>
              <Button variant="contained" color="secondary" onClick={handlePrevious} disabled={currentStep === 0}>
                Previous
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext} disabled={currentStep === steps.length - 1}>
                Next
              </Button>
            </Box>

            <Button onClick={handleClose} variant="contained" color="error" style={{ marginTop: '20px' }}>
              Close
            </Button>
          </Box>
        </Slide>
      </Modal>
    </Container>
  );
};

export default App;