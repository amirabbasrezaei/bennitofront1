import React, { useState } from 'react'
import { RelatedIcon, DownWardListIcon, UpWardListIcon } from '../SVGs/SVGs'

type Props = {
  Order: string;
  setOrder: (e) => void;
}
const orderOptions = [
  { "id": "0", "name": "مرتبط ترین", "icon": <RelatedIcon /> },
  { "id": "1", "name": "پرفروش ترین",  "icon": <RelatedIcon /> },
  { "id": "2", "name": "از کمترین قیمت", "icon": <DownWardListIcon /> },
  { "id": "3", "name": "از بیشترین قیمت", "icon": <UpWardListIcon /> }
]

const OrderItems = ({ Order, setOrder }: Props) => {

  console.log(Order);

  return (
    <div className="flex justify-center  relative w-full">

      <select onChange={(e) => {
        setOrder(orderOptions.filter((item) => item.name === e.currentTarget.value)[0].id)
      }} style={{ backgroundImage: "none" }} className="appearance-none text-[0.8rem] border-0 w-fit text-center text-[#2D3436]  py-2 pl-3 pr-7 bg-white rounded-xl outline-none focus:ring-0 focus:outline-none" >
        {orderOptions.map((option, index) => <option key={index} >{option.name}</option>)}
      </select>
      <div className='w-4 absolute right-2 top-[34%]'>
        {
          orderOptions.filter((e) => e.id === Order)[0].icon
        }
      </div>
    </div>
  )
}
export default OrderItems;