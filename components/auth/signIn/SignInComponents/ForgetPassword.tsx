import React from 'react'
import useUserInfo from '../../../Stores/Authentication/authentication'
import { BackButton } from '../../../SVGs/SVGs'

type Props = {}

export default function ForgetPassword({ }: Props) {
  const { userInfo, setUserInfo, setShowForgetPass } = useUserInfo()

  return (
    <div>
      <div className='w-4 cursor-pointer fill-gray-700' onClick={() => setShowForgetPass(false)}>
        <BackButton />
      </div>
    
    </div>
  )
}