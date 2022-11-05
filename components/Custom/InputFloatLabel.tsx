import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import classNames from 'classnames';

type Props = {
    value?: string | number;
    onChange?: any
    id?: string;
    type?: any;
    name?: string;
    error?: string;
    showLabel?: boolean;
    placeholder?: string;
    disabled?: boolean;
    onBlur?: void
    onFocus?: void
}

const labelVariant = {
    focused: {
        origin: 0,
        top: "4px",
        right: "0px",
        scale: 0.7,
        transition: {
            duration: 0.2
        }
    },
    unFocus: {
        right: "10px",
        origin: 0,
        top: "26px",
        scale: 1,
    }
}

export default function InputFloatLabel({ value, onChange, id, type = 'text', name, error, showLabel, placeholder, disabled, onBlur,onFocus }: Props) {
    const [focus, setFocus] = useState(false)
    const inputRef = useRef(null)
    return (
        <div className='flex flex-col gap-1'>
            <motion.div className='relative bg-white block'>
                {showLabel && <motion.label animate={focus ? "focused" : "unFocus"} variants={labelVariant} onClick={() => {
                    setFocus(!focus);
                    inputRef.current.focus()
                }} className={classNames("absolute bg-inherit  font-[300] right-0 z-10 top-0 px-2", focus ? "text-blue-500  " : "text-gray-500  ")}>{name}</motion.label>}
                <motion.input  disabled={disabled}  ref={inputRef} onFocus={() => {
                    setFocus(true);
                    onFocus
                    }} onBlur={(e) => {
                        !e.currentTarget.value.length && setFocus(false);
                        onBlur
                        }} placeholder={placeholder} className={classNames('px-4 lg:text-xs lg:h-10 appearance-none w-full h-14 text-lg rounded-[6px] border disabled:bg-gray-200 focus:border-blue-500 focus:outline-none bg-transparent')} id={id} value={value} type={type} onChange={onChange} />
            </motion.div>
            {error && <span className='text-sm lg:text-[0.7rem] text-rose-600 font-[400]'>{error}</span>}
        </div>
    )
}