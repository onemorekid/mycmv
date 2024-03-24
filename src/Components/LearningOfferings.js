import React from 'react';
import { Card, CardContent, Typography, Button,Stack, CardActions, CardHeader,Container,Grid } from '@mui/material';



const LearningOfferings = ({ sessions }) => (
  <div>
   
    <Container disableGutters maxWidth="lg" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Trading Courses by Capital Managers
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" component="p">
        Start your trading adventure with us! Our classes are perfect for anyone interested in the stock market 
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" component="p">
        Don't worry if you're a beginner - we'll teach you everything from the start. Step by step, you'll grow into a skilled "Systematic Trader"
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" component="p">
          Begin your stock market journey today!"
        </Typography>
      </Container>
     <Container maxWidth="lg" component="main">
        <Grid container spacing={5} alignItems="flex-end">
    
    {sessions.map((session) => (
       <Grid
       item
      
       xs={12}
      
       md={4}
     >
         <Card key={session.id} sx={{ maxWidth: 400, margin:'2', padding:'2', height:270 }}>
    
          <CardHeader
                  title={session.title}
                  subheader={session.subheader}
                  titleTypographyProps={{ align: 'center' }}
                
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
        
          
          <CardContent  sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                      
                    }} >
                      <Stack direction={"column"}>
                      <Typography variant="body1" gutterBottom>
            {session.description}
          </Typography>
          {/* <ul>
        {session.keyPoints.map((point, index) => (
          <li key={index}><Typography variant="body2">{point}</Typography></li>
        ))}
      </ul> */}
                      </Stack>
          
          </CardContent>
          <CardActions >
          <Button variant="outlined"  fullWidth>
            Enroll Now
          </Button>
          </CardActions>
          
        
      </Card>
      </Grid>
    
     
    ))}
    
      </Grid>
      </Container>
      
  </div>
);

export default LearningOfferings;
