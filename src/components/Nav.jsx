import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { dataContext } from '../context/UserContext';
import food_items from '../food';

const Nav = () => {
  
  let {input, setInput, cate, setCate, showCart, setShowCart} = useContext(dataContext)

  useEffect(() => {
   let newList =  food_items.filter((item) => item.food_name.includes(input) || item.food_name.toLowerCase().includes(input))
   setCate(newList)
  }, [input])

  return (
    <div className='w-full h-[100px] px-8 flex justify-between items-center text-teal-500'>

      {/* website logo */}
      <div className="bg-white h-[60px] w-[60px] rounded-md flex justify-center items-center text-4xl shadow-lg">
        <MdFastfood />
      </div>

      {/* search bar */}
      <form onSubmit={(e) => e.preventDefault()} className='bg-white w-[70%] px-5 flex items-center h-[60px] rounded-3xl text-lg shadow-lg'>
        <FaSearch />
        <input type="text" placeholder='Search Items...' className='outline-none w-full ml-5'
        onChange={(e) => setInput(e.target.value)} value={input}/>
      </form>

      {/* cart  */}
      <div className="bg-white h-[60px] w-[60px] rounded-md flex justify-center items-center relative text-3xl shadow-lg cursor-pointer"
      onClick={() => {setShowCart(true)}}>
        <span className='absolute top-0 right-2 font-bold text-lg'>0</span>
        <FiShoppingBag />
      </div>

    </div>
  )
}

export default Nav
