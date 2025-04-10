import React from 'react';

const EmptyFavourite = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-2 p-5 text-center'>
            <h3 className='text-lg font-semibold'>No favourites yet</h3>

            <p>Click the heart icon on any item to add it to your favorites</p>
        </div>
    );
};

export default EmptyFavourite;