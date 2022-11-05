import React, { useState } from 'react'
import { ProductsIcon } from '../../../SVGs/SVGs'
import { AnimatePresence, motion } from "framer-motion"
type Props = {}

const categoriesVariants = {
    open: {
        opacity: 1,
        scaleY: 1,
        origin: 0,
        transformOrigin: "0 0"
    },
    closed: {
        opacity: 0,
        scaleY: 0,
        origin: 0,
        transformOrigin: "0 0"
    }
}

const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30
  };

export default function Categories({ }: Props) {
    const [showCategories, setShowCategories] = useState(false)
    return (
        <div className=' w-fit flex flex-row' onMouseLeave={() => setShowCategories(false)} onMouseOver={() => setShowCategories(true)}>
            <div className='flex flex-row gap-2 p-2 px-4  h-10 justify-center items-center cursor-pointer relative'>
                <div className='w-5 h-5 z-10  rotate-45 fill-gray-900 stroke-gray-900'><ProductsIcon /></div>
                <span className='font-IRANYekan z-10 text-gray-900 font-bold text-[0.9rem]'>دسته‌بندی کالاها</span>
                {showCategories && <motion.div
                    initial={false}
                    animate={""}
                    transition={spring}
                    layoutId='ul'
                    className='w-full h-full absolute z-0 bg-gray-50 rounded-sm'>

                </motion.div>}
            </div>
            <span className='text-gray-300 h-10 p-2 font-extralight'>|</span>

            <AnimatePresence>

            </AnimatePresence>
            <motion.div className='h-[calc(100vh-9rem)] w-[99%] mb-4 ml-4 shadow-md absolute top-[8.6rem] rounded-md z-30 right-[0.5%] backdrop-blur-md bg-white/90 flex items-center justify-center' transition={{ ease: "easeInOut", duration: 0.1 }} variants={categoriesVariants} animate={showCategories ? "open" : "closed"}>
                Categories Come Here !
            </motion.div>
        </div>
    )
}