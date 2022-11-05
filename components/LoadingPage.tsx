import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react'
import { LoadingIcon } from './SVGs/SVGs';

type Props = {
  loading?: boolean;
  children?: JSX.Element | JSX.Element[];
  showLoadIcon?: boolean;
  fullPage?: boolean;
}

export default function LoadingPage({ children, loading, showLoadIcon, fullPage }: Props) {
  return (
    <>
      < div className={classNames('w-full h-full', fullPage ? "" : "relative")} >
        <div>
          {children}
        </div>
        <AnimatePresence>
          {
            loading && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0, transition: { duration: 0.3 } }} className='z-40 backdrop-brightness-100 top-0 right-0 rounded 
            absolute w-full h-full flex items-center justify-center backdrop-blur ' style={{ boxShadow: "inset 0 0 20px 6px #f3f3f3" }}>
              {showLoadIcon ? <motion.div className='w-7 '>
                <LoadingIcon />
              </motion.div> : <div className='w-full h-full'>  </div>}
            </motion.div>
          }
        </AnimatePresence>
      </div >
    </>
  )

}