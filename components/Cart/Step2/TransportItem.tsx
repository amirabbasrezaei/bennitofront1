import { FC, useRef } from "react";

interface transportProps {
  name: string;
  icon?: string;
  id: number;
}
const TransportItam: FC<transportProps> = ({ name, icon, id }) => {
  const radioRef = useRef(null);
  return (
    // <div className="form-check flex flex-row gap-3 items-center">
    //   <div className="bg-white">
    //     <input
    //       ref={radioRef}
    //       className="form-check-input appearance-none rounded-full h-8 w-8 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
    //       type="radio"
    //       name="radio"
    //       id={String(id)}
    //       {...(id === 1 ? "checked" : "")}
    //     />
    //   </div>
    //   <div>
       
    //   </div>
    //   <span className="text-[#414141] font-[500]">{name}</span>
    // </div>

    <>
      <div className="flex items-center mr-4 mb-4 gap-3">
        <input id={String(id)} type="radio" name="radio" className="hidden"  />
        <label htmlFor={String(id)} className="flex items-center cursor-pointer ">
          <span className="w-8 h-8 inline-block mr-1 rounded-full border border-grey"></span>
          
        </label>
        <svg
          width="55"
          height="31"
          viewBox="0 0 55 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.1381 1.03125V25.2563H32.345C32.4154 24.1632 32.8992 23.1379 33.6982 22.3887C34.4972 21.6395 35.5514 21.2226 36.6467 21.2226C37.742 21.2226 38.7963 21.6395 39.5952 22.3887C40.3942 23.1379 40.8781 24.1632 40.9484 25.2563H45.3125V1.03125H15.1381Z"
            stroke="#3C4044"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M0.781311 16.7062V25.2563H3.64912C3.7195 24.1632 4.20332 23.1379 5.00231 22.3887C5.80131 21.6395 6.85554 21.2226 7.95084 21.2226C9.04615 21.2226 10.1004 21.6395 10.8994 22.3887C11.6984 23.1379 12.1822 24.1632 12.2526 25.2563H15.1382V8.15625H9.13537L0.781311 16.7062Z"
            stroke="#3C4044"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M0.781311 16.7061V25.2561H3.64912C3.7195 24.163 4.20332 23.1378 5.00231 22.3885C5.80131 21.6393 6.85554 21.2224 7.95084 21.2224C9.04615 21.2224 10.1004 21.6393 10.8994 22.3885C11.6984 23.1378 12.1822 24.163 12.2526 25.2561H15.1382V16.7061H0.781311Z"
            stroke="#3C4044"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36.6557 29.5314C34.275 29.5314 32.3451 27.6175 32.3451 25.2564C32.3451 22.8954 34.275 20.9814 36.6557 20.9814C39.0364 20.9814 40.9663 22.8954 40.9663 25.2564C40.9663 27.6175 39.0364 29.5314 36.6557 29.5314Z"
            stroke="#3C4044"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.95963 29.5314C5.57894 29.5314 3.649 27.6175 3.649 25.2564C3.649 22.8954 5.57894 20.9814 7.95963 20.9814C10.3403 20.9814 12.2703 22.8954 12.2703 25.2564C12.2703 27.6175 10.3403 29.5314 7.95963 29.5314Z"
            stroke="#3C4044"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M54.2188 3.88135H49.5697"
            stroke="#3C4044"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M54.2188 9.58105H49.5697"
            stroke="#3C4044"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M54.2188 15.2812H49.5697"
            stroke="#3C4044"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h4 className="font-[500] text-[#414141]">{name}</h4>
      </div>
    </>
  );
};

export default TransportItam;
