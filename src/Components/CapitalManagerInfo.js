import React from 'react';
import { Typography, Paper, Box, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const CapitalManagersInfo = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        What CAPITAL MANAGERS Brings to You
      </Typography>
      <Typography variant="body1" paragraph>
        CAPITAL MANAGERS sessions are well designed and formulated based on knowledge...
        {/* Include the rest of the paragraph content here */}
      </Typography>

      <Typography variant="h5" gutterBottom>
        📈 Elevate your trading performance with the Options Scalping Trading Session.
      </Typography>

      <Typography variant="h6" gutterBottom>
        🚀 Session Highlights:
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="4+ hours of On-demand content" />
        </ListItem>
        {/* Repeat for each highlight */}
      </List>

      <Typography variant="h6" gutterBottom>
        🔍 Key Topics:
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Introduction of Scalping" />
        </ListItem>
        {/* Repeat for each key topic */}
      </List>

      <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
        <Typography variant="h6" gutterBottom>
          🎁 Exclusive Offer:
        </Typography>
        <Typography variant="body1" paragraph>
          Discount on enrolment!
        </Typography>
        <Button variant="contained" color="primary">
          Enroll Now
        </Button>
      </Paper>
    </Box>
  );
};

export default CapitalManagersInfo;
