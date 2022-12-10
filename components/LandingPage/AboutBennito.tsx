import classNames from "classnames";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import { StrategyIcon, UpdateIcon } from "../SVGs/SVGs";
import { LaunchIcon, SupportIcon, Vector1 } from "./LandingPageSVGs";
import { motion } from "framer-motion";
import mobile1 from "../../public/Images/landingPage/protMobile.png";
import mobile2 from "../../public/Images/landingPage/rotatedMobile.png";
import { IsAnimationActive } from "./LandingPage";
type Props = {
  width: number;
  tailwindWidth: string;
  isAnimationActive: IsAnimationActive;
  setIsAnimationActive: Dispatch<SetStateAction<IsAnimationActive>>;
};

export default function AboutBennito({
  width,
  isAnimationActive,
  setIsAnimationActive,
}: Props) {
  return (
    <>
      <div
        className={classNames(
          "w-full relative flex flex-col-reverse gap-3 mt-5 md:mt-0 md:flex-row  justify-center items-center overflow-hidden",
          `h-fit md:h-screen`
        )}
      >
        <motion.div
          onViewportEnter={() =>
            setIsAnimationActive((prev: IsAnimationActive) => ({
              ...prev,
              aboutBennito: true,
            }))
          }
          className="h-[32rem] w-[32rem] absolute left-0 -translate-x-48 top-[10%] z-0"
        >
          <Vector1 />
        </motion.div>
        <div className="z-10  w-full p-3">
          <motion.div
            animate={{
              scale: isAnimationActive?.aboutBennito ? 1 : 0,
              opacity: isAnimationActive?.aboutBennito ? 1 : 0,
            }}
            transition={{ delay: 0.5 }}
            className="h-[60vh] md:h-[90vh] w-full relative "
          >
            <Image
              className="md:translate-x-20 "
              placeholder="blur"
              quality={100}
              src={mobile1}
              layout="fill"
              objectFit={width > 768 ? "contain" : "contain"}
            />
          </motion.div>
        </div>
        <div className=" w-full md:p-16 z-10">
          <motion.div
            animate={{
              opacity: isAnimationActive?.aboutBennito ? 1 : 0,
              translateX: isAnimationActive?.aboutBennito ? "0px" : "-200px",
            }}
            transition={{
              duration: 0.5,
            }}
            className="w-full flex flex-col md:flex-row items-center justify-center md:items-end md:justify-start  gap-4 md:pr-6"
          >
            <h2 className="w-fit text-2xl md:text-4xl font-IRANYekan font-bold text-gray-700">
              چرا بنیتو؟
            </h2>
            <hr className="w-1/2  border-2 border-gray-700" />
          </motion.div>
          <div className="h-full w-full  flex flex-col  items-center md:items-start text-justify justify-around py-8 gap-10">
            <motion.div
              animate={{
                opacity: isAnimationActive?.aboutBennito ? 1 : 0,
                translateX: isAnimationActive?.aboutBennito
                  ? "0px"
                  : `${width}px`,
              }}
              transition={{
                duration: 0.5,
              }}
              className="w-[70%]"
            >
              <div className="flex flex-row items-center gap-4 mb-3">
                <div className="fill-[#0984E3] h-6 w-6">
                  <StrategyIcon />
                </div>
                <h3 className=" font-bold font-IRANYekan text-[#2D3436] text-lg md:text-xl text-start">
                  فروشگاهتو راحت بچرخون !
                </h3>
              </div>
              <p className="text-[#767a7b] font-IRANYekan font-[300]  md:text-lg">
                پنل مدیریت بنیتو در عین سادگی تمام چیزی که لازم هستو در
                اختیارتون قرار میده ، اینطوری به راحتی حتی بدون نیاز به کمک کسی
                میتونی فروشگاهتو مدیریت کنی.
              </p>
            </motion.div>
            <motion.div
              animate={{
                opacity: isAnimationActive?.aboutBennito ? 1 : 0,
                translateX: isAnimationActive?.aboutBennito
                  ? "0px"
                  : `-${width}px`,
              }}
              transition={{
                duration: 0.5,
              }}
              className="w-[70%]"
            >
              <div className="flex flex-row items-center gap-4 mb-3">
                <div className="fill-[#0984E3] stroke-[#0984E3] h-6 w-6">
                  <UpdateIcon />{" "}
                </div>
                <h3 className=" font-bold font-IRANYekan text-[#2D3436] text-lg md:text-xl">
                  {" "}
                  پنل مدیریت، هر روز بهتر از دیروز
                </h3>
              </div>
              <p className="text-[#767a7b] font-IRANYekan  font-normal md:text-lg">
                مگه میشه میز مدیریت بهتر بشه؟ پنل مدیریت بنیتو دائما در حال
                بهبوده و سعی میکنیم تجربه کاربری حرفه ای تر و راحت تری رو ارائه
                بدیم. اینجاست که باید گفت پاسخ &quot;`بله&quot;` هست !
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div
        className={classNames(
          "w-full relative flex flex-col-reverse gap-3 md:flex-row-reverse  justify-center items-center",
          `h-fit md:h-screen`
        )}
      >
        <div className=" absolute left-0 -translate-x-44 top-[10%] z-0">
          <Vector1 />
        </div>
        <div className="z-10  w-full p-3">
          <motion.div
            onViewportEnter={() =>
              setIsAnimationActive((prev: IsAnimationActive) => ({
                ...prev,
                aboutBennito2: true,
              }))
            }
            animate={{
              scale: isAnimationActive?.aboutBennito2 ? 1 : 0,
              opacity: isAnimationActive?.aboutBennito2 ? 1 : 0,
            }}
            transition={{ delay: 0.5 }}
            className="h-[60vh] md:h-[90vh] w-full relative "
          >
            <Image
              className=""
              placeholder="blur"
              quality={100}
              src={mobile2}
              layout="fill"
              objectFit={width > 768 ? "contain" : "contain"}
            />
          </motion.div>
        </div>
        <div className=" w-full md:p-16 z-10">
          <div className="h-full w-full  flex flex-col  items-center md:items-start text-justify justify-around py-8 gap-10">
            <motion.div
              animate={{
                translateY: isAnimationActive?.aboutBennito2 ? "0px" : "-200px",
                opacity: isAnimationActive?.aboutBennito2 ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
              className="w-[70%]"
            >
              <div className="flex flex-row items-center gap-4 mb-3">
                <div className="fill-[#0984E3] h-6 w-6">
                  <LaunchIcon />
                </div>
                <h3 className=" font-bold font-IRANYekan text-[#2D3436] text-lg md:text-xl text-start">
                  فروش بدون معطلی
                </h3>
              </div>
              <p className="text-[#767a7b] font-IRANYekan font-[300]  md:text-lg">
                پیشرفت فناوری همه چیزو راحت تر میکنه ، پس چرا بروز نباشیم ؟ ما
                در بنیتو به این نکته توجه زیادی داریم و بروزترین فناوری ها رو
                برای تجربه کاربری سریعتر استفاده میکنیم،
              </p>
            </motion.div>
            <motion.div
              animate={{
                translateY: isAnimationActive?.aboutBennito2 ? "0px" : "200px",
                opacity: isAnimationActive?.aboutBennito2 ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
              className="w-[70%]"
            >
              <div className="flex flex-row items-center gap-4 mb-3">
                <div className="fill-[#0984E3] stroke-[#0984E3] h-7 w-7">
                  <SupportIcon />{" "}
                </div>
                <h3 className=" font-bold font-IRANYekan text-[#2D3436] text-lg md:text-xl">
                  {" "}
                  پشتیبانی که میتونی روش حساب کنی
                </h3>
              </div>
              <p className="text-[#767a7b] font-IRANYekan  font-normal md:text-lg">
                هر وقت که بنیتو نیاز داشتی ما کنارتیم، هر سوالی که داشتی از طریق
                راه های ارتباطیمون باهامون در میون بزار
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
