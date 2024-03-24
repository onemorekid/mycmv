// import React from 'react';
// import Header from './Header';
// import Footer from './FooterComponent/Footer';
// import {Paper} from '@mui/material';
import React from 'react';
import Header from './Header';
import Footer from './FooterComponent/Footer';
import {Paper, Container, useMediaQuery} from '@mui/material';
import { useTheme } from '@mui/material/styles';

// const Layout = ({ children }) => {

//   return (
//     <div>
//       <Header />
//       <main>
//         <Paper elevation={3} >
//           {children}
//         </Paper>
//       </main>
//       <Footer/>
//     </div>
//   );
// };


const Layout = ({ children }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <div>
      <Header />
      <main style={{ padding: '20px'}}>
        <Container maxWidth={isSmallScreen ? 'sm' : isMediumScreen ? 'md' : 'lg'}>
          <Paper elevation={3} >
            {children}
          </Paper>
        </Container>
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
