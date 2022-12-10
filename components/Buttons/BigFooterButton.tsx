import classNames from 'classnames';
import React, { HTMLInputTypeAttribute } from 'react'
import { LoaderIcon } from '../SVGs/SVGs';

type Props = {
  loading?: boolean;
  onClick?: (e?: any) => void;
  name: string;
  sticky?: boolean;
  disabled?: boolean;
  type: "button" | "submit" | "reset";
  bgColor?: string;
  textColor?: string;
  className?: any
}

export default function BigFooterButton({ loading, onClick, name, sticky, disabled, type ,bgColor,className  }: Props) {
  return (
    <button type={type} onClick={onClick} disabled={disabled || loading} className={classNames('w-full h-14 md:h-10', sticky && "absolute bottom-2 right-0 px-[25px]", className)}>
      <div className={classNames('h-full w-full rounded-lg  text-lg lg:text-base flex items-center justify-center', disabled ? "bg-gray-400 text-gray-200" : bgColor ? "bg-" + bgColor : "bg-[#2595ff] text-white" )}>
        {loading ?
          <div className='w-14 lg:w-12 h-fit stroke-white'><LoaderIcon /></div>
          : <span className={classNames( "text-white")}>{name}</span>}
      </div>
    </button>
  )
}