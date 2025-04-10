import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
                <div>
                    <a className="text-xl font-bold">
                        <span className='text-[#003EA4]'>Auction</span>
                        <span className='text-[#FFD337]'>Gallery</span>
                    </a>
                </div>

                <div className='flex gap-2'>
                    <span>Bid.</span>
                    <span>Win.</span>
                    <span>Own.</span>
                </div>

                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Auctions</a>
                    <a className="link link-hover">Categories</a>
                    <a className="link link-hover">How to works</a>
                </nav>
                <aside>
                    <p>© {new Date().getFullYear()} AuctionGallery. All rights reserved.</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;