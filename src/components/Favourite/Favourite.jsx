import React from 'react';
import { RxCross2 } from "react-icons/rx";

const Favourite = ({ favItem, removeFromFavourites }) => {
    const { title, image, currentBidPrice, bidsCount } = favItem;

    return (
        <div>
            <div className="flex flex-col gap-3 py-3 items-center">
                <div className=" flex flex-col justify-center w-full max-w-sm card bg-base-100 shrink-0 border">
                    <div className="flex justify-between p-5 items-center">
                        <div className="gap-3 flex justify-center items-center">
                            <div className="avatar">
                                <div className="mask mask-squircle h-12 w-12">
                                    <img
                                        src={image}
                                        alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <p className="text-[1rem] font-bold">{title}</p>
                                <p className="text-[0.85rem] font-semibold">${currentBidPrice.toFixed(2)}</p>
                                <p className="text-[0.75rem]">Bids: {bidsCount}</p>
                            </div>
                        </div>
                        <button onClick={() => removeFromFavourites(favItem)} className='p-1 rounded-full hover:bg-red-300 hover:text-red-500 hover:cursor-pointer hover:scale-110 transition-all duration-300'>
                            <RxCross2 />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Favourite;