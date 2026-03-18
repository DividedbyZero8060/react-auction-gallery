import React from 'react';

const FooterGallery = () => {

    const year = new Date().getFullYear();

    return (
        <div className='flex flex-col gap-4 justify-center items-center mt-4 p-12'>
            <div>
                <a className="text-3xl"><span className="text-blue-600">Auction</span><span className='text-yellow-500 font-bold'>Gallery</span></a>
            </div>
            <div className='flex gap-4 text-xl'>
                <p>Bid.</p>
                <p>Win.</p>
                <p>Own.</p>
            </div>
            <div className='flex justify-evenly items-center gap-12'>
                    <p className='font-bold hover:cursor-pointer'>Home</p>
                    <p className='font-bold hover:cursor-pointer'>Auctions</p>
                    <p className='font-bold hover:cursor-pointer'>Categories</p>
                    <p className='font-bold hover:cursor-pointer'>How It Works</p>
            </div>
            <div>
                <p className='text-lg text-gray-500'>© {year} Auction Gallery. All rights reserved.</p>
            </div>
        </div>
    );
};

export default FooterGallery;