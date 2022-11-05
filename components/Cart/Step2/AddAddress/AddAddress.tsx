import { FC } from "react";
import { motion } from "framer-motion";
import provinces from './Provinces.json'
import CustomInput from "./CustomInput";
import CustomSelectTag from "./CustomSelectTag";

const addAddressAnimate = {
  initial: {
    height: "0",
  },
  animate: {
    height: "100%",
  },
  exit: {
    height: "0",
  },
  transition: {
    duration: 0.3,
  },
};
export type Province = {
  title: string,
  id: string
}

interface Props {
  setaddAddressState: (val: boolean) => void;
}
const AddAddress: FC<Props> = ({ setaddAddressState }) => {
  return (
    <motion.div
      key="addressBox"
      onClick={(e) => e.stopPropagation()}
      className="fixed h-full w-full bg-white z-30 overflow-y-scroll bottom-0 right-0 flex flex-col px-5 py-2 gap-4 "
      {...addAddressAnimate}
    >
      <div className="relative flex items-center justify-center">
        <h2 className="text-xl font-[500]  p-3">آدرس جدید</h2>
        <button
          className="absolute left-0 top-4 h-3 w-3"
          onClick={() => setaddAddressState(false)}
        >
          <svg
            className="fill-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M206.668 464.592L22.688 272.594C18.219 267.969 16 261.969 16 256.001S18.219 244.032 22.688 239.407L206.668 47.409C215.82 37.815 231.008 37.503 240.57 46.69C250.195 55.815 250.508 71.065 241.289 80.596L73.242 256.001L241.289 431.405C250.508 440.905 250.195 456.186 240.57 465.311C231.008 474.499 215.82 474.186 206.668 464.592Z" />
          </svg>
        </button>
      </div>
      <div className="flex flex-col gap-6 mb-20">
        <div className="flex flex-col gap-4">
          <h3 className="text-[#686868] text-[17px] font-[500] ">
            اطلاعات تحویل گیرنده
          </h3>
          <CustomInput name="name">نام گیرنده</CustomInput>
          <CustomInput name="fname">نام خانوادگی</CustomInput>
          <CustomInput name="personalID" Optional={true}>
            کد ملی
          </CustomInput>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-[#686868] text-[17px] font-[500] ">
            اطلاعات ارسال
          </h3>
          <CustomInput name="mobileNumber">شماره تلفن همراه</CustomInput>
          <CustomInput name="phoneNumber" Optional={true}>
            شماره تلفن ثابت
          </CustomInput>
          <CustomSelectTag name="province" data={provinces}  defaultValue="انتخاب استان">استان</CustomSelectTag>
          <CustomSelectTag name="city" data={provinces} defaultValue="انتخاب شهر">شهر</CustomSelectTag>
        </div>
      </div>
      <div className="fixed right-0 bottom-0 p-4 w-full flex items-center justify-center">
          <button className="w-full h-14 bg-[#0984E3] rounded-3xl text-white font-[500] text-lg" onClick={() =>{

            }}>
            ثبت آدرس
          </button>
        </div>
    </motion.div>
  );
};

export default AddAddress;
