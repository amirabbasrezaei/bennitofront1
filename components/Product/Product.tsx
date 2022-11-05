import Image from "next/image";
import { FC, MouseEventHandler } from "react";
import tempImage from "../../public/Images/1606046.jpg";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

type productProps = {
  product?: Product;
  closeHandler: MouseEventHandler<HTMLButtonElement>;
};

const animateVariant = {
  hidden: {
    scale: 0,
    origin: 0,
  },
  visible: {
    scale: 1,
    transition: { type: "spring", duration: 1 },
    origin: 0
    // opacity:1
  },
  exit: {
    origin: 0,
    // opacity:0,
    scale: 0,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const imgVariant = {
  hidden: {
    scale: 0,
    origin: 0,
  },
  visible: {
    scale: 1,
    transition: { type: "spring", duration: 0.5 },
    origin: 0,
    opacity: 1,
  },
  exit: {
    origin: 0,
    // opacity:0,
    scale: 0,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};
const Product: FC<productProps> = ({ product, closeHandler }) => {
  const router = useRouter();

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          layoutId={product.id}
          className="fixed top-0 bottom-0 w-full bg-white z-40 overflow-y-scroll"
          transition={{ delayChildren: 0.5, staggerChildren:0.5 }}
          variants={animateVariant}
          animate={"visible"}
          initial={"hidden"}
          exit={"exit"}
        >
          <div className="w-full h-full bg-white">
            <button onClick={closeHandler}>Close</button>
            <motion.div
              variants={imgVariant}
              initial={"hidden"}
              animate={"visible"}
              exit={"exit"}
            >
              <Image
                className=""
                src={product.imageUrl}
                height={"500px"}
                width={"500px"}
              />
            </motion.div>

            <motion.div
              className="p-4"
              initial={{ scaleY: 0, originY: 0 }}
              animate={{ scaleY: 1, originY: 0 }}
              exit={{ scaleY: 0, originY: 0 }}
            >
              <p>{product.title}</p>
            </motion.div>
            <motion.div
              className="p-4"
              initial={{ scaleY: 0, originY: 0 }}
              animate={{ scaleY: 1, originY: 0 }}
              exit={{ scaleY: 0, originY: 0 }}
            >
              <p>{product.price}</p>
            </motion.div>
            <motion.div
              className="p-4"
              initial={{ scaleY: 0, originY: 0 }}
              animate={{ scaleY: 1, originY: 0 }}
              exit={{ scaleY: 0, originY: 0 }}
            >
              <p>{product.dec}</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Product;
