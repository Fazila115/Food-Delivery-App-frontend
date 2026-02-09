import React from 'react'
import { BsGrid3X3Gap } from "react-icons/bs";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";

const Category = [

    {
        id: 1,
        name: "All",
        icon: <BsGrid3X3Gap  className='w-[60px] h-[60px] text-teal-600'/> 
    },
      {
        id: 2,
        name: "breakfast",
        icon: <MdOutlineFreeBreakfast className='w-[60px] h-[60px] text-teal-600'/>
    },
      {
        id: 3,
        name: "soups",
        icon: <LuSoup className='w-[60px] h-[60px] text-teal-600'/>
    },
      {
        id: 4,
        name: "pasta",
        icon: <CiBowlNoodles className='w-[60px] h-[60px] text-teal-600'/>
    },
      {
        id: 5,
        name: "main_course",
        icon: <MdOutlineFoodBank className='w-[60px] h-[60px] text-teal-600'/>
    },
      {
        id: 6,
        name: "pizza",
        icon: <GiFullPizza className='w-[60px] h-[60px] text-teal-600'/>
    },
      {
        id: 7,
        name: "burger",
        icon: <GiHamburger className='w-[60px] h-[60px] text-teal-600'/>
    }
]

export default Category
