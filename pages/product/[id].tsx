import { motion } from "framer-motion";
import { NextPage } from "next";
import Categories from "../../components/Categories";
import JumpingSearchbar from "../../components/JumpingSearchbar";
import MainLayout from "../../components/layout/MainLayout";
import Navbar from "../../components/Buyer/Navbar/Navbar";

const productPage: NextPage = () => {
  return (
    <motion.div
      layoutId="0"
      className="bg-blue-500 w-11/12 h-[90vh] m-10"
    ></motion.div>
  );
};

export default productPage;
