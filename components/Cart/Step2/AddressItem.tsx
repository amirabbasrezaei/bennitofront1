import { FC, useRef } from "react";

const AddressItem: FC = () => {
    const radioRef = useRef(null)
  return (
    <div className="form-check">
      <div className="bg-white">
        <input
          ref={radioRef}
          className="form-check-input appearance-none rounded-full h-8 w-8 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
          type="radio"
          name=""
          id=""
        />
      </div>
    </div>
  );
};

export default AddressItem;
