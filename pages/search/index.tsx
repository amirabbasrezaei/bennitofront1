import { NextPage } from "next";
import Categories from "../../components/Categories";
import JumpingSearchbar from "../../components/JumpingSearchbar";
import MainLayout from "../../components/layout/MainLayout";
import Navbar from "../../components/Buyer/Navbar/Navbar";

const searchPage: NextPage = () => {
  return (
    <>
      <MainLayout showNavbar={true}>
        <div className="pb-28">
          <Categories />
          <JumpingSearchbar />
        </div>
      </MainLayout>
    </>
  );
};

export default searchPage;
