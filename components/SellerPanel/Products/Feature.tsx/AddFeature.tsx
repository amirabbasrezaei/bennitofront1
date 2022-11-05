import { TextField } from '@mui/material'
import { create } from 'domain'
import React, { useEffect, useRef, useState } from 'react'
import sampleFeature from '../../../../public/sampleFeature.json'
import { PlusIcon, SpinnerIcon, TrashIcon } from '../../../SVGs/SVGs'

type Props = {}

export default function AddFeature({ }: Props) {
    const [feature, setFeature] = useState();
    const [options, setOptions] = useState([{ "id": 1, "value": "" }, { "id": 2, "value": "" }]);
    const featureTitleRef = useRef(null)
    const featureOptionRef = useRef(null)
    const [focusInput, setFocusInput] = useState(0)
    const [loading, setloading] = useState(false) // must replace with apollo client loading

    const addOption = () => {
        const tempOpt = [...options]
        let lastID = options.length
        ++lastID
        tempOpt.push({ "id": lastID, "value": "" })
        setOptions([...tempOpt])
        setFocusInput(1)
    }

    const changeValue = (id: number, value: string) => {
        const tempOpt = [...options]
        tempOpt.filter((o) => o.id === id)[0]["value"] = value
        setOptions([...tempOpt])


    }


    const manageFocusInput = () => {
        if (focusInput === 0) featureTitleRef.current?.focus()
        setFocusInput(1)
    }
    const removeOption = (id: number) => {

        let tempOpt = [...options]
        tempOpt = [...tempOpt.filter((o) => o.id !== id)]
        console.log(tempOpt);
        let count = 1;
        tempOpt.map((o) => { o.id = count++ })
        setOptions([...tempOpt])
    }


    manageFocusInput()
    return (
        <div className='w-full flex flex-col items-center gap-3'>
            <div className='w-full '>

                <TextField
                    inputRef={featureTitleRef}
                    id="outlined-basic"
                    label="نام ویژگی"
                    size="medium"

                    sx={{
                        borderColor: "white",
                        width: "100%",
                        border: "1px",
                        "& .MuiOutlinedInput-notchedOutline  ": {
                            borderRadius: "0.6rem",
                            border: "2px solid #EFEFEF",
                            outline: "none",
                            boxShadow: "none",

                        }
                    }}
                />
                <div className='flex flex-col gap-4 mt-4 '>
                    {options.map(({ id, value }, index) => <div className='relative' key={index}><TextField
                        value={value}
                        inputRef={featureOptionRef}
                        id={id.toString()}
                        label={"گزینه " + id}
                        onChange={(e) => {
                            changeValue(+e.currentTarget.id, e.currentTarget.value);
                        }}
                        autoFocus
                        size="medium"
                        sx={{
                            borderColor: "white",
                            width: "100%",
                            border: "1px",
                            "& .MuiOutlinedInput-notchedOutline  ": {
                                borderRadius: "0.6rem",
                                border: "2px solid #EFEFEF",
                                outline: "none",
                                boxShadow: "none"
                            }
                        }}
                    /><div id={id.toString()} onClick={(e) => removeOption(+e.currentTarget.id)} className="w-4 absolute left-5 bottom-[30%] fill-red-500 z-10"><TrashIcon /></div></div>)}
                </div>
            </div>
            <div className='flex flex-row items-center gap-1 mt-3 w-full justify-center' onClick={() => addOption()}>
                <span className='text-[#3A7B99] text-center '  >افزودن گزینه</span>
                <div className='w-3 fill-[#3A7B99]'>
                    <PlusIcon />
                </div>
            </div>

            <button
                className="w-full h-12 text-[1rem] font-[400] rounded-xl
                     flex justify-center items-center bg-[#3A7B99] text-white my-6"
                    onClick={() => setloading(!loading)}
            >
                {!loading && <span>افزودن ویژگی</span>}
                {loading && (
                   <SpinnerIcon />
                )}
            </button>

        </div>
    )
}