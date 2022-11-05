import { FC } from "react";
import classNames from "classnames";
import { Province } from "./AddAddress";

interface CustomSelectTagProps {
  name: string;
  Optional?: boolean;
  data: Province[];
  defaultValue: string
}

const CustomSelectTag: FC<CustomSelectTagProps> = ({
  name,
  children,
  Optional,
  data,
  defaultValue = "انتخاب کنید"
}) => {

    console.log(data);
    
  return (
    <div key={name} className="relative h-fit">
      <label
        className="absolute bg-white py-1 px-3 text-[15px] font-[400] text-gray-400 label -top-3 right-4 "
        htmlFor={name}
      >
        {children}
      </label>

      <select
        id={name}
        className="w-full h-16 border-2 border-[#EFEFEF] bg-white rounded-3xl px-7 py-1 text-gray-700 font-[500] text-base block w-full  focus:outline-none"
        name={name}
        // onChange={(e) => {
        //   e.currentTarget.value.length && setlabelShow(false)
        // }}
        // onBlur={(e) => {
        //   !e.currentTarget.value.length && setlabelShow(false);
        // }}
        // onFocus={() => setlabelShow(true)}
      >
          <option value="default">{defaultValue}</option>
        {data.map(({title, id}) => 
          <option key={id} className="appearance-none " value={title}>
            {title}
          </option>
        )}
      </select>
      {Optional && (
        <span className="absolute top-[25px] text-sm left-4 text-[#74B9FF]">
          اختیاری
        </span>
      )}
    </div>
  );
};

export default CustomSelectTag;
