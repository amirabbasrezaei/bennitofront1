
import React from 'react'

type Props = {}

export default function index({}: Props) {
  return (
    <div>index</div>
  )
}

export function getServerSideProps() {

    return{
        redirect:{
            destination: "/sellerpanel/shop/products"
        }
    }
}