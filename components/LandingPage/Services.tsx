import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import { PolygonIcon, Vector2 } from "./LandingPageSVGs";
import { motion } from "framer-motion";
import { IsAnimationActive } from "./LandingPage";
type Props = {
  width: number;
  height: number;
  isAnimationActive: IsAnimationActive;
  setIsAnimationActive: Dispatch<SetStateAction<IsAnimationActive>>;
};

export default function Services({
  height,
  isAnimationActive,
  setIsAnimationActive,
}: Props) {
  return (
    <motion.div
      onViewportEnter={() =>
        setIsAnimationActive((prev: IsAnimationActive) => ({
          ...prev,
          services: true,
        }))
      }
    
      className="h-fit md:h-screen flex flex-col md:flex-row w-full gap-14 md:gap-0 py-5"
    >
      <div className="w-full h-full flex justify-center items-center relative">
        <div className="w-[20rem] h-[10rem] md:h-[16rem] md:w-[25rem] absolute top-16 right-0 z-0">
          <Vector2 />
        </div>
        <div className="w-3/4 md:w-1/2 flex flex-col items-start justify-center gap-7 ">
          <motion.div
            animate={{
              scale: isAnimationActive?.services ? 1 : 0,
              opacity: isAnimationActive?.services ? 1 : 0,
            }}
            transition={{
                duration: 0.4
            }}
            className="w-full flex flex-col md:flex-row items-center justify-center  z-10 gap-4 "
          >
            <h2 className=" text-2xl flex-none md:text-3xl font-IRANYekan font-bold text-gray-700">
              خدمات ما
            </h2>
            <hr className="w-full  border-2 grow border-gray-700" />
          </motion.div>
          <motion.p
            animate={{
              translateY: isAnimationActive?.services ? "0px" : `200px`,
              opacity: isAnimationActive?.services ? 1 : 0,
            }}
            transition={{ duration: 0.4 }}
            className="w-full z-10 text-justify text-[#A3ACAF]"
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون است.
          </motion.p>
          <motion.button
            animate={{
              translateY: isAnimationActive?.services ? "0px" : `${height}px`,
              opacity: isAnimationActive?.services ? 1 : 0,
            }}
            transition={{ duration: 0.4 }}
            className="bg-[#2D3436] z-10 text-white rounded-3xl px-7 py-3 text-base md:text-lg"
            type="button"
          >
            مشاهده قیمت
          </motion.button>
        </div>
      </div>
      <div className="h-full w-full flex justify-center items-center relative">
        <div className="z-0 w-3/4 h-full absolute top-10 left-0">
          <PolygonIcon />
        </div>
        <div className="border-r z-10 border-gray-300 justify-center border-dashed w-[90%]  md:w-full h-fit">
          <div className="w-full  flex flex-col  h-full px-10 gap-10">
            <motion.div
              animate={{
                translateX: isAnimationActive?.services ? "0px" : `200px`,
                opacity: isAnimationActive?.services ? 1 : 0,
              }}
              transition={{delay: 0.4, duration: 0.5}}
              className="relative flex flex-col gap-3"
            >
              <span className="absolute top-0 -right-[3.3rem] text-white rounded-full w-6 text-center h-6 bg-[#61AEFF]">
                1
              </span>
              <h2 className="text-lg md:text-2xl font-bold font-IRANYekan text-[#474747]">
                آشنایی با کسب و کار
              </h2>
              <p className="font-IRANYekan text-[#8B9396] text-justify">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون است.
              </p>
            </motion.div>
            <motion.div
              animate={{
                translateX: isAnimationActive?.services ? "0px" : `200px`,
                opacity: isAnimationActive?.services ? 1 : 0,
              }}
              transition={{delay: 1, duration: 0.5}}
              className="relative flex flex-col gap-3"
            >
              <span className="absolute top-0 -right-[3.3rem] text-white rounded-full w-6 text-center h-6 bg-[#61AEFF]">
                2
              </span>
              <h2 className="text-lg md:text-2xl font-bold font-IRANYekan text-[#474747]">
                چهره ی کسب و کار نمایان میشود!!
              </h2>
              <p className="font-IRANYekan text-[#8B9396] text-justify">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون است.
              </p>
            </motion.div>
            <motion.div
              animate={{
                translateX: isAnimationActive?.services ? "0px" : `200px`,
                opacity: isAnimationActive?.services ? 1 : 0,
              }}
              transition={{delay: 1.5, duration: 0.5}}
              className="relative flex flex-col gap-3"
            >
              <span className="absolute top-0 -right-[3.3rem] text-white rounded-full w-6 text-center h-6 bg-[#61AEFF]">
                3
              </span>
              <h2 className="text-lg md:text-2xl font-bold font-IRANYekan text-[#474747]">
                آشنایی با کسب و کار
              </h2>
              <p className="font-IRANYekan text-[#8B9396] text-justify">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون است.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
