import classNames from 'classnames';
import React, { useState } from 'react'
import { GridIcon, RowIcon } from '../SVGs/SVGs';

type Props = {
    display: string;
    setDisplay: (e) => void;
}

export default function GridRow({display, setDisplay }: Props) {
    // should develop function that get list of items and change 
    
    return (
        <div className='bg-gray-50 w-fit px-1 py-[21px] h-3 flex flex-row gap-1 justify-center items-center rounded-xl'>
            <div onClick={() => setDisplay("row")} className={classNames(display === "row" ? "bg-white fill-[#374151]" : " fill-[#ACACAC]", "px-2 py-2 rounded-xl")}>
                <RowIcon />
            </div>
            <div  onClick={() => setDisplay("grid")} className={classNames(display === "grid" ? "bg-white stroke-[#374151]" : " stroke-[#ACACAC]", "px-2 py-2 rounded-xl")}>
                <GridIcon />
            </div>

        </div>
    )
}