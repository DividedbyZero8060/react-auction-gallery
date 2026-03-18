import React, { useEffect, useState } from 'react';
import Lot from '../Lot/Lot';
import { ToastContainer } from 'react-toastify';

const Lots = ({ handleBidInfo, favoriteBids }) => {

    const [bids,SetBids] = useState([]);

    useEffect(() => {
        fetch("bids.json")
            .then(response => response.json())
            .then(data => SetBids(data))
            ;
    }, []);

    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                <tr>
                    <th>Items</th>
                    <th>Current Bid</th>
                    <th>Time left</th>
                    <th>Bid Now</th>
                </tr>
                </thead>
                <tbody>
                    {
                        bids.map((bid) => (
                        <Lot key={bid.id} bid={bid} handleBidInfo={handleBidInfo}
                        favoriteBids={favoriteBids} ></Lot>
                    ))
                    }
                    <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick={false}
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                            />
                </tbody>
            </table>
        </div>
    );
};

export default Lots;