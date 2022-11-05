import { AnimatePresence, AnimateSharedLayout, LayoutGroup, motion } from 'framer-motion'
import { userInfo } from 'os'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { BennitoIcon } from '../../SVGs/SVGs'
import Login from './SignInComponents/Login'
import Verify from './SignInComponents/Verify'
import create from 'zustand'
import useUserInfo from '../../Stores/Authentication/authentication'
import EnterPassword from './SignInComponents/EnterPassword'
import EnterSmsVerifyCode from './SignInComponents/EnterSmsVerifyCode'
import ForgetPassword from './SignInComponents/ForgetPassword'

type Props = {}



export default function SignIn({ }: Props) {


  //// Hooks & vars ////
  const { userInfo, showForgetPass } = useUserInfo()
  const [step, setStep] = useState(0)

  useEffect(() => {
    console.log(userInfo)
    console.log(showForgetPass)
  }, [userInfo])

  // ////

  //// functions ////


  //// ////

  return (
    <div className='w-full h-full md:h-screen md:flex md:items-center md:justify-center md:bg-gray-100'>
      <motion.div className='flex flex-col md:w-[30%]  gap-4 md:gap-6  items-center justify-center w-full h-screen md:h-fit px-[25px] md:px-10 scrollbar-hide md:py-12 md:rounded-lg md:bg-white md:shadow-md'>
        <div className='flex w-full '>
          <div className='w-24 md:w-20'>
            <BennitoIcon />
          </div>
        </div>
        <LayoutGroup >
            {!(userInfo["id"] || userInfo["smsId"]) && <motion.div key='asdsd' layout transition={{ type: "just" }} className='w-full' initial={{ x: "10%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "-10%", opacity: 0 }}>
              <Login />
            </motion.div>}
            {(userInfo["verifyType"] === "smsVerifyCode" && !showForgetPass) && <motion.div layout key='asds' transition={{ type: "just" }} className='w-full' initial={{ x: "10%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "-10%", opacity: 0 }}>
              <EnterSmsVerifyCode />
            </motion.div>}

          
            {(userInfo["verifyType"] === "password" && !showForgetPass) && <motion.div layout key='as1sd' transition={{ type: "just" }} className='w-full' initial={{ x: "10%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "-10%", opacity: 0 }}>
              <EnterPassword />
            </motion.div>}
            
            
            {showForgetPass && <motion.div layout transition={{ type: "just" }} className='w-full' key='a43dsd' initial={{ x: "10%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: "-10%", opacity: 0 }}>
              <ForgetPassword />
            </motion.div>}
        </LayoutGroup>

      </motion.div>
    </div>
  )
}

