import type { NextPage } from "next";
import { useRouter } from "next/router";
import HeadComponent from "../../../../components/HeadComponent";
import SellerPanelLayout from "../../../../components/layout/SellerPanelLayout";
import AddProduct from "../../../../components/SellerPanel/Products/AddProduct/AddProduct";
import MobileMenu from "../../../../components/SellerPanel/Products/Menu/MobileMenu";
// import React from 'react'


const index: NextPage = () => {
  return (
    <>
    <HeadComponent noindex={true} page='نام فروشگاه' title='افزودن محصول' description='افزودن محصول'  />
      <SellerPanelLayout bgcolor=" sm:bg-gray-100" navbar={true} mobilemenu={false} title="افزودن محصول">
        <MobileMenu />
          <AddProduct  />
      </SellerPanelLayout>
    </>
  );
};

export default index;
