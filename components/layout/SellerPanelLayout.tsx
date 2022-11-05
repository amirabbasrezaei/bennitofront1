import classNames from 'classnames';
import React, { FC } from 'react'
import MobileMenu from '../MobileMenu'
import NavigationBar from '../SellerPanel/NavigationBar/NavigationBar';

type Props = {
  children: JSX.Element[] | JSX.Element;
  back?: boolean;
  leftIcon?: JSX.Element;
  title?: string;
  navbar: boolean;
  mobilemenu: boolean;
  bgcolor?: string;
  className?: any;
}

export default function SellerPanelLayout({ children, back = true, title, leftIcon, navbar, mobilemenu, bgcolor = "white", className }: Props) {
  return (
    <div  className={classNames('px-[25px] w-full fixed top-0 right-0 h-screen overflow-y-scroll pb-[80px] ', "bg-" + bgcolor, className)}>
      {mobilemenu && <MobileMenu title={title} back={back}  />}
      <div className=' scrollbar-hide w-full flex items-center md:flex-col '>
        {children}
      </div>
      {navbar && <NavigationBar />}
    </div>
  )
}