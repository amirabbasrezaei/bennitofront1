import React from 'react'

type Props = {}

export default function AboutUs({ }: Props) {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center my-20'>
            <div className=' flex flex-col w-1/3 justify-center items-center gap-3'>
                <h1 className='font-IRANYekan text-2xl text-[#2D3436] '>درباره ما</h1>
                <hr className='appearance-none  border-black w-2/3 ' />
                <p className='font-IRANYekan text-[#A3ACAF] text-justify'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون است.</p>
            </div>
        </div>
    )
}