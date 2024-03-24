import React from 'react';
import { Typography, List, ListItem, Button, Container } from '@mui/material';


const AboutUs = () => {
    return (
        <Container>
            <Typography variant="h3" gutterBottom>Welcome to Capital Managers</Typography>
            <Typography variant="body1">At Capital Managers, we are dedicated to empowering individuals to take control of their financial future through education and expert guidance in trading stocks, options, and commodities. With years of experience in the financial markets, our team is committed to providing comprehensive training programs designed to equip our students with the knowledge and skills needed to succeed in today's dynamic trading environment.</Typography>

            <Typography variant="h4" gutterBottom>Our Mission</Typography>
            <Typography variant="body1">Our mission is simple: to educate, inspire, and empower individuals to achieve financial independence through strategic investment and trading strategies. We believe that everyone has the potential to become a successful trader, and we are here to guide you every step of the way.</Typography>

            <Typography variant="h4" gutterBottom>Why Choose Us?</Typography>
            <List>
                <ListItem>Expertise: Our team consists of seasoned professionals with extensive experience in trading and investment management. We bring a wealth of knowledge and expertise to our programs, ensuring that our students receive top-notch education and guidance.</ListItem>
                <ListItem>Comprehensive Curriculum: Our curriculum is carefully crafted to cover all aspects of trading, from the fundamentals to advanced strategies. Whether you're a beginner or an experienced trader, our courses are designed to meet your needs and help you reach your goals.</ListItem>
                <ListItem>Hands-On Learning: We believe in learning by doing. That's why our programs include hands-on exercises, case studies, and real-world examples to reinforce key concepts and help you apply what you've learned in the classroom to actual trading scenarios.</ListItem>
                <ListItem>TradingView Indicators: As part of our commitment to providing cutting-edge tools for our students, we offer exclusive access to proprietary TradingView indicators. These indicators are developed by our team of experts and are designed to help you identify profitable trading opportunities with greater accuracy and confidence.</ListItem>
                <ListItem>Ongoing Support: Learning doesn't stop when the class is over. At Capital Managers, we provide ongoing support and mentorship to our students, helping them navigate the markets with confidence and make informed decisions.</ListItem>
            </List>

            <Typography variant="h4" gutterBottom>Our Team</Typography>
            <Typography variant="body1">Meet the experts behind Capital Managers. Our team brings together professionals with diverse backgrounds and expertise in trading, finance, and education. Together, we are committed to helping you achieve your financial goals and build a brighter future.</Typography>

            <Typography variant="h4" gutterBottom>Get Started Today</Typography>
            <Typography variant="body1">Ready to take the first step towards financial success? Explore our range of courses and start your journey with Capital Managers today. Whether you're looking to build wealth, generate income, or simply learn more about the markets, we're here to help you succeed.</Typography>

            <Typography variant="body1">Join us and discover the power of smart investing with Capital Managers.</Typography>
            <Button variant="contained" color="primary">Join Us</Button>
        </Container>
    );
}

export default AboutUs;