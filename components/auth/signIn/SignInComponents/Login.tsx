import { useFormik } from 'formik'
import React, { useEffect, useMemo, useState } from 'react'
import toast from 'react-hot-toast'
import { useStore } from 'zustand'
import { useSendLoginCodeMutation } from '../../../../graphql/generated/graphql'
import BigFooterButton from '../../../Buttons/BigFooterButton'
import InputFloatLabel from '../../../Custom/InputFloatLabel'
import LoadingPage from '../../../LoadingPage'
import useUserInfo from '../../../Stores/Authentication/authentication'

type Props = {}

export default function Login({ }: Props) {
    //// Hooks ////
    const [sendLoginCode, { loading: loginCodeLoading, data: loginCodeData, error: loginCodeError }] = useSendLoginCodeMutation()
    const [loginInput, setLoginInput] = useState("")
    const [loginInputType, setLoginInputType] = useState("")
    const [error, setError] = useState("")
    const { setUserInfo, userInfo } = useUserInfo()
    useEffect(() => {
        if (loginCodeData) {
            loginInputType === "phoneNumber" ? setUserInfo({ smsId: loginCodeData.SendLoginCode.id, phoneNumber: loginInput, verifyType: "smsVerifyCode" }) : setUserInfo({ id: loginCodeData.SendLoginCode.id, email: loginInput, verifyType: "password" })
        }
    }, [loginCodeData])

    useEffect(() => {
        // const loading = loginCodeLoading && toast.loading('لطفا صبر کنید ...')
        if (loginCodeData) {
            // toast.dismiss(loading)
            toast.success('کد تایید ارسال شد', {
                duration: 5000
            })
        }
        if (loginCodeError) {
            // toast.dismiss(loading)
            toast.error('خطا در ارتباط با سرور')

        }
    }, [loginCodeLoading])

    useEffect(() => {
        setError("")
        const timeOut = setTimeout(() => checkPhoneNumberOrEmail(loginInput), 500)
        return () => clearTimeout(timeOut)
    }, [loginInput])

    //// /////

    /// functions ///
    function submitFunction() {

        if (loginInputType === "phoneNumber") {
            sendLoginCode({
                variables: {
                    "phoneNumber": loginInput
                }
            })
        }

    }

    function checkPhoneNumberOrEmail(loginInput) {
        let phoneNumberRegex = new RegExp("^(\\+98|0)?9\\d{9}$");
        const phoneNumberResult = phoneNumberRegex.test(loginInput);
        let emailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        const emailResult = emailRegex.test(loginInput)
        const loginInputResult = phoneNumberResult || emailResult
        if (loginInput.length < 6 || !loginInputResult) {
            if (!loginInput.length) return setError("")
            setError('شماره موبایل یا ایمیل اشتباه است')
        }
        setLoginInputType(phoneNumberResult ? "phoneNumber" : emailResult ? "email" : "")
    }

    /// ////


    return (

        <form onSubmit={(e) => {
            e.preventDefault();
            submitFunction()
        }} className='w-full flex flex-col gap-8 lg:gap-5'>
            <div className='flex flex-col gap-2 w-full justify-start '>
                {/* <div><Image /></div> */}
                <span className='text-lg lg:text-sm text-gray-600 font-[500] lg:font-[500]'>ورود | ثبت نام</span>
                <span className='text-sm lg:text-xs text-gray-700 mb-4 lg:mb-2 '>لطفا شماره موبایل یا ایمیل خود را وارد کنید</span>
                <InputFloatLabel disabled={loginCodeLoading} placeholder='شماره تلفن یا ایمیل' showLabel={false} error={error} name='شماره موبایل یا ایمیل' type="text" id="loginInput" value={loginInput} onChange={(e) => setLoginInput(e.currentTarget.value)} />
            </div>
            <BigFooterButton disabled={error.length > 0} loading={loginCodeLoading} textColor='white' name='ورود' type='submit' />
        </form>

    )
}
