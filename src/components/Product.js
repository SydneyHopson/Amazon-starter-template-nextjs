import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';
import { useDispatch } from "react-redux";
import { addToBasket } from '../slices/basketSlice';

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const dispatch = useDispatch();  
  const [rating, setRating] = useState(null);
  const [hasDelivery, setHasDelivery] = useState(null);
  const addItemToBasket = () => {
const product = {
id,title,description,price,category,image, hasDelivery,   
};

//Sending the product as an action to the REDUX store... the basket slice
dispatch(addToBasket(product))
  }

  useEffect(() => {
    setRating(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);
    setHasDelivery(Math.random() < 0.5);
  }, []);

  if (rating === null || hasDelivery === null) {
    return null; // Return null while waiting for useEffect to set the state
  }

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-red-600" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="USD" />
      </div>
      {hasDelivery && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="/Connectslogo.png" alt="ConnectsLogo" />
          <p className="text-xs text-gray-500">Free Next-day Delivery</p>
        </div>
      )}
      <button onClick={addItemToBasket} className="mt-auto button">Add to Basket</button>
    </div>
  );
}

export default Product;
