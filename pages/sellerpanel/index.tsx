import React from 'react'
import HeadComponent from '../../components/HeadComponent'
import SellerPanelLayout from '../../components/layout/SellerPanelLayout'
import SellerPanel from '../../components/SellerPanel/SellerPanel'

type Props = {}

export default function index({ }: Props) {
  return (
    <>
      <HeadComponent noindex={true} page='بنیتو' title='مدیریت فروشگاه' />
      <SellerPanel />
    </>
  )
}