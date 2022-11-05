import { GetStaticProps } from 'next'
import React from 'react'
import Home from '../components/Buyer/Home/Home'
import HeadComponent from '../components/HeadComponent'
import LandingPage from '../components/LandingPage/LandingPage'

type Props = {}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} }
}

export default function index({ }: Props) {
  return (
    // <MainLayout showNavbar={true}>
    //   <Home />
    // </MainLayout>
    <>
      <HeadComponent title='طراحی سایت با رویکردی نو' page='بنیتو' />
      <LandingPage />
    </>
  )
}