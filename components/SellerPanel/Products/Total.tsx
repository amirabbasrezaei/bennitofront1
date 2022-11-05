import React, { useState } from 'react'
import SellerPanelLayout from '../../layout/SellerPanelLayout'
import MobileMenu from './Menu/MobileMenu'
import Products from './Products'


type Props = {}

export default function Total({ }: Props) {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <SellerPanelLayout mobilemenu={false} navbar={true} bgcolor="gray-100">
            <MobileMenu isshowMenu={showMenu} issetShowMenu={setShowMenu} />
            <Products showMenu={showMenu} setShowMenu={setShowMenu} />
        </SellerPanelLayout>
    )
}