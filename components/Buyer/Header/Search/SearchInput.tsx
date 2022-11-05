import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import { SearchIcon } from '../../../SVGs/SVGs'
import SearchBox from './SearchBox'
type Props = {}

export default function SearchInput({ }: Props) {
  const [searchBoxShow, setSearchBoxShow] = useState(false)
  return (
    <div className='w-1/2 relative'>
      <div className='w-full relative h-12'>
        <div className='fill-gray-400 absolute top-4 right-4 w-4'><SearchIcon /></div>
        <input onFocus={() => setSearchBoxShow(true)} onBlur={() => setSearchBoxShow(false)} className='apearance-none bg-gray-50 w-full h-full text-sm outline-none pr-12 py-3 placeholder:text-gray-400 placeholder:font-[200]  rounded-lg flex items-center justify-center' placeholder='جستجو' />

      </div>
      <AnimatePresence>
        {searchBoxShow && <SearchBox />}
      </AnimatePresence>
    </div>
  )
}