import Link from 'next/link'
import React from 'react'
import { AngleDownIcon, BennitoIcon, PhoneIcon } from '../SVGs/SVGs'

type Props = {}

export default function Header({ }: Props) {
    return (
        <div className="w-full h-16 flex flex-row items-center gap-10 px-4 text-gray-700">
            <div className='w-24 p-4 fill-gray-700 cursor-pointer'>
                <BennitoIcon />
            </div>
            <ul className='font-IRANYekan hidden md:flex flex-row '>
                <li className='cursor-pointer flex flex-row items-center gap-1'>
                    <span>خدمات</span>
                    <div className='w-3 fill-gray-900'><AngleDownIcon /> </div>
                </li>
                <li></li>
            </ul>
            <div className='flex-1  w-full h-full hidden md:flex flex-row items-center gap-10 justify-end'>

                <Link href={'/auth/signin'}>
                    <div className='bg-gray-50  h-fit rounded-md py-1 px-5 cursor-pointer'>
                        <span className='text-xs font-[400] text-gray-500'>ورود | ثبت نام</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}