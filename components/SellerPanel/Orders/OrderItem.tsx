import classNames from 'classnames'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Orders from './Orders'
import SubOrderItem from './SubOrderItem'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { AngleDownIcon, AngleUpIcon } from '../../SVGs/SVGs'

type Props = {
  order: any[]
}

const paymentstatusObj = { "3": { "name": "ارسال شده", "color": "gray-700" }, "2": { "name": "در حال پردازش", "color": "blue-600" }, "4": { "name": "لغو شده", "color": "red-600" }, "1": { "name": "پرداخت شده", "color": "green-600" } }
export default function OrderItem({ order }: Props) {
  const [images, setImages] = useState([])
  const [remainProductCount, setremainProductCount] = useState(0)
  const [showOrders, setShowOrders] = useState(false)

  /// orders images function
  const imageFunction = () => {
    let count = 0
    const orderCount = order.length
    let tempImages = []
    order.map((order) => {
      if (count < 3) {
        tempImages.push('/Images/1606046.jpg')
        count++
      }
    })
    setImages(tempImages)
    setremainProductCount(orderCount - count)
  }
  useEffect(() => { imageFunction() }, [])

  ///


  return (
    <motion.div layout className='bg-white w-[95%] p-4 pb-2 shadow-sm  rounded-lg mx-auto flex flex-col gap-4 cursor-pointer' onClick={() => setShowOrders(!showOrders)}>
      <motion.div layout className='flex flex-row justify-between items-center'>
        {/* <motion.span layout className='text-sm'>{order[0]["customer-name"] + " " + order[0]["customer-fname"]}</motion.span> */}
        <motion.span layout className='text-[0.7rem] break-all text-gray-600'>کد سفارش: {order[0]["orderID"]}</motion.span>
        <motion.span layout className='text-[0.7rem] break-all text-gray-600'>{order[0]["date"]}</motion.span>
        <AnimatePresence>
          {!showOrders && <motion.div initial={{scaleX:0}} animate={{scaleX: 1}} exit={{scale:0}}  layout className='flex flex-row bg-gray-100 p-2 items-center justify-center rounded-lg gap-1 w-fit'>
            {images.map((imageLink, index) => <motion.div key={index} layout className='h-max flex flex-row items-center justify-center'><Image className='rounded-full h-full w-full' key={index} src={imageLink} height="20" width="20" /></motion.div>)
            }
            {remainProductCount > 0 && <motion.div className='text-blue-500 text-sm' layout>{remainProductCount}+</motion.div>}
          </motion.div>}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        <motion.div className='flex flex-col gap-4' layout>
          {showOrders && order.map((subOrder, index) => <SubOrderItem key={index} subOrder={subOrder} />)}
        </motion.div>
      </AnimatePresence>
      <motion.div layout animate={{height: "fit",  transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        },}} className='w-4 mx-auto fill-gray-400 '>
        {showOrders ? <AngleUpIcon /> : <AngleDownIcon />}
      </motion.div>
    </motion.div>

  )
}