import React from 'react';
import avatar from '../../assets/avatar.jpg';
import { GrNotification } from "react-icons/gr";

const Navbar = ({ favouriteItems, totalCurrentBidPrice }) => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm md:px-5 lg:px-[6.25rem]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a href='#active-auctions'>Auctions</a></li>
                            <li><a>Categories</a></li>
                            <li><a>How to works</a></li>
                        </ul>
                    </div>
                    <a className="text-xl font-bold">
                        <span className='text-[#003EA4]'>Auction</span>
                        <span className='text-[#FFD337]'>Gallery</span>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a href='#active-auctions'>Auctions</a></li>
                        <li><a>Categories</a></li>
                        <li><a>How to works</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-1 lg:gap-3">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <GrNotification size={20} />
                                <span className="badge badge-sm indicator-item bg-[#003EA4] rounded-full w-1 text-white">{favouriteItems.length}</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">{favouriteItems.length} Items</span>
                                <span className="text-info">Subtotal: ${totalCurrentBidPrice.toFixed(2)}</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block"><a href="#favourite-items">View Favourites</a></button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src={avatar} />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
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