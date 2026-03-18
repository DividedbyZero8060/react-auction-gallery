import React from 'react';
import { CiHeart } from "react-icons/ci";
import { TbXboxX } from "react-icons/tb";

const FavoriteBids = ({favoriteBids, handleRemoveBid, total}) => {
    return (
        <div className="right-container w-[35%]">
            <div className='flex gap-1 justify-center items-center mb-8 border-b pb-4'>
              <CiHeart size={30}/>
              <h2 className='text-2xl font-bold'>Favorite Bids</h2>
            </div>
            
            <div className="flex flex-col gap-4">
              {favoriteBids.length === 0?
              (<div className="text-center p-12">
                <h2> No favorites Yet! </h2>
                <p>Click the heart icon to add bids to your favorites.</p>
              </div>)
              : favoriteBids.map((bid) => (
                <div key={bid.id} className="card bg-base-100 shadow-lg">
                  <div className="card-body">
                    <div className='flex justify-around items-center gap-2'>
                      <div className="mask mask-squircle h-12 w-12 ">
                            <img
                            src={bid.image}
                            alt={bid.title} />
                    </div>
                    <h2 className="card-title">{bid.title}</h2>
                    <button onClick={() => handleRemoveBid(bid)}><TbXboxX size={26}/></button>
                    </div>
                    <div className='flex justify-around items-center gap-2 mt-2'>
                      <p>Current Bid: ${bid.currentBidPrice}</p>
                      <p>Bids : {bid.bidsCount}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
              <div className='flex justify-between border-t mt-8 pt-4'>
                <h1 className='font-semibold'> Total bids Amount</h1>
                <p className='font-medium'>${total}</p>
              </div>
        </div>
    );
};

export default FavoriteBids;