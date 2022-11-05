import React, { useEffect, useState } from "react";
import { useFormik, FormikProps } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import BigFooterButton from "../../Buttons/BigFooterButton";
import { TextField, Typography } from "@mui/material";
import useWindowSize from "../../../hooks/useWindowSize";
import { useCreateDigitalStackMutation, useGetCategoriesWithoutFilterQuery } from "../../../graphql/generated/graphql";
import MobileMenu from "../../MobileMenu";
import { useDigitalStack } from "../../Stores/SellerPanel";


type Props = {
  setShowAddShop: (e: any) => void
};



export default function AddShop({ setShowAddShop }: Props) {
  //// Hooks ////
  const { data: CategoriesData, loading: CategoriesLoading, error: CategoriesError } = useGetCategoriesWithoutFilterQuery()
  const [CreateDigitalStack, { data: CreateDigitalStackData, error: CreateDigitalStackError, loading: CreateDigitalStackLoading }] = useCreateDigitalStackMutation()
  const [categories, setCategories] = useState([])
  const { width } = useWindowSize()
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [shopName, setShopName] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()
  const {digitalStack, setDigitalStack} = useDigitalStack()

  useEffect(() => {
    CategoriesData && prepareData()
  }, [CategoriesData])

  useEffect(() => {
    if (CreateDigitalStackData?.CreateDigitalStack) {
      toast.success('فروشگاه با موفقیت ایجاد شد')
      setDigitalStack(CreateDigitalStackData.CreateDigitalStack.id)
      router.push('/sellerpanel/shop')
    }
    else if (CreateDigitalStackError?.message) {
      toast.error('خطا در ارتباط با سرور')
    }
  }, [CreateDigitalStackLoading])

  useEffect(() => {
    const timeOut = setTimeout(() => {
      (shopName.length < 2 && shopName.length) && setError("نام فروشگاه کوتاه است")
    }, 500)
    return () => {
      clearTimeout(timeOut)
      setError("")
    }
  }, [shopName])
  //// ////

  //// functions ////
  // console.log(CategoriesData)

  function prepareData() {
    const tempArray = []
    CategoriesData.GetCategories.map((cat) => {
      tempArray.push({ value: cat.id, label: cat.name })

    })
    setCategories([...tempArray])
  }

  function submitFn() {
    // console.log(selectedCategory, shopName);
    CreateDigitalStack({
      variables: {
        categories: [selectedCategory.value],
        name: shopName
      }
    })
  }
  //// ////
  return (
      <div className="w-full px-[25px] flex flex-col gap-4 h-full items-center justify-center relative">
        <div className="absolute top-0 right-[25px]">
          <MobileMenu onClick={() => setShowAddShop(false)} back={true} title='افزدن فروشگاه' />
        </div>
        <form
          className=" w-full bg-white flex flex-col gap-4 "
          onSubmit={(e) => {
            e.preventDefault();
            submitFn()
          }}
        >

          <TextField
            name="shopName"
            label={width >= 640 ? <Typography variant="caption" component="h6">نام فروشگاه</Typography> : 'نام فروشگاه'}
            value={shopName}
            onChange={(e) => setShopName(e.currentTarget.value)}
            onBlur={() => shopName.length < 2 && setError('لطفا این فیلد پر شود')}
            onFocus={() => setError('')}
            error={error.length > 0}
            helperText={error}
            fullWidth
          />
          <Select

            name="selectedCategory"
            id="selectedCategory"
            value={selectedCategory}
            onChange={setSelectedCategory}
            options={categories}
            className=" [&>*]:bg-white first:h-14 w-full"
            placeholder="دسته بندی"
          />
          <BigFooterButton loading={CreateDigitalStackLoading} disabled={error.length > 0} type="submit" name="ایجاد فروشگاه" />
        </form>
      </div>
  );
}
