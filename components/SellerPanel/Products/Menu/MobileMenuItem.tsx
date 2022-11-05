import classNames from 'classnames';
import Link from 'next/link';
import React from 'react'
import {motion} from 'framer-motion'
type Props = {
    name: string;
    href: string;
    icon: JSX.Element;
    isSelected : boolean;
}

const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

export default function MobileMenuItem ({ name, href , icon, isSelected}: Props) {
    return (
        <Link href={href}>
            <motion.div variants={variants} className={classNames('cursor-pointer font-[500] rounded-xl flex flex-row  gap-3 px-6 py-2 pt-3 justify-center w-fit', isSelected && "text-blue-600 bg-transparent")}>
                <motion.div className={classNames('w-8 h-8 md:w-7 md:h-7', isSelected ? "fill-blue-600" : "fill-black")}>{icon}</motion.div>
                <motion.span className='w-full md:text-sm'>{name}</motion.span>
            </motion.div>
        </Link>
    )
}