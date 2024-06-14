import React from 'react';
import Image from "next/image";
import { StarIcon } from '@heroicons/react/solid';
import Currency from "react-currency-formatter";
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from "../slices/basketSlice";  // Import the correct actions

function CheckoutProduct({
  id,
  title,
  description,
  price,
  rating,
  category,
  image,
  hasDelivery,
}) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasDelivery,
    };
    dispatch(addToBasket(product)); // Dispatch the correct action
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id })); // Dispatch the correct action
  };

  return (
    <div className='grid grid-cols-5'>
      <Image src={image} height={200} width={200} objectFit='contain' alt={title} />
      {/* Middle */}
      <div className='col-span-3 mx-5'>
        <p>{title}</p>
        <div className='flex'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className='h-5 text-yellow-500' />
            ))}
        </div>
        <p className='text-xs my-2 line-clamp-3'>{description}</p>
        <Currency quantity={Number(price)} currency="USD" />
        
        {hasDelivery && (
          <div className='flex items-center space-x-2'>
            <img
              loading="lazy"
              className="w-12"
              src="/Connectslogo.png"
              alt="ConnectsLogo"
            />
            <p className='text-xs text-gray-500'>Free Next-day Delivery</p>
          </div>
        )}
      </div>
      {/* Right add/remove buttons */}
      <div className='flex flex-col space-y-2 my-auto justify-self-end'>
        <button 
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600" 
          onClick={addItemToBasket}
        >
          Add to Basket
        </button>
        <button 
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600" 
          onClick={removeItemFromBasket}
        >
          Remove From Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
