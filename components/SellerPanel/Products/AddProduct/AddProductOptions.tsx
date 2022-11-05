import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, useRadioGroup } from '@mui/material';

import React, { useState } from 'react'
import FilterItem from './FilterItem';

type Props = {
    setMoreOtions: (e: any) => void;
    moreOptions: object;
}

export default function AddProductOptions({ setMoreOtions, moreOptions }: Props) {

    // console.log('moreOptions', moreOptions["filters"])

    return (
        <div className=' w-full h-full p-4'>
            {moreOptions["filters"] && moreOptions["filters"].map((category) =>
                <div key={category.id} className=''>
                    <span className='text-lg text-blue-600 font-[500] '>{category.name}</span>
                    <div className='flex flex-row gap-6 mt-3' key={category.id}>
                        {category.filters.map((filter) => <FilterItem moreOptions={moreOptions} setMoreOtions={setMoreOtions} key={filter.id} filter={filter} />)}
                    </div>
                </div>
            )}
        </div>
    )
}