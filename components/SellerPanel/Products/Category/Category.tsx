import { useMutation, useQuery } from "@apollo/client";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"
import CategoryItem from "./CategoryItem";
import { BackButton, XmarkIcon } from "../../../SVGs/SVGs";
import MobileMenu from "../../../MobileMenu";
import BigFooterButton from "../../../Buttons/BigFooterButton";
import Categories from "../../../Categories";
import LoadingPage from "../../../LoadingPage";
import CategoryItemSkeleton from "./CategoryItemSkeleton";
import { useGetCategoriesWithoutFilterQuery } from "../../../../graphql/generated/graphql";



// import { CreateCategoryDocument, CreateCategoryMutation, CreateCategoryMutationVariables, GetStackCategoriesDocument, QueryGetStackCategoriesArgs, QueryGetStackFieldArgs } from "../../../../src/generated/graphql";

type Props = {
  isAtAddStage: boolean;
  setShowCategory?: (e) => void;
  setCheckedCategories: (e) => void;
  checkedCategories: any;
};

const stackID = "cl6gq62o000000m2u47rzkgag" // should get stackID first


export default function Category({ isAtAddStage, setShowCategory, setCheckedCategories, checkedCategories }: Props) {

  /// Hooks & variables ///
  const { data: GetCategoriesData, loading: GetCategoriesLoading, error: GetCategoriesError } = useGetCategoriesWithoutFilterQuery()
  const [selecetedCategories, setSelecetedCategories] = useState([])
  const [rootCategories, setRootCategories] = useState([])

  const [categoryAnimationDirection, setcategoryAnimationDirection] = useState("forward")

  useEffect(() => {
    if (GetCategoriesData) {
      setRootCategories(prepapreCategoryData(GetCategoriesData.GetCategories))

    }
  }, [GetCategoriesData])

  useEffect(() => {
    const filteredRootCategory = [...rootCategories.filter((e) => !e.parentId)]

    setSelecetedCategories([filteredRootCategory])
  }, [rootCategories])

  useEffect(() => {

    setCheckedCategories(assignCheckedCategories(selecetedCategories))

  }, [selecetedCategories])
  /// ///

  /// functions ///

  function assignCheckedCategories(loopArray) {
    const checkedObj = {}
    let count = 0
    loopArray.map((category) => {
      category.map((cat) => {
        if (cat.checked) {
          checkedObj[count] = cat.id
          ++count
        }
      })
    })
    return checkedObj
  }

  function addCategory(category) {
    setcategoryAnimationDirection("forward")
    const selectedCatsToImport = []
    if (category.subs.length) {
      rootCategories.map((cat) => {
        category.subs.map((catId) => {
          if (cat.id === catId) {
            selectedCatsToImport.push(cat)
          }
        })
      })
      setSelecetedCategories(prev => [...prev, selectedCatsToImport])
    }
    checkCategory(category, "addProductCheck")
  }

  function checkCategory(category, check?: string) {
    const tempCategoriesToCheck = (prev) =>
      prev.at(-1).map((cat) => {
        if (cat.id === category.id) {
          if (!category.subs.length) {
            return cat.checked = !cat.checked
          }
          check ? cat.checked = true : cat.checked = !cat.checked
        }
      })

    tempCategoriesToCheck(selecetedCategories)

    setSelecetedCategories(prev => [...prev])
  }



  function removeCategory() {
    setcategoryAnimationDirection("backward")
    selecetedCategories.length > 1 ? setSelecetedCategories(prev => prev.slice(0, -1)) : setShowCategory(false)
  }

  function prepapreCategoryData(categories) {
    const preparedCategories = []
    categories.map((category) => {
      const tempCategory = { name: category.name, id: category.id, parentId: category.parentId, checked: false, subs: [] }
      categories.map((secondCategory => {
        if (secondCategory.parentId === category.id) {
          tempCategory["subs"].push(secondCategory.id)
        }
      }))
      preparedCategories.push(tempCategory)
    })
    return preparedCategories
  }



  function onSubmitFn() {
    setShowCategory(false)
  }
  /// ///


  return (
    <>
      <div onClick={(e) => e.stopPropagation()} className="px-[20px] max-w-sm w-full ">
        <MobileMenu leftIconOnClick={() => {
          setShowCategory(false);
          setCheckedCategories({})
        }}
          onClick={() => removeCategory()}
          back={true} title='دسته بندی ها'
          pushBack={false} leftIcon={<XmarkIcon />} leftIconColor="gray-700" />
      </div>
      <div onClick={(e) => e.stopPropagation()} className="w-full h-full max-w-sm md:shadow-md bg-gray-100 md:bg-white md:rounded-2xl md:py-[25px] pb-[20px] mb-5 px-[25px] scrollbar-hide  relative">
        <motion.div transition={{ delayChildren: 0.3, staggerChildren: 0.2 }} className="flex flex-col gap-2  scrollbar-hide">
          <CategoryItemSkeleton loading={GetCategoriesLoading} />
          <AnimatePresence>

            {
              selecetedCategories.length && selecetedCategories.at(-1).map((cat, index) => <CategoryItem checked={cat.checked} checkCategory={checkCategory} addCategory={addCategory} category={cat} key={cat.id} direction={categoryAnimationDirection} name={cat.name} />)
            }

          </AnimatePresence>
        </motion.div>
        <BigFooterButton className="bottom-6 md:h-12" type="button" disabled={Object.keys(checkedCategories).length < 1} onClick={() => onSubmitFn()} name="ذخیره و ادامه" sticky={true} />
      </div>
    </>

  );
}
