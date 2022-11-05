import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import BigFooterButton from '../../../Buttons/BigFooterButton'
import InputFloatLabel from '../../../Custom/InputFloatLabel'
import * as yup from 'yup'
import { useLoginByPassMutation, useSendLoginCodeMutation } from '../../../../graphql/generated/graphql'
import useUserInfo from '../../../Stores/Authentication/authentication'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import { TextField } from '@mui/material'
type Props = {}

export default function EnterPassword({ }: Props) {


    //// hooks ////
    const [sendLoginCode, { loading: loginCodeLoading, data: loginCodeData, error: loginCodeError }] = useSendLoginCodeMutation()
    const router = useRouter()
    const [LoginByPass, { loading: LoginByPassLoading, error: LoginByPassError, data: LoginByPassData }] = useLoginByPassMutation()
    const { userInfo, setUserInfo, setShowForgetPass } = useUserInfo()
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [firstClick, setFirstClick] = useState(false)

    useEffect(() => {
        if (LoginByPassData?.LoginByPass?.isPhoneVerified) {
            toast.success('با موفقیت وارد شدید');
            router.push('/')
        }
        if (LoginByPassError) toast.error(LoginByPassError.message)
    }, [LoginByPassLoading])
    //// ////

    //// Functions ////
    function onSubmitFn() {
        setUserInfo({ password: password })
        LoginByPass({
            variables: {
                "email" : userInfo["email"],
                "password": userInfo["password"],
                "phoneNumber": userInfo["phoneNumber"]
            }
        })
    }

    function enterWithVerifyCode(){
        sendLoginCode({
            variables:{
                "phoneNumber": userInfo["phoneNumber"]
            }
        })
        setUserInfo({verifyType : "smsVerifyCode"})
    }
    console.log(loginCodeError?.message);
    
    //// ////
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            onSubmitFn()
        }} className='flex flex-col gap-5'>
            <span className='text-lg lg:text-xs text-gray-700 font-[400]'>لطفا رمزعبور خود را وارد کنید</span>
            <TextField placeholder='رمزعبور' autoComplete='off' className='lg:text-xs lg:[&>*>input]:h-2 lg:[&>*>input]:text-sm [&>*>fieldset]:border-gray-100'  onClick={() => setFirstClick(true)} error={error.length > 0} helperText={error} onChange={(e) => setPassword(e.currentTarget.value)} onFocus={() => setError("")} onBlur={() => (!password.length && firstClick) ? setError("لطفا این فیلد را پر کنید") : {}} />
            <span onClick={() => setShowForgetPass(true)} className='text-blue-500 font-[400] lg:text-[0.7rem] cursor-pointer'>فراموشی رمز عبور</span>
            {userInfo["phoneNumber"] && <span onClick={() => enterWithVerifyCode()} className='text-blue-500 font-[400] lg:text-[0.7rem] cursor-pointer'>ورود با رمز یکبار مصرف</span>}
            <BigFooterButton loading={LoginByPassLoading} disabled={error.length > 0} name='ورود' type='submit' />
        </form>
    )
}