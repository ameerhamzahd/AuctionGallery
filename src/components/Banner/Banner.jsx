import React from 'react';
import banner from '../../assets/Banner-min.jpg';

const Banner = () => {
    return (
        <div>
            <div
                className="hero h-[500px]"
                style={{
                    backgroundImage: `url(${banner})`,
                }}>
                <div className="hero-overlay"></div>
                <div className="lg:w-full text-neutral-content text-center lg:text-left lg:px-[6.25rem] px-5">
                    <div className="w-full lg:w-1/2">
                        <h1 className="mb-5 text-5xl font-semibold">Bid on Unique Items from Around the World</h1>
                        <p className="mb-5 text-lg font-light">
                        Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
                        </p>
                        <button className="btn rounded-full"><a href="#active-auctions">Explore Auctions</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;