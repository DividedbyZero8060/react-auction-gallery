import React from 'react';
import { IoIosNotifications } from "react-icons/io";

const Navbar = () => {
    return (
                    <div>
            <div className="navbar bg-base-100 shadow-sm flex justify-between items-center">
            <div className="flex ml-4">
                <a className="text-xl"><span className="text-blue-600">Auction</span><span className='text-yellow-500 font-bold'>Gallery</span></a>
            </div>
            <div className='flex justify-evenly items-center gap-12'>
                    <p className='font-bold hover:cursor-pointer'>Home</p>
                    <p className='font-bold hover:cursor-pointer'>Auctions</p>
                    <p className='font-bold hover:cursor-pointer'>Categories</p>
                    <p className='font-bold hover:cursor-pointer'>How It Works</p>
                </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                <div role="button" className="btn btn-ghost btn-circle mr-4">
                        <div className="indicator">
                        <IoIosNotifications size={26} />
                        <span className="badge badge-sm indicator-item bg-blue-700 text-white">8</span>
                        </div>
                </div>
                </div>
                <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li>
                    <a className="justify-between">
                        Profile
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Navbar;