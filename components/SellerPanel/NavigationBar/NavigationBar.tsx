import classNames from 'classnames';
import { AnimateSharedLayout, LayoutGroup, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { SellerPanelHomeIcon, SellerPanelOrdersIcon, SellerPanelProfileIcon } from '../../SVGs/SVGs';

type Props = {}

const navPages = [
    {
        "name": "products", "icon": <SellerPanelHomeIcon />, "href": "/sellerpanel/shop"
    },
    { "name": "orders", "icon": <SellerPanelOrdersIcon />, "href": "/sellerpanel/orders" },
    { "name": "profile", "icon": <SellerPanelProfileIcon />, "href": "/sellerpanel/profile" }
]

const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30
};


export default function NavigationBar({ }: Props) {
    const router = useRouter()

    const path = router.asPath
    const [selected, setSelected] = useState(navPages.filter((e: any) => "/sellerpanel/" + path.split('/')[2] === e.href)[0].name);
    


    return (
        <div className='fixed bottom-0 right-0 w-full bg-white z-10 h-[60px] shadow-[0_-4px_20px_0_rgba(0,0,0,0.07)]'>
            <LayoutGroup >
                <ul className='flex flex-row w-full h-full items-center justify-between'>
                    {navPages.map((page, index) => (
                        <Item
                            key={index}
                            isSelected={selected === page.name}
                            onClick={() => setSelected(page.name)}
                            icon={page.icon}
                            href={page.href}
                        />
                    ))}
                </ul>
            </LayoutGroup>
        </div>

    );
}

function Item({ isSelected, onClick, icon, href }) {
    return (
        <Link href={href}>
            <motion.li  className="w-1/3 flex cursor-pointer justify-center items-center relative z-10" onClick={onClick} >
                <motion.div initial={false}  className={classNames('w-6 h-6 z-10 ', isSelected ? "fill-sky-500 stroke-sky-500" : "fill-gray-300 stroke-gray-300")}>
                    {icon}
                </motion.div>
                {isSelected &&
                    <motion.div
                        layoutId="indicdor"
                        initial={false}
                        animate={""}
                        transition={spring}
                        className="w-[45px] h-[45px] bg-sky-100 absolute rounded-full z-0 background"
                    />
                }
            </motion.li>
        </Link>
    );
}