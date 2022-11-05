import React, { useEffect, useState } from 'react'
import { useGetUserDigitalStacksLazyQuery, useGetUserDigitalStacksQuery } from '../../graphql/generated/graphql'
import { useDigitalStack } from '../Stores/SellerPanel'
import { PlusIcon } from '../SVGs/SVGs'
import SellerPanelItem from './SellerPanelItem'
import { AnimatePresence, motion } from 'framer-motion'
import AddShop from './AddShop/AddShop'
import MobileMenu from '../MobileMenu'

type Props = {}

export default function SellerPanel({ }: Props) {
  //// Hooks ////
  const [digitalStacks, setDigigtalStacks] = useState([])
  const [showAddShop, setShowAddShop] = useState(false)
  const { digitalStack, setDigitalStack } = useDigitalStack()
  const { data: userStacksData, loading: userStacksLoading, error: userStacksError } = useGetUserDigitalStacksQuery()
  

  

  //// ////
  return (
    <div className='h-screen px-[25px] w-full'>
      <MobileMenu back={false} title="فروشگاه ها" />
      <div className='md:max-w-sm bg-white rounded-xl w-full h-full flex flex-col items-center justify-center'>
        {userStacksData?.GetUserDigitalStacks.map((stack,index) => <SellerPanelItem key={index} stack={stack} />)}
        <div className='flex flex-row items-center gap-1'>
          <div className='w-5 fill-blue-500 border border-blue-500 p-1 rounded-full '>
            <PlusIcon />
          </div>
          <span onClick={() => setShowAddShop(prev => !prev)} className='text-blue-500 cursor-pointer'>افزودن</span>
        </div>
        <AnimatePresence>
          {showAddShop && <motion.div initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "100%", opacity: 0 }} className='fixed top-0 right-0 w-full h-full flex flex-col bg-white'>
            <AddShop setShowAddShop={setShowAddShop} />
          </motion.div>}
        </AnimatePresence>
      </div>

    </div>
  )
}