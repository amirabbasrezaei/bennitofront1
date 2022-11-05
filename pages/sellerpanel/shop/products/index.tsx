import React from "react";
import Products from "../../../../components/SellerPanel/Products/Products";
import { useState } from "react"
import { useCycle } from "framer-motion";
import MobileMenu from "../../../../components/SellerPanel/Products/Menu/MobileMenu";
import SellerPanelLayout from "../../../../components/layout/SellerPanelLayout";
import Total from "../../../../components/SellerPanel/Products/Total";
import HeadComponent from "../../../../components/HeadComponent";



type Props = {};

export default function index({ }: Props) {
  return (
    <>
      <HeadComponent noindex={true} page='نام فروشگاه' title='محصولات' />
      <Total />
    </>
  )
}
