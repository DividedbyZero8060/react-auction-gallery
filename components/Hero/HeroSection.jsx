import React from 'react';

const HeroSection = () => {
    return (

            <div
  className="hero min-h-screen justify-end"
  style={{
    backgroundImage:
      "url(Banner-min.jpg)",
      backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    transform: "rotateY(180deg)"
  }}
>
  <div className="hero-content text-neutral-content text-left pl-10" style={{transform:"rotateY(180deg)"}}>
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Bid on Unique Items from Around the World</h1>
      <p className="mb-5 text-xl">
        Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
      </p>
      <button className="btn btn-primary bg-white border-black ">Explore Auctions</button>
    </div>
  </div>
</div>

    );
};

export default HeroSection;