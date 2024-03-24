import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const steps = [
    {
      id: 1,
      label: 'Beginner',
      subheader: 'Investing in Stock Market',
      description: 'Get introduced to the stock market fundamentals and start your investment journey with confidence.',
      keyPoints: [
        'Build a solid foundation in stock market terminology.',
        'Learn how to analyze market trends.',
        'Navigate the stock market with confidence.',
        'Step-by-step guide to making your first investment.',
        'Understand how global events affect the market.',
        'Start your journey towards smart investing.'
      ],
    },
    {
      id: 2,
      label: 'Advanced',
      subheader: 'Investing and F&O',
      description: 'Enhance your investment strategies and dive into Futures & Options for advanced portfolio management.',
      keyPoints: [
        'Master the art of risk management.',
        'Explore different types of stock market strategies.',
        'Develop your personal trading plan.',
        'Uncover the secrets of successful traders.',
        'Identify the right time to buy and sell.',
        'Learn from real-world trading examples.'
      ],
    },
    {
      id: 3,
      label: 'Systematic Trader',
      subheader: 'Mastery all in one + Commodity',
      description: 'Master systematic trading and commodities market to diversify and solidify your trading skills.',
      keyPoints: [
        'Get to know the tools and platforms traders use.',
        'Master systematic trading and commodities market.',
        'Diversify your portfolio with commodities.',
        'Apply advanced trading techniques.',
        'Deepen your understanding of market dynamics.',
        'Gain comprehensive insights into professional trading practices.'
      ],
    },
  ];
  

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container disableGutters maxWidth="lg"  sx={{ pt: 3, pb: 6 }}>
         <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'start', marginTop: 4 }}>
        <Box sx={{ width: '40%', marginRight: 2 }}>
          <Paper elevation={2} sx={{ padding: 2 }}>
          
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <ul>
                {step.keyPoints.map((point, index) => (
                  <li key={index}><Typography variant="body2">{point}</Typography></li>
                ))}
              </ul>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you're finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
  
          </Paper>
        </Box>
        
        <Box sx={{ width: '60%', ml: 2 }}>
      <Paper elevation={2} sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>📈 Elevate your trading performance with the Options Scalping Trading Session</Typography>
        
        <Divider sx={{ my: 3 }} />

        <Typography variant="h5" gutterBottom color="primary">Session Highlights</Typography>
        <List>
          <ListItem>4+ hours of On-demand content</ListItem>
          <ListItem>Live Interactive Sessions</ListItem>
          <ListItem>Live Trading Sessions</ListItem>
          <ListItem>Community Support</ListItem>
          <ListItem>Self-Evaluation Tests</ListItem>
        </List>
        
        <Divider sx={{ my: 3 }} />

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" color="primary">Key Topics</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>Introduction of Scalping</ListItem>
              <ListItem>US Dow Jones & World Markets VIEW</ListItem>
              <ListItem>Understanding India VIX and its Implications</ListItem>
              <ListItem>Going Deep in OI Analysis</ListItem>
              <ListItem>OI and Option Chain & many more...</ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        {/* <Divider sx={{ my: 2 }} />

        <Box textAlign="center">
          <Typography variant='h5' gutterBottom>Exclusive Offer: Discount on enrolment!</Typography>
          <Button variant="contained" color="secondary">Enroll Now</Button>
        </Box> */}
      </Paper>
    </Box>
        </Box>
     
    
    </Container>
  );
}
