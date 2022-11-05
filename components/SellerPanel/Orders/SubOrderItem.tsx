import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import classNames from 'classnames'
import SubOrderItemPage from './SubOrderItemPage'

type Props = {
    subOrder: any
}



export default function SubOrderItem({ subOrder }: Props) {
    const [showSubOrder, setShowSubOrder] = useState(false)
    return (
        <>
            <motion.div onClick={(e) => {
                setShowSubOrder(!showSubOrder);
                e.stopPropagation()
            }} className='bg-gray-50 w-full px-6 py-4 rounded-lg flex flex-row justify-between items-center'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.1 }}
                layout>
                <motion.span layout>{subOrder["product"]}</motion.span>
                <motion.div layout><Image src={'/Images/1606046.jpg'} height='36' width='36' /></motion.div>

            </motion.div>

             <SubOrderItemPage showSubOrder={showSubOrder} setShowSubOrder={setShowSubOrder}/>


        </>
    )
}