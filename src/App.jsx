import { useState } from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Items from './components/Items/Items'
import Favourite from './components/Favourite/Favourite'
import EmptyFavourite from './components/Favourite/EmptyFavourite'

const itemsPromise = fetch('/auction.json')
  .then(response => response.json())

function App() {
  const [favouriteItems, setFavouriteItems] = useState([]);
  const [favouriteItemIds, setFavouriteItemIds] = useState([]);
  const [totalCurrentBidPrice, setTotalCurrentBidPrice] = useState(0.00);

  const addToFavourites = (item) => {
    setFavouriteItems([...favouriteItems, item]);
    setFavouriteItemIds([...favouriteItemIds, item.id]);
    setTotalCurrentBidPrice(totalCurrentBidPrice + item.currentBidPrice);
  }

  const removeFromFavourites = (item) => {
    setFavouriteItems(favouriteItems.filter(favItem => favItem.id !== item.id));
    setFavouriteItemIds(favouriteItemIds.filter(id => id !== item.id));
    setTotalCurrentBidPrice(totalCurrentBidPrice - item.currentBidPrice);

    toast.warn('Item Removed From Favorites', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }

  return (
    <>
      <Navbar favouriteItems={favouriteItems} totalCurrentBidPrice={totalCurrentBidPrice} removeFromFavourites={removeFromFavourites}></Navbar>

      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Banner></Banner>

      <section className='bg-[#ebf0f5] lg:py-[3.125rem] lg:px-[6.25rem] '>
        <div id='active-auctions' className='px-5 py-5 lg:px-0 space-y-3'>
          <h1 className='text-xl font-bold'>Active Auctions</h1>
          <p className='text-sm'>Discover and bid on extraordinary items</p>
          <p className='text-sm font-medium md:hidden'><a className='flex items-center gap-1' href="">Swipe left <IoIosArrowForward /></a></p>
        </div>

        <div className='md:px-5 py-5 flex flex-col lg:grid lg:grid-cols-3 gap-5 lg:px-0'>
          <div className='lg:col-span-2 px-1 md:px-0'>
            <div className='bg-white rounded-lg p-3'>
              <Items itemsPromise={itemsPromise} addToFavourites={addToFavourites} removeFromFavourites={removeFromFavourites} favouriteItemIds={favouriteItemIds}></Items>
            </div>
          </div>

          <div id='favourite-items' className='lg:col-span-1 px-1 md:px-0'>
            <div className='bg-white rounded-lg p-5'>
              <h1 className='flex items-center gap-2 justify-center text-xl font-bold text-[#0E2954] py-3 border-b-2 border-gray-200'> <FaRegHeart size={20} /> Favourite Items</h1>

              {
                favouriteItems.length === 0 && <EmptyFavourite></EmptyFavourite>
              }

              {
                favouriteItems.map(favItem => <Favourite key={favItem.id} favItem={favItem} removeFromFavourites={removeFromFavourites}></Favourite>)
              }

              <div className='border-t-2 border-gray-200 flex justify-between items-center py-3'>
                <h3 className='text-lg font-bold text-[#0E2954]'>Total Bits Amount</h3>
                <h3 className='text-lg font-bold text-[#0E2954]'>${totalCurrentBidPrice.toFixed(2)}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  )
}

export default App
