import classNames from 'classnames';
import Image from 'next/image'
import React from 'react'
import { TransportationIcon } from '../../SVGs/SVGs';
type Props = {
    title: string;
    feature?: string[];
    category?: string[];
    display: string;
    image?: string;
    quantity: string;
    transportation: string[];
}

export default function Product({ title, feature, category, display, quantity = "0", transportation }: Props) {
    return (
        <div className='bg-white w-full py-6 px-6 rounded-2xl flex flex-col gap-3'>
            <div className='w-full relative flex justify-center'>
                <Image className='w-max h-max rounded-lg' height={"300px"} width={"300px"} src={'/Images/1606046.jpg'} />
                {/* <span className='absolute -top-3 -right-3 rounded-full bg-[#3A7B99] text-white p-1' >{quantity}</span> */}
            </div>
            <span className='text-lg font-[400] text-gray-600'>{title}</span>

            {display === "row" &&
                <div className='flex flex-row gap-2 items-center '>
                    <span className='stroke-[#4B8600] h-6 w-6 flex items-center'><TransportationIcon /></span>
                    {
                        transportation.map((cty, index) => <span className='text-sm' key={index}>{cty} </span>)
                    }
                </div>}
        </div>
    )
}