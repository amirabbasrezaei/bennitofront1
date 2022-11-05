import React from 'react'
import HeadComponent from '../../../components/HeadComponent'
import SellerPanelLayout from '../../../components/layout/SellerPanelLayout'
import Orders from '../../../components/SellerPanel/Orders/Orders'
import MobileMenu from '../../../components/SellerPanel/Products/Menu/MobileMenu'

type Props = {}


export default function index({ }: Props) {
  return (
    <>
      <HeadComponent noindex={true} page='نام فروشگاه' title='سفارش ها' description='سفارش ها' />
      <SellerPanelLayout navbar={true} mobilemenu={true} back={false} title="سفارش ها" bgcolor='gray-100'>
        <Orders />
      </SellerPanelLayout>
    </>
  )
}