import classNames from "classnames";
import { motion, Variants } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { setInterval } from "timers/promises";
import { FilterIcon, XmarkIcon } from "../SVGs/SVGs";

type Props = {
  showMenu: boolean;
  setShowMenu: (e) => void;
};

export default function FilterItems({ showMenu, setShowMenu }: Props) {
  const filterIconRef = useRef(null);
  const neighIconRef = useRef(null);
  const [filterIconHeight, setfilterIconHeight] = useState();
  const [filterIconWidth, setfilterIconWidth] = useState();

  const getPosition = () => {
    setfilterIconHeight(filterIconRef?.current?.offsetTop);
    setfilterIconWidth(filterIconRef?.current?.offsetLeft);
  };
  useEffect(() => {
    getPosition();
  }, []);
  useEffect(() => {
    window.addEventListener("resize", getPosition);
  }, []);

  const filterVariant: Variants = {
    open: (height = 1000) => ({
      clipPath: `circle(${
        height * 2 + 200
      }px at ${filterIconWidth}px ${filterIconHeight}px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
        delay: 0,
        duration: 0.2,
      },
    }),
    closed: {
      clipPath: `circle(1px at ${filterIconWidth && filterIconWidth + 45}px ${
        filterIconHeight && filterIconHeight + 20
      }px)`,
      transition: {
        delay: 0,
        type: "spring",
        stiffness: 400,
        damping: 40,
        duration: 0.2,
      },
    },
  };

  const [FilterShow, setFilterShow] = useState(false);
  return (
    <>
      <motion.div
        initial={false}
        variants={filterVariant}
        animate={FilterShow ? "open" : "closed"}
        className={classNames(
          "h-full w-full  top-0 left-0 bg-white z-30",
          FilterShow ? "fixed " : "absolute"
        )}
      >
        {FilterShow && (
          <div
            onClick={() => setFilterShow(!FilterShow)}
            className="w-7 mr-[25px] mt-[20px] fill-gray-700"
          >
            <XmarkIcon />
          </div>
        )}
      </motion.div>
      <div
        onClick={() => setFilterShow(!FilterShow)}
        ref={filterIconRef}
        className={classNames(
          "rounded-xl w-[90px] h-[40px] bg-white px-4 flex items-center",
          (FilterShow || showMenu) && "z-0"
        )}
      >
        <div className="w-4 ml-3 ">
          <FilterIcon />
        </div>
        <span>فیلتر</span>
      </div>
    </>
  );
}
