import React from 'react'
import BuyerHeader from '../Header/BuyerHeader'
import HomeSlider from './HomeSlider'

type Props = {}

export default function Home({}: Props) {
  return (
    <div className=''>
      <BuyerHeader />
      <HomeSlider />

    </div>
  )
}