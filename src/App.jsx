
import { useState } from 'react';
import HeroSection from '../components/Hero/HeroSection'
import Lots from '../components/Lots/Lots'
import Navbar from '../components/Navbar/Navbar'
import './App.css'

import FavoriteBids from '../components/FavoriteBids/FavoriteBids';

function App() {

  const [favoriteBids, SetFavoriteBids] = useState([]);
  const [total,SetTotal] = useState(0);

  const handleBidInfo = (bid) => {

    SetFavoriteBids([...favoriteBids,bid]);
    SetTotal(total+ bid.currentBidPrice);
  }

  const handleRemoveBid = (bid) => {
    const updateBids = favoriteBids.filter((f) => f.id !== bid.id);
    SetFavoriteBids(updateBids);
    SetTotal(total - bid.currentBidPrice);
  }

  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <div className="all-container p-8 pt-24 flex gap-8">
        <div className="left-container w-[65%]">
          <Lots handleBidInfo={handleBidInfo}
          favoriteBids={favoriteBids}
                ></Lots>
        </div>
        <FavoriteBids favoriteBids={favoriteBids} handleRemoveBid={handleRemoveBid} total={total}></FavoriteBids>
      </div>
    </>
  )
}

export default App
