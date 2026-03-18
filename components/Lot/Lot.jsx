
import { FaHeart } from "react-icons/fa";

const Lot = ({bid, handleBidInfo, favoriteBids}) => {

    const isInFavorites = favoriteBids.some((f) => f.id === bid.id);

    const disabledStyle = {
        cursor: 'not-allowed',
        opacity: 0.5
    };

    const defaultStyle = {
        cursor: 'pointer',
        opacity: 1
    };
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
                    <button onClick={() => {
                        handleBidInfo(bid);
                    }} 
                        disabled={isInFavorites}
                        style={isInFavorites? disabledStyle : defaultStyle}
                        className="btn btn-ghost btn-xs"><FaHeart color='red' size={20} /></button>
                    </th>
                </tr>
    );
};

export default Lot;