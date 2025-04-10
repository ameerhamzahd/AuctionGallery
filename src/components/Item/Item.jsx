import { ToastContainer, toast, Bounce } from 'react-toastify';
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Item = ({ item, addToFavourites, isFavourite }) => {
    const { title, currentBidPrice, timeLeft, image } = item;

    const isDisabled = isFavourite;

    const handleFavourite = (item) => {
        if (!isFavourite) {
            addToFavourites(item);

            toast.success('Item Added To Favorites', {
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
    };

    return (
        <tr className='text-center item center border-black'>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img src={image} alt={title} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                    </div>
                </div>
            </td>
            <td className='font-medium'>${currentBidPrice.toFixed(2)}</td>
            <td>{timeLeft}</td>
            <td>
                <button
                    onClick={() => handleFavourite(item)}
                    disabled={isDisabled}
                    className={`transition-all duration-300 ${isDisabled ? "cursor-not-allowed opacity-50" : "hover:scale-110 hover:cursor-pointer"
                        }`}>
                    {isDisabled ? (
                        <FaHeart className="text-xl text-red-500" />
                    ) : (
                        <FaRegHeart className="text-xl text-gray-400 hover:text-red-300" />
                    )}
                </button>
            </td>
        </tr>
    );
};

export default Item;
