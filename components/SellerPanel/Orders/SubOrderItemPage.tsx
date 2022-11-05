import React from 'react'
import { motion } from 'framer-motion'
import { BackButton } from '../../SVGs/SVGs';
import classNames from 'classnames';

type Props = {
  showSubOrder: boolean;
  setShowSubOrder: (e) => void;
}

const subOrderVariant = {
  open: {
    top: "0",
    opacity: 1,
    transition: {
      type: "Tween",
      stiffness: 30,
      restDelta: 1,

    },

  },
  closed: {
    top: "100%",
    transition: {
      type: "Tween",
      stiffness: 50,
      restDelta: 1,
    },
  }
}

export default function SubOrderItemPage({ showSubOrder, setShowSubOrder }: Props) {
  return (
    <motion.div onClick={(e) => {
      e.stopPropagation();
    }} animate={showSubOrder ? "open" : "closed"} initial={{ top: "100%", opacity: 0 }} variants={subOrderVariant} className={classNames('z-20 bottom-0 right-0 fixed h-full w-full bg-white p-4')}>
      <div className='w-6 h-6 fill-gray-600 ' onClick={() => setShowSubOrder(!showSubOrder)}><BackButton /></div>
      <span className='w-full h-full'>hi</span>
    </motion.div>
  )
}