import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";
type propsType = {
  isTop?: boolean;
  theme?: string;
};

const fake: any[] = new Array(16).fill(
  { name: "cat", img: "/images/1606046.jpeg" },
  0,
  16
);

const Categories: FC<propsType> = () => {
  return (
    <div
      className={classNames(
        "w-full grid grid-cols-3 gap-4 justify-items-center content-center pt-10"
      )}
    >
      {fake.map((item, index) => {
        return (
          <AnimatePresence key={index}>
            <motion.div
              key={index}
              layoutId={index + ""}
              className="flex flex-col justify-center items-center"
            >
              <Link href={"./product/0"}>go</Link>
              <div className="image h-24 w-24 rounded-full bg-blue-500"></div>
              <h1 className="pt-2">{item.name}</h1>
            </motion.div>
          </AnimatePresence>
        );
      })}
    </div>
  );
};
export default Categories;
