import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge, Button, useMediaQuery, useTheme, Drawer, Box, List, ListItem, ListItemText } from '@mui/material';
import { ShoppingCart, AccountCircle, Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const getDrawer = () => (
    <Drawer open={drawerOpen} onClose={handleDrawerClose}>
      <Box role="presentation" onClick={handleDrawerClose} onKeyDown={handleDrawerClose}>
        <List>
          <ListItem button component={Link} to="/">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/social-media">
            <ListItemText primary="Social Media" />
          </ListItem>
          <ListItem button component={Link} to="/contact-us">
            <ListItemText primary="Contact Us" />
          </ListItem>
          <ListItem button component={Link} to="/about-us">
            <ListItemText primary="About Us" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
  
  const getButtons = () => (
    <>
      <Button component={Link} to="/" sx={{ color: 'white' }}>Home</Button>
      <Button component={Link} to="/social-media" sx={{ color: 'white' }}>Social Media</Button>
      <Button component={Link} to="/contact-us" sx={{ color: 'white' }}>Contact Us</Button>
      <Button component={Link} to="/about-us" sx={{ color: 'white' }}>About Us</Button>
    </>
  );
  

  return (
    <AppBar color="secondary" position="static">
      <Toolbar>
        {isMobile ? (
          <>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
            {getDrawer()}
          </>
        ) : (
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Capital Managers
          </Typography>
        )}
        {!isMobile && getButtons()}
        <IconButton color="inherit">
          <Badge badgeContent={0} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
