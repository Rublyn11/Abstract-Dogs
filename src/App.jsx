import { useState } from 'react';
import Header from './components/header';
import Swipe from './components/swipe';
import Home from './components/home';
import About from './components/about';
import Sneek from './components/sneek';	
import Roadmap from './components/roadmap';
import Mobnav from './components/Mobnav';
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

  return (
    <>
    <div className='page'>
      <Header />
      <div className='Mobnav-bar' style={{ display: 'none' }}>
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
    </div>
    </>
  )
}

export default App
