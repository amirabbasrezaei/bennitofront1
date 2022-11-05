import classNames from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast';
import { useLoginBySmsMutation, useSendLoginCodeMutation } from '../../../../graphql/generated/graphql';
import BigFooterButton from '../../../Buttons/BigFooterButton';

import create from "zustand"
import useUserInfo from '../../../Stores/Authentication/authentication';
import { Router, useRouter } from 'next/router';


type Props = {

}

export default function EnterSmsVerifyCode({ }: Props) {

    //// Hooks ////
    const router = useRouter()
    const [verifyCode, setVerifyCode] = useState(["", "", "", "", "", ""])
    const [LoginBySms, { data: smsLoginData, loading: smsLoginLoading, error: smsLoginError }] = useLoginBySmsMutation()
    const { setUserInfo, userInfo } = useUserInfo()
    const [focus, setFocus] = useState(0)
    const [sendLoginCode, { loading: loginCodeLoading, data: loginCodeData, error: loginCodeError }] = useSendLoginCodeMutation()
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)
    const ref5 = useRef(null)
    const ref6 = useRef(null)

    const [timer, setTimer] = useState([0, 59])
    useEffect(() => {
        const filledVerifyCodeInputs = verifyCode.filter((e) => e.length).length
        setFocus(filledVerifyCodeInputs)
        focusFn(filledVerifyCodeInputs)

        if (filledVerifyCodeInputs === 6) {
            setUserInfo({ code: verifyCode.join("") })
        }

    }, [verifyCode])

    useEffect(() => {
        onSubmitFn()
    }, userInfo["code"])

    useEffect(() => {
        timer[1] > 0 && timerFn(timer)
    }, [timer])

    useEffect(() => {
        if (smsLoginError) {
            toast.error('خطایی رخ داد');
        }
        if (smsLoginData?.LoginBySms?.isPhoneVerified) {
            toast.success('با موفقیت وارد شدید')
            console.log('pathname', router.asPath)
            if (router.asPath !== '/auth/signin') {
                router.push(`${router.asPath}`)
            }
            router.push('/')

        }
    }, [smsLoginLoading])

    useEffect(() => {
        focusFn(focus)
    }, [focus])

    //// ////


    //// Functions ////
    function verifyCodeKeyDown(input) {
        if (input === "Backspace") {
            const tempVerifyCode = [...verifyCode.reverse()]
            let lastNumIndex = [...tempVerifyCode.filter((e) => e.length)].length
            tempVerifyCode[lastNumIndex - 1] = ""
            setVerifyCode([...tempVerifyCode.reverse()])
        }
        const covertToNumber = Number(input)

        if (covertToNumber) {
            verifyCode.map((num, index) => {
                if (!num.length) {
                    const tempVerifyCode = [...verifyCode]
                    tempVerifyCode[index] = input
                    return setVerifyCode([...tempVerifyCode])
                }
            })
        }
    }
    // Timer function
    async function timerFn([m, s]: number[]) {
        let seconds = (m * 60) + s
        let second: number = 0, minute: number = 0;
        if (seconds === 0) {
            return setTimer([0, 0])
        }
        await setTimeout(() => {
            --seconds
            if (seconds > 59) {
                minute = +(seconds / 60).toFixed(0)
            }
            second = +(seconds % 60).toFixed(0)
            if (second === 0) {
                second = 60
                --minute
            }
            setTimer([minute, second])

        }, 1000)

    }

    /// Send Verify Code Again
    function sendVerifyCode() {
        if (userInfo["phoneNumer"]) {
            sendLoginCode({
                variables: {
                    "phoneNumber": userInfo["phoneNumer"]
                }
            })
        }
        setTimer([0, 59])
    }

    function onSubmitFn() {
        if (userInfo["smsId"] && userInfo["code"] && userInfo["phoneNumber"]) {
            LoginBySms({
                variables: {
                    "smsId": userInfo["smsId"],
                    "code": userInfo["code"],
                    "phoneNumber": userInfo["phoneNumber"]
                }
            })

        }
    }

    function focusFn(currentInput) {
        switch (currentInput) {
            case 0: {
                ref1.current.focus();
                break
            }
            case 1: {
                ref2.current.focus();
                break
            }
            case 2: {
                ref3.current.focus();
                break
            }
            case 3: {
                ref4.current.focus();
                break
            }
            case 4: {
                ref5.current.focus();
                break
            }
            case 5: {
                ref6.current.focus();
                break
            }
        }
    }

    //// ////

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                onSubmitFn()
            }} className='flex flex-col gap-5'>
                <span className='text-lg lg:text-xs lg:font-[400] text-gray-800 font-[500]'>لطفا کد تایید را وارد کنید</span>
                <div className='flex flex-row w-full gap-2 h-14' onKeyDown={(e) => verifyCodeKeyDown(e.key)}>
                    <input disabled={smsLoginLoading} ref={ref6} value={verifyCode[0]} className={classNames(' [appearance:textfield] outline-none lg:h-12 text-center bg-gray-100 rounded w-1/6 ', focus === 5 ? "border-2 border-blue-400" : "border-none")} type="number" />
                    <input disabled={smsLoginLoading} ref={ref5} value={verifyCode[1]} className={classNames('appearance-none outline-none lg:h-12 text-center bg-gray-100 rounded w-1/6 ', focus === 4 ? "border-2 border-blue-400" : "border-none")} type="number" />
                    <input disabled={smsLoginLoading} ref={ref4} value={verifyCode[2]} className={classNames('appearance-none outline-none lg:h-12 text-center bg-gray-100 rounded w-1/6 ', focus === 3 ? "border-2 border-blue-400" : "border-none")} type="number" />
                    <input disabled={smsLoginLoading} ref={ref3} value={verifyCode[3]} className={classNames('appearance-none outline-none lg:h-12 text-center bg-gray-100 rounded w-1/6 ', focus === 2 ? "border-2 border-blue-400" : "border-none")} type="number" />
                    <input disabled={smsLoginLoading} ref={ref2} value={verifyCode[4]} className={classNames('appearance-none outline-none lg:h-12 text-center bg-gray-100 rounded w-1/6 ', focus === 1 ? "border-2 border-blue-400" : "border-none")} type="number" />
                    <input disabled={smsLoginLoading} ref={ref1} value={verifyCode[5]} className={classNames('appearance-none outline-none lg:h-12 text-center bg-gray-100 rounded w-1/6 ', focus === 0 ? "border-2 border-blue-400" : "border-none")} type="number" />
                </div>
                <div className='flex flex-col gap-1'>
                    {(timer[1] > 0 || timer[0] > 0) ? <div className='flex flex-row gap-2 items-center justify-center'>
                        <span className='text-sm lg:text-[0.7rem] text-gray-900 '>{timer[0] < 10 ? "0" + timer[0] : timer[0]}:<span>{timer[1] < 10 ? "0" + timer[1] : timer[1]}  </span></span>
                        <span className='text-sm lg:text-[0.7rem] text-gray-900 '>مانده تا دریافت مجدد کد </span>
                    </div> : <div className=''>
                        <span onClick={() => sendVerifyCode()} className='text-sm lg:text-[0.66rem] text-blue-600 font-[400] cursor-pointer'>ارسال مجدد کد تایید</span>
                    </div>}
                    <span onClick={() => setUserInfo({ verifyType: "password" })} className='text-sm lg:text-[0.66rem] text-blue-600 font-[400] cursor-pointer'>ورود با رمز عبور</span>

                </div>
                <BigFooterButton loading={smsLoginLoading} name='تایید' type='submit' textColor='white' />
            </form>
        </>
    )
}