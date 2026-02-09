import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import Categories from '../Category'
import Card from '../components/Card'
import food_items from '../food.js'
import { dataContext } from '../context/UserContext.jsx'
import { ImCross } from "react-icons/im";
import Card2 from '../components/Card2.jsx'


const Home = () => {

let {cate, setCate, input, showCart, setShowCart} = useContext(dataContext)

  function filter(category){
    if(category === "All"){
      setCate(food_items)
    }
    else{
      let newList = food_items.filter((item) => (item.food_category === category))
      setCate(newList)
    }
  }

  return (
    <div className='bg-slate-200 w-full min-h-screen'>
      <Nav/>
      {!input?
      <div className='flex justify-center items-center gap-6'>
        {Categories.map((item) => {
          return <div className='bg-white rounded-md w-[140px] h-[140px] shadow-lg flex flex-col items-center justify-center text-[20px] font-semibold text-gray-600 hover:bg-teal-200 transition duration-300 cursor-pointer'
          onClick={() => filter(item.name)}>
            {item.icon}
            {item.name}
          </div>
        } )}
      </div> : null
       
}
      
     <div className='flex flex-wrap justify-center items-center px-6 gap-6 mt-10 '>
        {cate.map((items) => {
      return <Card id={items.id} name={items.food_name} category={items.food_category} type={items.food_type} quantity={items.food_quantity} image={items.food_image} price={items.price} />
        })}
      </div>


<div className={`w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 ${showCart ? "translate-x-0" : "translate-x-full"}`}>
  <header className='w-[100%] flex justify-between items-center'>
    <span className='text-green-400 text-[18px] font-semibold'>Order Items</span>
    <ImCross className='text-green-400 text-[18px] font-semibold w-[20px] h-[20px] cursor-pointer hover:text-gray-600' 
    onClick={() => {setShowCart(false)}}/>

  </header>

  <Card2/>
</div>

    </div>
  )
}

export default Home
