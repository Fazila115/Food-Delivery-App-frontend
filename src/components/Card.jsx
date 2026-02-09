import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';


const Card = ({ id, name, category, type, quantity, image, price }) => {

    let dispatch = useDispatch()

    return (
        <div className='bg-white mb-2 w-[22%] h-[360px] rounded-lg shadow-xl p-3 hover:border-2 hover:border-teal-500'>
            <div>
                <img src={image} className='w-[100%] h-[200px] object-cover rounded-md' />
            </div>

            <h1 className='text-center mt-2 text-xl font-bold italic font-serif text-teal-900'>
                {name}
            </h1>

            <div className='flex justify-between mt-3 text-lg text-teal-600'>
                <span>Rs {price}/-</span>
                <span className='flex items-center gap-2'>{type == 'veg' ? <LuLeafyGreen /> : <GiChickenOven />}{type}</span>
            </div>

            <button className='mt-5 bg-teal-300 text-center w-full rounded p-1 font-bold hover:bg-teal-600 hover:text-white' onClick={() => dispatch(AddItem(id))}>Add to Dish</button>
        </div>
    )
}

export default Card
