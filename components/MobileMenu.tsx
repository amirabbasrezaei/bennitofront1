import React from "react";
import { BackButton, TrashIcon } from "./SVGs/SVGs";
import Router from "next/router";
import Link from "next/link";
import classNames from "classnames";
type Props = {
  onClick?: (e?:any) => void;
  back: Boolean;
  title: String;
  leftIcon?: JSX.Element;
  pushBack?: boolean;
  leftIconColor?:string;
  leftIconOnClick?:(e?:any) => void
};



export default function MobileMenu({ back = false,pushBack = true,onClick, title = "title", leftIcon, leftIconColor, leftIconOnClick }: Props) {
  return (
    <div className="h-20 w-full flex flex-row justify-center items-center z-30 ">
      <div onClick={() => back ? onClick() : {}} className="relative  flex gap-4 items-center w-full">
        {back && (
          <span
            className="w-4 cursor-pointer"
            
          >
            <BackButton />
          </span>
        )}
        <h2 className="text-[#424242] text-base font-[500] fit-content cursor-pointer">{title}</h2>
      </div>

        <div onClick={leftIconOnClick} className={classNames("w-4", "fill-" + leftIconColor, "stroke-" + leftIconColor, "cursor-pointer")}>

          {leftIcon}
        </div>

    </div>
  );
}
