import React, { use } from 'react';
import Item from '../Item/Item';

const Items = ({ itemsPromise, addToFavourites, favouriteItemIds}) => {
    const items = use(itemsPromise);

    return (
        <div>
            <div className="overflow-x-auto border rounded-lg">
                <table className="table border-black rounded-lg">
                    {/* head */}
                    <thead>
                        <tr className='border-black'>
                            <th>Items</th>
                            <th className='text-center'>Current Bid</th>
                            <th className='text-center'>Time Left</th>
                            <th className='text-center item center'>Bid Now</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            items.map(item => <Item key={item.id} item={item} addToFavourites={addToFavourites} isFavourite={favouriteItemIds.includes(item.id)}></Item>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Items;