import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { Attributes, FC, HTMLInputTypeAttribute, useState } from "react";


const style = require('./CustomInput.module.css');
interface CustomInputProps {
  name: string;
  Optional?: boolean;
  fixedLabel?: boolean
  type?: HTMLInputTypeAttribute
  long?: Boolean
  onChangeInput?: (e) => void
}

const CustomInput: FC<CustomInputProps> = ({  name, children,  Optional, fixedLabel = false, type="text", long=false, onChangeInput}) => {
  const [labelShow, setlabelShow] = useState(false);

  return (
    <div key={name} className="relative h-fit w-full">
      <label
        className={classNames(
          "absolute bg-white py-1 px-3 text-[3px] font-[400] text-gray-400 label",
          labelShow || fixedLabel ? `-top-3 right-4  ${style['active']}` : `right-6  ${long ? ("top-[40px]") : ("top-[14px]")} ${style['disable']}`
        )}
        htmlFor={name}
      >
        {children}
      </label>

      <input
      autoFocus
      
        id={name}
        className={classNames("w-full border-2 border-[#EFEFEF] rounded-2xl px-6 py-7 text-gray-700 font-[600] text-lg block w-full appearance-none focus:outline-none z-10 ", long ? "h-40" : "h-8")}
        type={type}
        // onChange={(e) => {
        //   e.currentTarget.value.length && setlabelShow(false) 
        // }}
        onBlur={(e) => {!e.currentTarget.value.length && setlabelShow(false)}}
        onFocus={() => setlabelShow(true)}
        onChange={(e) => {onChangeInput && onChangeInput(e.currentTarget.value)}}
      />
      {Optional && <span className="absolute top-[23px] text-sm left-4 text-[#74B9FF]">اختیاری</span>}
    </div>
  );
};

export default CustomInput;
