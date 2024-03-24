import React from 'react'
import LearningOfferings from './LearningOfferings';
import VerticalLinearStepper from './VerticalLinearStepper';

const sessions = [
  {
    id: 1,
    title: 'Beginner',
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
    title: 'Advanced',
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
    title: 'Systematic Trader',
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

const MainContent = () => {
  return (
    <div>
    <LearningOfferings sessions={sessions} />
    {/* <CapitalManagersInfo/> */}
    <VerticalLinearStepper/>
    </div>
  )
}

export default MainContent
