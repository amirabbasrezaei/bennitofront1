import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import { PhoneIcon } from '../SVGs/SVGs'
import hero from '../../public/Images/landingPage/hero.png'
type Props = {
    width : number;
}

export default function Hero({width}: Props) {

    
    return (
        <div  className={classNames('flex flex-col  w-full  md:pb-8 px-4', `h-[calc(100vh-4rem)]`)}>
            <div className='flex flex-col-reverse justify-end py-14 md:py-10 gap-10 md:gap-0  md:flex-row md:grow h-full'>
               
                <div className='w-full flex justify-center items-center'>
                    <div className='px-6 md:px-14 flex flex-col gap-5'>
                        <div className=' font-bold text-3xl md:text-5xl flex flex-col gap-2 '>
                            <span className=' text-gray-600 font-IRANYekan '>ساخت فروشگاه </span>
                            <span className='text-[#0984E3] font-IRANYekan text-3xl md:text-5xl'><span className='text-gray-600 font-IRANYekan font-bold'>با</span> مدیریت آسان</span>
                        </div>
                        <div className=' font-[400] text-xl md:text-2xl text-gray-500'>
                            <p className='font-IRANYekan'> صفر تا صد کسب و کار آنلاینت رو به بنیتو بسپر</p>
                        </div>
                        <div>
                            <button className='appearance-none text-white text-xl md:text-2xl rounded-3xl px-10 py-1 bg-[#61AEFF] shadow-[0px_7px_20px_rgba(97,174,255,0.37)]' type='button'>
                                چرا بنیتو؟! 
                            </button>
                        </div>

                    </div>
                </div>
                <div className='w-full  h-72 md:h-[29rem] flex justify-center items-center '>
                    <div className='w-full h-full md:h-full md:w-full relative p-4'>
                        <Image placeholder='blur' quality={100} src={hero} objectFit={'contain'} layout={'fill'} />
                        {/* <span className='h-full'>sdf</span> */}
                    </div>
                </div>

            </div>
            <div className='w-full flex   px-14 h-1 md:h-20 items-center justify-center'>

                <div className='h-4 w-full flex  flex-row justify-center items-center' >
                    <hr className='w-full hidden md:block h-1 flex-1' />
                    <a href='tel:02191307827' className='flex flex-none w-fit px-6 gap-2 flex-row justify-center items-center '>
                        <span className='w-fit hidden md:block' >021-91307827</span>
                        <div className='w-14 h-14 md:w-5 md:h-5  fill-gray-700 bg-white z-30 md:bg-none shadow-sm md:shadow-none rounded-full p-3 md:p-0 fixed left-5 bottom-2 md:static  '><PhoneIcon /></div>
                    </a>
                </div>
            </div>
        </div>
    )
}