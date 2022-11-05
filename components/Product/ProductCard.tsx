import Image from "next/image";
import { FC, MouseEventHandler, useState } from "react";
import classNames from "classnames";
import {  motion } from "framer-motion";
import Product from "./Product";

type productProps = {
  product: Product;
  labelColor?: string;
  openProductHandler?: (id: string) => void;
};

const ProductCard: FC<productProps> = ({
  product,
  openProductHandler,
  labelColor,
}) => {
  const [showProduct, setshowProduct] = useState("");
  const { id, title, price, imageUrl, dec } = product;

  return (
    <>
      <motion.div
        layoutId={id}
        className="bg-white h-60 w-full flex flex-col py-2 justify-around items-center"
        onClick={() => {
          openProductHandler && openProductHandler(id);
        }}
      >
        <div dir="ltr" className="h-fit relative w-fit">
          <span
            className={classNames(
              `bg-${labelColor}-600`,
              "h-6 text-center w-fit text-white text-sm left-[2px] top rounded-sm px-2 pt-[1px] font-[300] absolute z-10"
            )}
          >
            پرفروش
          </span>
          <Image
            className="mx-auto"
            src={imageUrl}
            alt={"adfcd"}
            height={"150px"}
            width={"150px"}
          />
        </div>

        <div className="flex flex-col w-full grow p-2 gap-2">
          <h4 className="font-[400] text-base">{title}</h4>
          <span className="text-[#559800] text-sm">{price} تومان</span>
        </div>
      </motion.div>

      {/* {showProduct.length > 0 &&
        ReactDOM.createPortal(
          <Product
            title={title}
            desc={desc}
            imageUrl={imageUrl}
            close={setshowProduct}
            currentProduct={showProduct}
          />,
          document.querySelector("#postModal")
        )} */}
    </>
  );
};
export default ProductCard;
