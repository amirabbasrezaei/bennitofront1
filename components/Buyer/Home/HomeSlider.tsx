import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import SwiperCore,{ Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { AngleDownIcon } from '../../SVGs/SVGs';
import classNames from 'classnames';
type Props = {}

export default function HomeSlider({ }: Props) {
  const [swiperInstance, setSwiperInstance] = useState(null)
  const [swiperIndex, setSwiperIndex] = useState(null)
  useEffect(() => {

  }, [swiperInstance])
  return (
    <div className="h-[250px] md:h-[400px] relative">
      <div className='z-20 absolute bottom-10 right-10 flex flex-col gap-3'>
        <div className='flex flex-row gap-4'>
          <button type='button' onClick={() => swiperInstance.slidePrev()} className='w-8 h-8 fill-white rotate-[-90deg]   bg-black/50 backdrop-blur-sm  px-[8px] py-1 rounded-full'><AngleDownIcon /></button>
          <button type='button' onClick={() => swiperInstance.slideNext()} className='w-8 h-8 fill-white rotate-90  bg-black/50 backdrop-blur-sm  px-[8px] py-1 rounded-full'><AngleDownIcon /></button>
        </div>
        <div className='flex flex-row gap-3'>
          {swiperInstance && Array(swiperInstance.slides.length).fill("").map((e, index) => <div key={index} onClick={() => swiperInstance.slideTo(index)} className={classNames(' backdrop-blur-sm h-2 rounded-full cursor-pointer', swiperIndex === (index) ? "w-6 bg-white/70" : "w-2 bg-black/70")}></div>)}
        </div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay
        onActiveIndexChange={(swiperCore) => setSwiperIndex(swiperCore.activeIndex)}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        className="h-full"
      >
        <SwiperSlide className='h-full'>
          <Image quality={100} src="/Images/sliderImage3.jpg" layout='fill' objectFit="cover" />
        </SwiperSlide>
        <SwiperSlide className='h-full'>
          <Image quality={100} src="/Images/sliderImage2.jpg" layout='fill' objectFit="cover" />
        </SwiperSlide>
        <SwiperSlide className='h-full'>
          <Image quality={100} src="/Images/sliderImage2.jpg" layout='fill' objectFit="cover" />
        </SwiperSlide>
      </Swiper>
    </div>

  )
}