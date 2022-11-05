import classNames from 'classnames';
import React, { FC } from 'react'
import MobileMenu from '../MobileMenu'
import NavigationBar from '../SellerPanel/NavigationBar/NavigationBar';

type Props = {
  children: JSX.Element[] | JSX.Element;
  back?: boolean;
  leftIcon?: JSX.Element;
  title?: string;
  navbar?: boolean;
  mobilemenu: boolean;
  bgcolor?: string
}

export default function AdminPanelLayout({ children, back = true, title, leftIcon, navbar, mobilemenu, bgcolor = "white" }: Props) {
  return (
    <div className={classNames('px-[25px]  w-full fixed h-screen overflow-y-scroll pb-[80px]', "bg-" + bgcolor)}>
      {mobilemenu && <MobileMenu title={title} back={back}  />}
      <div className=' scrollbar-hide w-full'>
        {children}
      </div>
      {/* {navbar && <NavigationBar />} */}
    </div>
  )
}