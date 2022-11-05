
import Navbar from "../../components/Buyer/Navbar/Navbar";
import CartComponent from "../../components/Cart/CartComponent";
import cartData from "../../public/cartData.json";
import type { NextPage } from "next";

const Cart: NextPage = () => {
  return (
    <>
      
        <CartComponent cartData={cartData} />
      
    </>
  );
};

export default Cart;