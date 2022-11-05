import React, { useState, useRef } from 'react'
import { AnimatePresence, motion, useCycle } from "framer-motion"
import useWindowDimensions from './useWindowDimensions'
import classNames from "classnames";
import MobileMenuItems from './MobileMenuItem';
import { AddProductIcon, CategoryIcon, ProductsIcon } from '../../../SVGs/SVGs';
import MobileMenuItem from './MobileMenuItem';
import { useRouter } from 'next/router';
import useWindowSize from '../../../../hooks/useWindowSize';

type Props = {
    isshowMenu?: boolean;
    issetShowMenu?: (e) => void;
}

const Directories = [
    { "name": "محصولات", "href": "/sellerpanel/shop/products/", "icon": <ProductsIcon />, "engName": "products" },
    { "name": "دسته بندی ها", "href": "/sellerpanel/shop/category/", "icon": <CategoryIcon />, "engName": "category" },
    { "name": "افزودن محصول", "href": "/sellerpanel/shop/addproduct/", "icon": <AddProductIcon />, "engName": "addproduct" }
]



const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};





export default function MobileMenu({ isshowMenu, issetShowMenu }: Props) {
    const { width, tailwindWidth } = useWindowSize()
    const [showMenu, setShowMenu] = useState(false)
    const router = useRouter()
    const path = router.asPath
    const [clickedPage, setClickPage] = useState(Directories.filter((e: any) => "/sellerpanel/shop/" + path.split('/')[3] + "/" === e.href)[0]);



    const sideBarMenuIconCheckBox = useRef(null)
    const menuVariant = {
        open: (height = 1000) => ({
            clipPath: `circle(${height * 2 + 200}px at calc(100% - 45px) 45px)`,
            // origin:"100% 100%",

            transition: {
                type: "spring",
                stiffness: 20,
                restDelta: 2,
            },

        }),
        closed: {
            clipPath: `circle(20px at calc(100% - 45px) 45px)`,
            // origin:"100% 100%",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40,
            },

        }
    }


    return (
        <>


            <AnimatePresence>
                {showMenu &&
                    <motion.div initial={{ backdropFilter: "blur(0)" }} animate={{ backdropFilter: "blur(5px)" }} exit={{ backdropFilter: "blur(0)" }} className="w-full h-full fixed bg-transparent  z-20">  </motion.div>}
            </AnimatePresence>
            <motion.div variants={menuVariant}
                style={{ textAlign: "right" }}
                initial={false}
                animate={showMenu ? "open" : "closed"}
                className={classNames('bg-white w-full md:w-[20%] top-0 right-0  h-[100%]', showMenu ? "fixed z-30 h-full" : "absolute z-20", isshowMenu ? "" : "")}


            >

                <div className='mt-[34px] mr-[34px]'>

                    <label className='menuIconLabel w-[30px] ' htmlFor="check" >
                        <input className='menuIconInput' type="checkbox" ref={sideBarMenuIconCheckBox} id="check" onChange={() => setShowMenu(!showMenu)} />
                        <span className='menuIconSpan1'></span>
                        <span className='menuIconSpan2'></span>
                        <span className='menuIconSpan3'></span>
                    </label>

                </div>
                <motion.div variants={variants} className='px-[20px] w-full  md:items-center  mt-4 flex flex-col gap-4'>
                    {Directories.map((page, index) => <MobileMenuItem key={index} isSelected={clickedPage.engName === page.engName} name={page.name} href={page.href} icon={page.icon} />)}
                </motion.div>
            </motion.div>
            <div className=' absolute top-[30px] right-[80px]' onClick={() => {
                sideBarMenuIconCheckBox.current.checked = true;
                setShowMenu(!showMenu)
            }}>
                <span className='font-[400] text-gray-700 text-sm'>{clickedPage.name}</span>
            </div>
        </>
    )
}