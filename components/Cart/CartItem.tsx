import { FC } from "react";
import Image from "next/image";
import splitNumber from "../../lib/splitNumber";
type props = {
  cartItemData: cartDataType;
};

const CartItem: FC<props> = ({ cartItemData }) => {
  const {
    title,
    quantity,
    imageUrl,
    price,
    properties,
    transportation,
    store,
  } = cartItemData;
  return (
    <>
      <hr className="my-4 " />
      <div className="bg-white w-full flex flex-row gap-3 relative">
        <button className="w-3 absolute z-10 left-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-gray-500"
            viewBox="0 0 320 512"
          >
            <path d="M315.31 411.31C309.056 417.563 298.936 417.563 292.682 411.31L160 278.627L27.318 411.31C21.064 417.563 10.944 417.563 4.69 411.31C-1.563 405.056 -1.563 394.936 4.69 388.682L137.373 256L4.69 123.318C-1.563 117.064 -1.563 106.944 4.69 100.69C10.944 94.437 21.064 94.437 27.318 100.69L160 233.373L292.682 100.69C298.936 94.437 309.056 94.437 315.31 100.69C321.563 106.944 321.563 117.064 315.31 123.318L182.627 256L315.31 388.682C321.563 394.936 321.563 405.056 315.31 411.31Z" />
          </svg>
        </button>
        <div className="h-fit w-[100px] flex flex-col items-center justify-between gap-2">
          <Image src={imageUrl} height={"120px"} width={"120px"} />
          <div className="w-5/6 border-solid border-[#EFEFEF] border-2 rounded-lg flex flex-row items-center h-8">
            <svg
              className="h-16 w-16 fill-gray-500 p-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M432 256C432 269.25 421.25 280 408 280H248V440C248 453.25 237.25 464 224 464S200 453.25 200 440V280H40C26.75 280 16 269.25 16 256S26.75 232 40 232H200V72C200 58.75 210.75 48 224 48S248 58.75 248 72V232H408C421.25 232 432 242.75 432 256Z" />
            </svg>

            <input
              className="text-gray-500 w-full p-2 h-full text-center"
              value={quantity}
              onChange={() => {}}
              type="number"
            />
            <svg
              className="h-16 w-16 fill-gray-500 p-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M432 256C432 269.25 421.25 280 408 280H40C26.75 280 16 269.25 16 256S26.75 232 40 232H408C421.25 232 432 242.75 432 256Z" />
            </svg>
          </div>
          <span className="text-sm font-[400] text-[#434343]">
            {splitNumber(price)} تومان
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-[400] text-gray-800 text-sm">{title}</span>
          {Object.entries(properties).map(([key, prop], index) => (
            <span key={index} className="text-[#525252] text-sm">
              {key}: <span className="font-[400]">{prop}</span>
            </span>
          ))}
          <div>
            <span className="w-full">
              <svg
                viewBox="0 0 22 18"
                fill="none"
                className="w-[22px] h-[18px] inline ml-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.8145 4.88985L18.8796 0.489844C18.6734 0.180469 18.3296 0 17.9644 0H4.03373C3.66849 0 3.32474 0.180469 3.11849 0.489844L0.188024 4.88985C-0.301819 5.62032 0.222399 6.60001 1.10326 6.60001H2.19996V15.95C2.19996 16.8613 2.93868 17.6 3.84996 17.6H11.5503C12.4614 17.6 13.2 16.8614 13.2 15.9504V7.97494C13.2 7.82307 13.0769 7.70001 12.925 7.70001C12.7732 7.70001 12.65 7.82307 12.65 7.97494V15.95C12.65 16.5575 12.1576 17.05 11.55 17.05H3.84955C3.24221 17.05 2.74982 16.5576 2.74982 15.9503V6.60001H19.25V16.775C19.25 16.9265 19.1264 17.05 18.975 17.05H17.875C17.7235 17.05 17.6 16.9265 17.6 16.775V7.97501C17.6 7.82355 17.477 7.70001 17.325 7.70001C17.1729 7.70001 17.05 7.82355 17.05 7.97501V16.775C17.05 17.2294 17.42 17.6 17.875 17.6H18.975C19.4299 17.6 19.8 17.2294 19.8 16.775V6.60001H20.8992C21.7758 6.60001 22.3 5.62032 21.8145 4.88985ZM21.3825 5.75971C21.3357 5.84699 21.195 6.05001 20.8992 6.05001H1.10326C0.803887 6.05001 0.66288 5.84623 0.616165 5.75861C0.56969 5.67161 0.479524 5.44253 0.645762 5.19472L3.57616 0.794923C3.67836 0.641576 3.84941 0.550001 4.03373 0.550001H17.9644C18.1487 0.550001 18.3198 0.641576 18.4221 0.794992L21.3564 5.19424C21.5209 5.44174 21.4294 5.67216 21.3825 5.75971ZM4.67437 7.70001C4.52295 7.70001 4.39941 7.823 4.39941 7.97501V12.925C4.39941 13.077 4.52295 13.2 4.67437 13.2H10.7255C10.8769 13.2 11.0004 13.077 11.0004 12.925V7.97501C11.0004 7.823 10.8769 7.70001 10.7255 7.70001C10.574 7.70001 10.4506 7.823 10.4506 7.97501V12.65H4.9493V7.97501C4.9493 7.823 4.82583 7.70001 4.67437 7.70001Z"
                  fill="#C04500"
                />
              </svg>

              <span className="text-[#656565] text-sm">{store}</span>
            </span>
          </div>
          <div>
            <span className="w-full">
              <svg
                className="inline ml-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.795 6.75V16.95H14.04C14.0696 16.4898 14.2733 16.0581 14.6098 15.7426C14.9462 15.4272 15.3901 15.2516 15.8513 15.2516C16.3124 15.2516 16.7563 15.4272 17.0927 15.7426C17.4292 16.0581 17.6329 16.4898 17.6625 16.95H19.5V6.75H6.795Z"
                  stroke="#4B8600"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0.749922 13.35V16.95H1.95742C1.98705 16.4898 2.19077 16.0581 2.52719 15.7426C2.8636 15.4272 3.30749 15.2516 3.76867 15.2516C4.22985 15.2516 4.67374 15.4272 5.01016 15.7426C5.34658 16.0581 5.55029 16.4898 5.57992 16.95H6.79492V9.75H4.26742L0.749922 13.35Z"
                  stroke="#4B8600"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0.749922 13.3501V16.9501H1.95742C1.98705 16.4899 2.19077 16.0582 2.52719 15.7427C2.8636 15.4273 3.30749 15.2517 3.76867 15.2517C4.22985 15.2517 4.67374 15.4273 5.01016 15.7427C5.34658 16.0582 5.55029 16.4899 5.57992 16.9501H6.79492V13.3501H0.749922Z"
                  stroke="#4B8600"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.8549 18.7499C14.8525 18.7499 14.0399 17.944 14.0399 16.9499C14.0399 15.9558 14.8525 15.1499 15.8549 15.1499C16.8573 15.1499 17.6699 15.9558 17.6699 16.9499C17.6699 17.944 16.8573 18.7499 15.8549 18.7499Z"
                  stroke="#4B8600"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.7724 18.7499C2.77 18.7499 1.9574 17.944 1.9574 16.9499C1.9574 15.9558 2.77 15.1499 3.7724 15.1499C4.7748 15.1499 5.5874 15.9558 5.5874 16.9499C5.5874 17.944 4.7748 18.7499 3.7724 18.7499Z"
                  stroke="#4B8600"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23.25 7.94995H21.2925"
                  stroke="#4B8600"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23.25 10.3501H21.2925"
                  stroke="#4B8600"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23.25 12.75H21.2925"
                  stroke="#4B8600"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="text-[#656565] text-sm">
                ارسال با {transportation}
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
