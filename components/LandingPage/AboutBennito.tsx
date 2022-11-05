import classNames from "classnames";
import Image from "next/image";
import React from "react";
import { StrategyIcon, UpdateIcon } from "../SVGs/SVGs";
import { LaunchIcon, SupportIcon, Vector1 } from "./LandingPageSVGs";
import mobile1 from "../../public/Images/landingPage/protMobile.png";
import mobile2 from "../../public/Images/landingPage/rotatedMobile.png";
import { motion } from "framer-motion";
import { IsAnimationActive } from "./LandingPage";
type Props = {
  width: number;
  tailwindWidth: string;
  setIsAnimationActive: (input: IsAnimationActive) => void;
  isAnimationActive: IsAnimationActive | null;
};

export default function AboutBennito({
  width,
  setIsAnimationActive,
  isAnimationActive,
}: Props) {
  return (
    <>
      <div
        className={classNames(
          "w-full relative flex flex-col-reverse gap-3 mt-5 md:mt-0 md:flex-row  justify-center items-center overflow-hidden",
          `h-fit md:h-screen`
        )}
      >
        <div className="h-[32rem] w-[32rem] absolute left-0 -translate-x-48 top-[10%] z-0">
          <Vector1 />
        </div>
        <div className="z-10  w-full p-3">
          <div className="h-fit w-full">
            <motion.div
              animate={{
                left: isAnimationActive?.aboutBennito ? "0px" : "500px",
              }}
              transition={{ duration: 0.7 }}
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
        </div>
        <div className=" w-full md:p-16 z-10 ">
          <div className="w-full relative h-9">
            <motion.div
              onViewportEnter={() => {
                setIsAnimationActive({...isAnimationActive, aboutBennito: true });
                console.log("enter");
              }}
             
              animate={{
                right: isAnimationActive?.aboutBennito ? 0 : "500px",
              }}
              transition={{ duration: 1 }}
              className="w-full absolute flex flex-col md:flex-row items-center justify-center md:items-end md:justify-start  gap-4 md:pr-6"
            >
              <h2 className="w-fit text-2xl md:text-4xl font-IRANYekan font-bold text-gray-700">
                چرا بنیتو؟
              </h2>
              <hr className="w-1/2  border-2 border-gray-700" />
            </motion.div>
          </div>
          <motion.div
            animate={{
              scale: isAnimationActive?.aboutBennito ? 1 : 0,
            }}
            transition={{ duration: 0.7 }}
            className="h-full w-full  flex flex-col  items-center md:items-start text-justify justify-around py-8 gap-10"
          >
            <div className="w-[70%]">
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
            </div>
            <div className="w-[70%]">
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
            </div>
          </motion.div>
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
          <div className="h-fit w-full">
            <motion.div
              onViewportEnter={() =>
                setIsAnimationActive(({...isAnimationActive, aboutBennito2: true }))
              }
              animate={{
                scale: isAnimationActive?.aboutBennito2 ? 1 : 0,
              }}
              transition={{ duration: 0.4 }}
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
        </div>
        <div className=" w-full md:p-16 z-10 ">
          <div className="h-full w-full   flex flex-col  items-center md:items-start text-justify justify-around py-8 gap-10">
            <div className="w-full relative">
              <motion.div
                animate={{
                  bottom: isAnimationActive?.aboutBennito2 ? "0px" : "500px",
                  opacity: isAnimationActive?.aboutBennito2 ? 1 : 0,
                }}
                transition={{ duration: 0.4 }}
                className="w-[70%] absolute"
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
            </div>
            <div className="w-full relative">
              <motion.div animate={{
                  top: isAnimationActive?.aboutBennito2 ? "0px" : "500px",
                  opacity: isAnimationActive?.aboutBennito2 ? 1 : 0,
                }}
                transition={{ duration: 0.4 }} className="w-[70%] absolute">
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
                  هر وقت که بنیتو نیاز داشتی ما کنارتیم، هر سوالی که داشتی از
                  طریق راه های ارتباطیمون باهامون در میون بزار
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
