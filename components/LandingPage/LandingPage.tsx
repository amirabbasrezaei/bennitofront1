import Image from 'next/image'
import React, { useState } from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import { AngleDownIcon, BennitoIcon } from '../SVGs/SVGs'
import AboutBennito from './AboutBennito'
import AboutUs from './AboutUs'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import Services from './Services'

type Props = {}

export interface IsAnimationActive {
    aboutBennito?: boolean;
    aboutBennito2?: boolean;
    services?: boolean;
}

export default function LandingPage({ }: Props) {
    const {width, height, tailwindWidth} = useWindowSize()
    const [isAnimationActive, setIsAnimationActive] = useState<IsAnimationActive | null>(null)
    return (
        <div className='bg-white   fixed  h-full w-full   scrollbar-hide   overflow-x-hidden '>
            <Header />
            <Hero width={width} />
            <AboutBennito isAnimationActive={isAnimationActive} setIsAnimationActive={setIsAnimationActive} width={width} tailwindWidth={tailwindWidth} />
            <Services isAnimationActive={isAnimationActive} setIsAnimationActive={setIsAnimationActive} width={width} height={height}/>
            {/* <AboutUs /> */}
            <Footer />
        </div>
    )
}