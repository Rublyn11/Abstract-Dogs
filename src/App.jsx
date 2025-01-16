import { useState } from 'react';
import Header from './components/header';
import Swipe from './components/swipe';
import Home from './components/home';
import About from './components/about';
import Sneek from './components/sneek';	
import Roadmap from './components/roadmap';
import Mobnav from './components/Mobnav';
import FAQ from './components/faq';
import Footer from './components/footer';
import './App.css';

function App() {
  const roadmapSteps = [
    {
      title: 'Token/NFTs Exclusive Access',
      description: 'Owners gain access to exclusive events, games, or features in ecosytem.',
    },
    {
      title: 'Token Staking',
      description: 'Enable NFT holders to stake their pixel dogs to earn your Solana or Abstract tokens.',
    },
    {
      title: 'Community Perks',
      description: 'Voting rights in community decisions, airdrops, or access to private Discord / Telegram channels.',
    },
    {
      title: 'Commercial Utility',
      description: 'Grant holders full rights to use their pixel dogs NFTs in their own projects or merchandise.',
    },
    {
      title: 'Merge or Burn Features',
      description: 'Introduce mechanics where two NFTs can be merged to create a rarer version, or allow buring for special rewards. But by merging 50% chance is to destroy both NFTs.',
    },
    {
      title: 'Rarity-Based Rewards',
      description: 'Unique rewards for holders of ultra-rare pixel dogs, like limited-edition physical merchadise.',
    },
  ];

  const faqData = [
    {
      question: 'What is Abstract Dogs?',
      answer: 'Abstract Dogs is an NFT collection featuring pixel art dogs with unique utilities such as staking, community perks, and rarity-based rewards.',
    },
    {
      question: 'How can I buy an Abstract Dog?',
      answer: 'You can purchase Abstract Dogs on supported NFT marketplaces on the Abstract blockchain.',
    },
    {
      question: 'What utilities do Abstract Dogs offer?',
      answer: 'Owners gain access to staking, exclusive events, voting rights, and commercial rights to use their NFTs.',
    },
    {
      question: 'What is the Merge or Burn feature?',
      answer: 'The Merge or Burn feature allows you to combine two NFTs to create a rarer version, with a 50% chance of both NFTs being destroyed.',
    },
    {
      question: 'Can I stake my Abstract Dog?',
      answer: 'Yes! You can stake your Abstract Dog NFTs to earn tokens within the ecosystem.',
    },
  ];


  const style = window.innerWidth >= 1240 && window.innerWidth <=1340 ? {
      overflow: 'hidden',
  } : {};
  

  return (
    <>
    <div className='page'>
      <div className="header-nav">
        <Header />  
      </div>
      <div className='Mobnav-bar'>
        <Mobnav />
      </div>
      <Home/>
      <Swipe/>
      <About/>
      <Sneek/>
      {/* <Roadmap steps={roadmapSteps} /> */}
      <div style={{ backgroundColor: '#222', color: '#fff', minHeight: '100vh', padding: '2rem 0', marginTop: '7rem', borderRadius: "60px" }}>
      <Roadmap steps={roadmapSteps} />
      </div>
      <div style={{ backgroundColor: 'transparent', color: '#fff', minHeight: '100vh', padding: '2rem 0' }}>
      <FAQ faqs={faqData} />
      </div>
      <Footer />
    </div>
    </>
  )
}

export default App
