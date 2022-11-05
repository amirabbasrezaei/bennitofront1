import React, { useState } from 'react'
import { BennitoIcon, CartIcon, ProfileIcon } from '../../SVGs/SVGs'
import Categories from './Categories/Categories'
import SearchInput from './Search/SearchInput'
import { LayoutGroup, motion } from "framer-motion"
type Props = {}

const secondRowUls = [
  { "name": "پرفروشترین‌ها" },
  { "name": "جشنواره" },

]

export default function BuyerHeader({ }: Props) {
  const [subHeaderIndex, setSubHeaderIndex] = useState(null);
  console.log(subHeaderIndex)
  return (
    <header className='h-36 bg-white p-6 pb-0 gap-5 hidden md:flex flex-col w-full  '>

      {/* First Row */}
      <div className="w-full h-full flex flex-row gap-10 items-center ">
        <div className='w-20 '>
          <BennitoIcon />
        </div>
        <SearchInput />
        <div className='flex-1 h-full flex flex-row gap-7 items-center justify-end'>
          <div className='  w-6 h-6 stroke-gray-600 cursor-pointer '>
            <CartIcon />
          </div>
          <div className='  w-5 h-5 stroke-gray-600 cursor-pointer '>
            <ProfileIcon />
          </div>

        </div>
      </div>

      {/* Second Row */}
      <motion.ul  className='flex flex-row   [&>li]:font-IRANYekan [&>li]:text-gray-500 [&>li]:text-sm'>
        <LayoutGroup >
          <Categories />
          <div className='flex flex-row items-center justify-center h-full '>
            {secondRowUls.map((li, index) => <Item key={index} index={index} setSubHeaderIndex={setSubHeaderIndex} isSelected={subHeaderIndex === index} item={li} />)}
          </div>
        </LayoutGroup>
      </motion.ul>
    </header>
  )
}

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30
};

function Item({ item, isSelected, index, setSubHeaderIndex }) {
  return <motion.li  onMouseLeave={() => setSubHeaderIndex(null)} className='relative h-10 p-2 px-4  flex items-center justify-center w-full    cursor-pointer' onMouseOver={() => setSubHeaderIndex(index)} >
    <motion.div className='z-10 text-sm font-[300]   text-center w-full font-IRANYekan'>{item.name}</motion.div>
    {isSelected && <motion.div
      initial={false}
      animate={""}
      transition={spring}
      layoutId='ul'
      className='w-full h-full absolute z-0 bg-gray-50 rounded-sm'>

    </motion.div>}
  </motion.li>
}