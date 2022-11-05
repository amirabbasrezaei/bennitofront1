import { FC } from "react";
import CartItem from "./CartItem";
import Router from "next/router";

type props = {
  cartData: cartDataType[];
  setpayStep: (val: number) => void;
  payStep: number;
};

const clickHandler = () => {};
const Step1: FC<props> = ({ cartData, payStep, setpayStep }) => {


  return (
    <>
      {/* price show*/}
      <div className="bg-gray-50 w-full h-fit mt-10 rounded-3xl p-6 font-[400]">
        <div className="flex flex-row justify-between items-center text-gray-900">
          <span>جمع کل خرید:</span>
          <span>{"1,200,000"} تومان</span>
        </div>
        <div className="flex flex-row justify-between items-center text-red-600 mt-2">
          <span>تخفیف:</span>
          <span>{"200,000"} تومان</span>
        </div>
        <div className="flex flex-row justify-between items-center text-gray-900 mt-2 font-[500]">
          <span>مبلغ قابل پرداخت:</span>
          <span>{"1,000,000"} تومان</span>
        </div>
      </div>
      <button
        onClick={() => {
          Router.push("/cart/order?paystep=2");
          setpayStep(2);
        }}
        className="w-full h-14 bg-[#0984E3] rounded-3xl text-white font-[600] my-4 text-lg"
      >
        ادامه
      </button>

      <div className="flex flex-col  ">
        {payStep === 1 &&
          cartData.map((item, index) => (
            <CartItem key={index} cartItemData={item} />
          ))}
      </div>
    </>
  );
};

export default Step1;
