import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react'

type Props = {
    filter: any;
    setMoreOtions: (e:any) => void;
    moreOptions: object;
}

export default function FilterItem({ filter, setMoreOtions, moreOptions }: Props) {
    function setFilterValue(value) {
        const tempFilterValueObj = {...moreOptions['selected']}
        tempFilterValueObj[filter.id] = {categoryFilterId: filter.id, type: 'STRING', stringValue: value}
        setMoreOtions(prev => ({...prev, selected:tempFilterValueObj}))
    }
    
    
    return (
        <div key={filter.id}>
            {
                filter.expectedStrings.length > 0 && <FormControl className='w-full h-full'>
                    <FormLabel ><span className="text-gray-600 font-[600] md:text-sm">{filter.name}</span></FormLabel>
                    <RadioGroup
                        aria-labelledby="transportation"
                        defaultValue={filter.values.numberValue || filter.values.stringValue}
                        name={filter.id}
                        // value={}
                        onChange={(e) => setFilterValue(e.currentTarget.value)}
                    >
                        {filter.expectedStrings.map((option) => <FormControlLabel key={option} className='z-0'
                            value={option}
                            control={<Radio />}
                            label={option} />)}
                    </RadioGroup>
                </FormControl>}
        </div>
    )
}