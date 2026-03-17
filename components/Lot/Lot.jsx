import React from 'react';
import { FaHeart } from "react-icons/fa";

const Lot = ({bid}) => {
    console.log(bid);
    return (
            <tr>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                            src={bid.image}
                            alt={bid.title} />
                        </div>
                        </div>
                        <div className="font-bold">{bid.title}</div>
                    </div>
                    </td>
                    <td>
                    ${bid.currentBidPrice}
                    </td>
                    <td>{bid.timeLeft}</td>
                    <th>
                    <button className="btn btn-ghost btn-xs"><FaHeart color='red' size={20} /></button>
                    </th>
                </tr>
    );
};

export default Lot;