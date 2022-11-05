import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { FC, useState } from "react";

type propsType = {};

const JumpingSearchbar: FC<propsType> = ({}) => {
  const [isJump, setJump] = useState(false);
  return (
    <>
      <AnimatePresence>
        {isJump && (
          <motion.div
            className="backdrop bg-black top-0 bottom-0 fixed w-full bg-opacity-60 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </AnimatePresence>
      <motion.div
        className="fixed bottom-[5.5rem] w-full h-14 px-3"
        initial={false}
        animate={isJump ? { top: 20 } : { y: 0 }}
        transition={{ type: "spring", duration: 0.4, bounce: 0.2 }}
      >
        <div
          className={classNames(
            "flex flex-row justify-center items-center px-5",
            "w-full h-14 bg-white rounded-xl max-w-xl m-auto",
            "shadow-[0_0px_10px_0_rgba(0,0,0,0.07)]"
          )}
        >
          <input
            className="flex-1"
            placeholder="جستجو در آس پوشان"
            onFocus={() => {
              setJump(true);
            }}
            onBlur={() => {
              setJump(false);
            }}
          />
          <div className="h-10 w-10 bg-red-400">ic</div>
        </div>
      </motion.div>
    </>
  );
};
export default JumpingSearchbar;
