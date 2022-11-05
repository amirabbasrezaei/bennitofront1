import { Checkbox } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

type Props = {
    name: string;
    direction: string;
    addCategory: (e:any) => void;
    category: any;
    checked: boolean;
    checkCategory: (e:any) => void
}

const forwardSlidePageVariants = {
    initial: {
        opacity: 0,
        x: "100%"
    },
    animate: {
        opacity: 1,
        x: "0"
    },
    exit: {
        opacity: 0,
        x: "-100%",
    },
}
const backwardSlidePageVariants = {
    initial: {
        opacity: 0,
        x: "-100%"
    },
    animate: {
        opacity: 1,
        x: "0"
    },
    exit: {
        opacity: 0,
        x: "100%",
    },
}

export default function CategoryItem({name,  direction, addCategory, category, checked, checkCategory}: Props) {
    // const [checked, setChecked] = useState(false)

    function onClickFunction (){
        addCategory(category)
    }
    function onCheckFunction (){
        checkCategory(category)
    }
    

    
    return (
        <>
            <motion.div onClick={() => onClickFunction()} transition={{ duration: 0.3 }} initial={direction === "forward" ? forwardSlidePageVariants.initial : backwardSlidePageVariants.initial} animate={direction === "forward" ? forwardSlidePageVariants.animate : backwardSlidePageVariants.animate}   className=" bg-white md:bg-gray-100 rounded-md p-2 cursor-pointer"  >
                <Checkbox onClick={(e) => e.stopPropagation()} onChange={onCheckFunction} checked={checked}  className=""  />
                <motion.span className="">{name}</motion.span>
            </motion.div>
        </>
    )
}