import { Checkbox, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React, { useRef, useState } from 'react'

type Props = {}

export default function CreateCategory({ }: Props) {
    const [values, setValues] = useState([])
    const valuesRef = useRef(null)
    const [isMultipleChoice, setisMultipleChoice] = useState(false)
    const [ isSelectableByUser,  setisSelectableByUser] = useState(false)
    const {handleChange, handleSubmit} = useFormik({
        initialValues:{
            "name" : ""
        },
        onSubmit:() => {

        }
    })
    return (
        <div className=' py-4 w-full flex flex-col gap-4'>
            <TextField
                id="outlined-basic"
                size="medium"
                label='نام دسته بندی'
                className='w-full'
            />
            <div className='flex flex-col gap-2' >
                <TextField
                className='w-full'
                    size="medium"
                    label='مقدار'
                    ref={valuesRef}
                />
                <div onClick={() => setValues([...values,valuesRef.current.value])} className='bg-blue-500 text-white flex justify-center items-center p-4 rounded'>
                    <span>افزودن مقدار</span>
                </div>
            </div>
            <div>
                <label htmlFor="isMultipleChoice">چند انتخابی؟</label>
                <Checkbox id="isMultipleChoice" checked={isMultipleChoice} onChange={() => setisMultipleChoice(!isMultipleChoice)}/>
            </div>
            <div>
                <label htmlFor=" isSelectableByUser">توسط کاربر انتخاب شده؟</label>
                <Checkbox id=" isSelectableByUser" checked={isSelectableByUser} onChange={() => setisSelectableByUser(! isSelectableByUser)}/>
            </div>
        </div>
    )
}