import { Typography, Container, Grid } from '@mui/material';
import { Link } from "react-router-dom";

const Footer = () => (
  <footer>
    <Container
      maxWidth="lg"
      component="footer"
      sx={{
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        mt: 8,
        py: [3, 6],
      }}
    >
      <Grid container spacing={4} justifyContent="space-evenly">
      <Grid item xs={4} sm={3}>
          <Typography variant="h6" color="text.primary" gutterBottom>
            Company
          </Typography>
          <Link to="/team" >Team</Link><br />
          <Link to="/contact-us" >Contact Us</Link><br />
          <Link to="/location" >Location</Link><br/>
          <Link to="/socialmedia" >Follow us on social media</Link>
        </Grid>
        <Grid item xs={4} sm={3}>
          <Typography variant="h6" color="text.primary" gutterBottom>
            Join Us
          </Typography>
          <Link to="/registration">Registration</Link><br />
          <Link to="/training-events">Training/Events</Link><br />
          
        </Grid>
        <Grid item xs={4} sm={3}>
          <Typography variant="h6" color="text.primary" gutterBottom>
            Legal
          </Typography>
          <Link to="/disclaimer">Disclaimer</Link><br/>
          <Link to="/terms-and-conditions" >Terms & Conditions</Link><br />
          <Link to="/privacy-policy" >Privacy Policy</Link><br />
         
        </Grid>
        
        <Grid item xs={12}>
         
        </Grid>
      </Grid>
      <Grid item xs={12} style={{ textAlign: 'center' }}>
  <Typography variant="body2" color="textSecondary">
    © 2023 CAPITAL MANAGERS. All rights reserved. Content on this website is owned by CAPITAL MANAGERS and protected by copyright laws. No part of this website may be reproduced or used in any form without prior written consent.
  </Typography>
</Grid>
    </Container>
  </footer>
);

export default Footer;
