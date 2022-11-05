
import Navbar from "../../components/Buyer/Navbar/Navbar";
import CartComponent from "../../components/Cart/CartComponent";
import cartData from "../../public/cartData.json";
import type { GetServerSideProps, NextPage } from "next";

const PayStep: NextPage = () => {

    
  return (
    <>
      
        <CartComponent cartData={cartData} />
      
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  
  return{
    props:{}
  }
}
export default PayStep;