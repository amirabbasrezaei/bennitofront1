import { FC, useContext } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import classNames from "classnames";
import Router from 'next/router'
import Link from "next/link";
import {useNavContext} from './NavContext'
import navPages from './navPages'

type input = {
  text?: string;
  isSeleceted: Boolean;
  icon: JSX.Element;
  layoutId: string;
  href: string;
  setClickedPage: (val:string) => void
};

const textVariant: Variants = {
  initial: { scale: 0 },
  popText: { scale: 1 },
};

const NavItem: FC<input> = ({
  text,
  isSeleceted,
  icon,
  layoutId,
  href,
  setClickedPage
}) => {
  // const {setpage} = useNavContext()

 
  
  return (
    <>
    <Link href={href}>
      <motion.div
        className="relative"
        layout="position"
        onClick={() => {
          setClickedPage(text!);
        }}
      >
        {isSeleceted && (
          <motion.div
            className="background absolute bg-blue-50 h-full w-full z-0 rounded-lg"
            layoutId="indictor"
          />
        )}

        <div className="content relative z-10 flex items-center justify-center px-4 py-2.5 gap-2 rounded-lg">
          <motion.span
            className={classNames("text-center h-8 w-8")}
            layout="position"
          >
            {icon}
          </motion.span>
          {isSeleceted && (
            <motion.div
              className="h-fit w-fit flex items-center px-2 text-md rounded-xl text-blue-500"
              initial={{ scale: 0 }}
              animate={isSeleceted && { scale: 1, transition: { delay: 0.15 } }}
            >
              {text}
            </motion.div>
          )}
        </div>
      </motion.div>
      </Link>
    </>
  );
};

export default NavItem;
