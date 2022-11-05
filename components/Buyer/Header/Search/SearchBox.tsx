import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

const childsVariants = {
    hidden:{
        opacity:0
    },
    show: {
        opacity:1
    }
}

export default function SearchBox({ }: Props) {
    return (
        <motion.div className='h-96 w-full z-20 absolute top-14 right-0 backdrop-blur-md bg-white/90 rounded-md flex items-center justify-center' transition={{ type: "tween" }} initial={{ scaleY: 0, origin: 0, transformOrigin: "0 0 "}} animate={{ scaleY: 1, origin: 0, transformOrigin: "0 0 " }} exit={{ scaleY: 0 }}>
            <motion.div variants={childsVariants} >
                Search Results
            </motion.div>
        </motion.div>
    )
}