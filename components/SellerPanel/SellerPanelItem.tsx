import React from 'react'

type Props = {
  stack: any
}

export default function SellerPanelItem({stack}: Props) {
  return (
    <div className='flex flex-row justify-between  '>
      <span>{stack.name}</span>
    </div>
  )
}