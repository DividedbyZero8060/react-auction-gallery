import React, { useEffect, useState } from 'react';
import Lot from '../Lot/Lot';

const Lots = ({ handleBidInfo }) => {

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
                        <Lot key={bid.id} bid={bid} handleBidInfo={handleBidInfo}></Lot>
                    ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Lots;