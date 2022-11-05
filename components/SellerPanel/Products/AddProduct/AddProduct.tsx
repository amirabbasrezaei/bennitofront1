import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputAdornment,
  OutlinedInput,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useFormik } from "formik";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import Image from "next/image";
import type { NextRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useCreateFilterValueMutation, useCreateProductMutation, useGetFiltersLazyQuery } from "../../../../graphql/generated/graphql";
import useWindowSize from "../../../../hooks/useWindowSize";
import splitNumber from "../../../../lib/splitNumber";
import BigFooterButton from "../../../Buttons/BigFooterButton";
import { useDigitalStack } from "../../../Stores/SellerPanel";
import { AngleDownIcon, ImagesIcon, ImageThumbnail } from "../../../SVGs/SVGs";
import Category from "../Category/Category";
import AddProductOptions from "./AddProductOptions";
import axios from 'axios'
import { type } from "os";
import { uploadImages } from "./functions/addProductFunctions";
type Props = {
};

const transportation = [
  {
    value: "POST",
    label: "پست پیشتاز",
  },
  {
    value: "TIPAX",
    label: "تیپاکس",
  },
  {
    value: "TRUCKING",
    label: "باربری",
  },
];

export default function AddProduct({ }: Props) {

  /// hooks 
  const [thumbnail, setThumbnail] = useState(null)
  const [productImage, setProductImage] = useState(null)
  const [getFilters, { data: filtersData, error: filtersError, loading: filtersLoading }] = useGetFiltersLazyQuery()
  const [CreateFilterValue, { data: createFilterValueData, error: createFilterValueError, loading: createFilterValueLoading }] = useCreateFilterValueMutation()
  const { handleChange, handleSubmit, values, setFieldValue } = useFormik({
    initialValues: {
      name: '',
      description: "",
      thumbnailUploadState: false,
      productImageUploadState: 0,
      transportationState: "POST",
      priceState: "",
      quantity: 1
    },
    onSubmit: () => createProductOnsubmit()
  })

  const { digitalStack } = useDigitalStack()
  const { width, height, tailwindWidth } = useWindowSize()
  const [showCategory, setShowCategory] = useState(false)
  const [showMoreOtions, setShowMoreOptions] = useState(false)
  const [moreOptions, setMoreOptions] = useState({})
  const [checkedCategories, setCheckedCategories] = useState({})
  useEffect(() => {
    // productImage &&
    //   console.log("thumb is greater than 200kbyte", Array.of(...productImage)[0].size > 1600000); // greater than 200kbyte
  }, [productImage]);

  const [CreateProduct, { loading: CreateProductLoading, data: CreateProductData, error: CreateProductError }] = useCreateProductMutation()

  useEffect(() => {
    const createProductInfo = CreateProductData?.CreateProduct
    if (createProductInfo && !CreateProductError?.cause) {
      uploadImages(createProductInfo, setFieldValue, productImage, thumbnail)

    }
  }, [CreateProductLoading])

  useEffect(() => {
    if (values.productImageUploadState === 100) {
      toast.success('محصول با موفقیت افزوده شد')
    }

  }, [values.productImageUploadState])

  useEffect(() => {
    Array.from(Object.values(checkedCategories)).length > 0 && getFilters({
      variables: {
        "categoryId": Array.from(Object.values(checkedCategories))
      }
    })
  }, [checkedCategories])

  useEffect(() => {
    filtersData?.GetCategories && setMoreOptions(prev => ({ ...prev, filters: filtersData.GetCategories.filter((e) => e.filters.length > 0) }))
  }, [filtersData])
  ///

  /// refs
  const thumbNailInput = useRef(null);
  const productImageInput = useRef(null);
  ///


  /// functions
  function thumbNailInputHandler() {
    thumbNailInput.current.click();
  };

  function productImageInputHandler() {
    productImageInput.current.click();
  };

  function createProductOnsubmit() {
    setFieldValue('thumbNailUploadState', true)
    CreateProduct({
      variables: {
        digitalStackId: digitalStack,
        name: values?.name,
        price: values?.priceState.split(',').join('').toString(),
        quantity: Number(values?.quantity),
        categories: Array.from(Object.values(checkedCategories)),
        imageCount: productImage.length,
        tags: [],
        attributes: {}
      }
    })
  };

  function createFilterValueFunction(productId) {
    /// add productId to filters
    if (moreOptions['selected']) {
      const tempFilterValues = Array.from(Object.keys(moreOptions['selected']))
      tempFilterValues.map((filter) => filter['categoryFilterId'] = productId)

      // CreateFilterValue({
      //   variables: tempFilterValues
      // })

    }
  }
  ///

  return (
    <>
      <div className="pt-[100px]  w-full flex justify-center sm:bg-gray-100 ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="w-full flex flex-col gap-4 max-w-6xl rounded-lg"
        >
          <AnimateSharedLayout>
            <motion.div layout className="bg-white flex flex-col md:grid md:grid-cols-3 md:grid-flow-row md:grid-rows-1 sm:p-6 gap-6 items-center md:items-start justify-center md:justify-start md:shadow-md md:rounded-md">
              {width >= 768 && <motion.div layout className="w-full flex justify-end col-span-full">
                <BigFooterButton type="submit" className='w-1/4 md:h-14' loading={CreateProductLoading || values.thumbnailUploadState} name="افزودن محصول" />

              </motion.div>}
              <motion.div layout className="w-full h-80 md:row-span-1 md:col-span-1   flex justify-center items-center scrollbar-hide ">
                <motion.div layout
                  style={
                    thumbnail && {
                      backgroundImage: `url(${URL.createObjectURL(thumbnail)}) `,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                  }
                  onClick={() => thumbNailInputHandler()}
                  className="bg-[#46A6FF] md:bg-blue-50 md:border border-dashed  border-blue-300 cursor-pointer w-full h-80 md:h-full flex flex-col justify-center items-center rounded-lg md:rounded-md "
                >
                  <motion.div layout className="flex flex-col gap-4 md:gap-1 items-center w-full">
                    {!thumbnail && (
                      <>
                        <motion.div layout className="fill-white md:fill-sky-400 w-16">
                          <ImageThumbnail />
                        </motion.div>

                        <span className=" px-3 py-2 text-white md:text-sky-400 font-[500]  bg-[#46A6FF] md:bg-inherit text-base md:text-xs rounded">
                          آپلود تصویر
                        </span>
                      </>
                    )}
                    <input
                      accept="image/*"
                      ref={thumbNailInput}
                      type="file"
                      hidden
                      id="thumbNail"
                      onChange={(e) => setThumbnail(e.currentTarget.files[0])}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div layout className="p-0 md:relative bg-white md:border md:border-dashed md:border-spacing-2.5 md:border-gray-300 md:bg-gray-50 md:col-span-2 md:row-span-1 md:h-full w-full rounded-lg md:rounded-md md:justify-center md:cursor-pointer flex flex-col gap-2">
                {productImage &&
                  <motion.div layout className="grid relative p-2 gap-4 w-full grid-cols-3 md:grid-cols-6 md:grid-flow-row md:grid-rows-3 md:absolute top-0 right-0 md:bg-inherit h-full">

                    {(values.productImageUploadState > 0) && <div className="absolute backdrop-blur-md cursor-wait top-0 right-0 flex items-center justify-center w-full h-full z-20 "><div dir="ltr" className=" flex w-1/3 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                      <motion.div transition={{ duration: 0.2 }} initial={{ scaleX: 0, origin: 0, transformOrigin: '0 0' }} animate={{ scaleX: `${values.productImageUploadState}%`, origin: 0, transformOrigin: '0 0' }} className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500 w-full"  ></motion.div>
                    </div></div>}
                    {Array.of(...productImage).map((file, index) => (
                      <Image
                        key={index}
                        src={URL.createObjectURL(file)}
                        width="50px"
                        height="50px"
                        className="rounded row-span-2"
                      />
                    ))}

                  </motion.div>
                }
                <motion.div layout
                  onClick={() => productImageInputHandler()}
                  className="w-full cursor-pointer h-14 rounded flex md:flex-col justify-center items-center bg-[#1A1A1A] md:bg-inherit md:text-gray-400 md:gap-3 text-white"
                >
                  <div className="w-16 fill-gray-300">
                    <ImagesIcon />
                  </div>
                  <span className="lg:text-xs">آپلود تصاویر محصول</span>
                  <input
                    ref={productImageInput}
                    id="productImage"
                    onChange={(e) => setProductImage(e.currentTarget.files)}
                    accept="image/*"
                    type="file"
                    name="filefield"
                    multiple
                    hidden
                  />
                </motion.div>

              </motion.div>
              <motion.div className="flex flex-col gap-3 md:gap-6 w-full col-span-2 md:grid md:grid-cols-2 md:row-span-3 md:grid-flow-row" layout>
                <TextField
                  // component={motion.div}
                  id="outlined-basic"
                  name="name"
                  fullWidth
                  label={tailwindWidth === ('lg' || 'sm' || 'md' || '2xl' || 'xl') ? <Typography variant="caption" component="h6">نام محصول</Typography> : 'نام محصول'}
                  size="medium"
                  type='text'
                  value={values.name}
                  onChange={handleChange}
                  className='w-full bg-white  md:[&>*>input]:text-sm  '
                />
                <TextField
                  id="quantity"
                  value={values.quantity}
                  label={tailwindWidth === ('lg' || 'sm' || 'md' || '2xl' || 'xl') ? <Typography variant="caption" component="h6">موجودی</Typography> : 'موجودی'}
                  type="number"
                  size="medium"
                  onChange={handleChange}
                  className='w-full  bg-white lg:[&>*>input]:text-sm  md:col-span-1 md:row-span-1'
                />
                <TextField

                  label={tailwindWidth === ('lg' || 'sm' || 'md' || '2xl' || 'xl') ? <Typography variant="caption" component="h6">قیمت</Typography> : 'قیمت'}
                  type="text"
                  id="priceState"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <span className="text-sm md:text-xs">تومان</span>
                      </InputAdornment>
                    ),
                  }}
                  className='w-full  bg-white lg:[&>label]:text-sm md:col-span-1 md:row-span-1 h-full'
                  value={splitNumber(values.priceState)}
                  onChange={handleChange}
                />
                <TextField
                  id="description"
                  multiline
                  label={tailwindWidth === ('lg' || 'sm' || 'md' || '2xl' || 'xl') ? <Typography variant="caption" component="h6">توضیحات</Typography> : 'توضیحات'}
                  minRows='10'

                  size="medium"
                  type='text'
                  value={values.description}
                  onChange={handleChange}
                  className='w-full  bg-white lg:[&>label]:text-sm md:col-span-2 '
                />

              </motion.div>
              <motion.div layout className='w-full'>
                <motion.div layout onClick={() => setShowCategory(true)} className="flex cursor-pointer flex-row justify-between items-center border-gray-200 px-3 py-3 rounded-lg">
                  <motion.h2 layout className="font-[500] text-gray-500 text-lg md:text-sm">دسته بندی</motion.h2>
                  <motion.span layout className="text-[#0984E3] md:text-xs text-sm px-4 py-[5px] font-[500] border-2 border-[#0984E3] rounded-3xl">
                    ویرایش | افزودن
                  </motion.span>
                  <AnimatePresence>
                    {showCategory && <motion.div layout onClick={(e) => e.stopPropagation()} className="fixed cursor-default top-0 right-0 w-full h-full bg-gray-100  md:bg-transparent md:pb-10 sm:flex sm:flex-col sm:items-center z-30" transition={{ type: 'tween', ease: 'easeOut', duration: 0.2 }} initial={width >= 640 ? { scale: 0, opacity: 0, backdropFilter: 'blur(0px)' } : { y: "100%", opacity: 0, backdropFilter: 'blur(0px)' }} animate={width >= 640 ? { scale: 1, opacity: 1, backdropFilter: 'blur(5px)' } : { y: 0, opacity: 1 }} exit={width >= 640 ? { scale: 0, opacity: 0, backdropFilter: 'blur(0px)' } : { y: "100%", opacity: 0 }}>
                      <Category setCheckedCategories={setCheckedCategories} checkedCategories={checkedCategories} setShowCategory={setShowCategory} isAtAddStage={true} />
                    </motion.div>}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
              <motion.div layout className="w-full">
                <FormControl className='w-full'>
                  <FormLabel ><span className="text-gray-600 font-[600] md:text-sm">شیوه حمل و نقل</span></FormLabel>
                  <RadioGroup
                    aria-labelledby="transportation"
                    defaultValue='post'
                    name="transportationState"
                    value={values.transportationState}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="post" control={<Radio />} label="پست" />
                    <FormControlLabel value="tipax" control={<Radio />} label="تیپاکس" />
                    <FormControlLabel value="barbari" control={<Radio />} label="باربری" />
                  </RadioGroup>
                </FormControl>

              </motion.div>


              <motion.div layout className="w-full flex flex-col gap-0 bg-gray-100 rounded-md justify-center items-center md:col-span-3 " >
                <motion.div layout className="w-full flex flex-col justify-center items-center">
                  <motion.div layout onClick={() => setShowMoreOptions(prev => !prev)} className="w-full flex flex-row gap-2 items-center cursor-pointer justify-center   p-4 ">
                    <motion.span layout className="text-base md:text-sm font-[500] text-gray-700">امکانات بیشتر</motion.span>
                    <motion.div layout transition={{ duration: 0.5 }} animate={{ rotateX: showMoreOtions ? 180 : 0 }} className="w-3 fill-blue-500">
                      <AngleDownIcon />
                    </motion.div>
                  </motion.div>
                  {showMoreOtions && <motion.hr layout className="bg-white text-white fill-white outline-none border-white  w-[90%]" />}
                  <AnimatePresence>
                    {showMoreOtions && <motion.div layout transition={{ type: 'tween' }} initial={{ y: 0, origin: 0, transformOrigin: "0 0" }} animate={{ y: 1, origin: 0, transformOrigin: "0 0" }} exit={{ y: 0, origin: 0, transformOrigin: "0 0" }} className="w-full h-full  p-3 overflow-hidden">
                      <AddProductOptions moreOptions={moreOptions} setMoreOtions={setMoreOptions} />
                    </motion.div>}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            </motion.div>
            <BigFooterButton type="submit" className='md:hidden' loading={CreateProductLoading || values.productImageUploadState > 0} name="افزودن محصول" />
          </AnimateSharedLayout>
        </form>
      </div>
    </>
  );
}

