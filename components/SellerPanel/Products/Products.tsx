import React, { useRef, useState } from 'react'
import FilterItems from '../../ItemsDisplay/FilterItems'
import GridRow from '../../ItemsDisplay/GridRow'
import OrderItems from '../../ItemsDisplay/OrderItems'
import { SearchIcon } from '../../SVGs/SVGs'
import smapleProductList from '../../../public/productList.json'
import Product from './Product'
import classNames from 'classnames'


type Props = {
  showMenu: boolean;
  setShowMenu: (e) => void;
}
// Order = Sort


const Products = ({ showMenu, setShowMenu }: Props) => {
  const [inputActiveness, setInputActiveness] = useState(false);
  const [display, setDisplay] = useState("row")
  const [Order, setOrder] = useState("0")

  const inputRef = useRef(null)
  const shopName = "بنیتو"
  return (
    <div className='pt-[80px] flex flex-col gap-6'>
      <form action="GET" onSubmit={(e) => e.preventDefault()} className="relative">
        <input ref={inputRef} onFocus={() => setInputActiveness(true)} onBlur={() => setInputActiveness(false)} type="search" className='w-full border-0 bg-white h-14  rounded-xl focus:ring-0 hover:border-0  focus:ring-blue-100 focus:border-blue-100' />
        {!inputActiveness && <span onClick={() => {
          setInputActiveness(true)
          inputRef.current.focus()
        }} className='absolute top-[25%] right-4 text-gray-500 text-lg'>جستجو در <span className='font-[500] text-[#3A7B99]'>{shopName}</span></span>}
        <div className='absolute left-4 top-[30%]'>
          <SearchIcon />
        </div>
      </form>
      <div className='flex flex-row justify-between items-cetner'>
        <div className='flex flex-row gap-2 items-cetner'>

          <FilterItems showMenu={showMenu} setShowMenu={setShowMenu} />
          <OrderItems Order={Order} setOrder={setOrder} />
        </div>
        <GridRow display={display} setDisplay={setDisplay} />
      </div>
      <div className={classNames(display == 'row' ? 'flex flex-col w-full gap-4' :'grid grid-cols-2 gap-2')}>
        {smapleProductList.map((product, index) => <Product key={index} title={product.name} display={display} transportation={product.transportation} quantity={product.quantity} category={product.category}/>)}
      </div>
    </div>
  )
}
export default Products;