import { NextPage } from "next";

import MainLayout from "../../components/layout/MainLayout";
import Navbar from "../../components/Buyer/Navbar/Navbar";
import Products from "../../components/Product/Products";
import Toolbar from "../../components/Toolbar";

const searchPage: NextPage = () => {
  return (
    <>
      <MainLayout
        toolbars={[
          <Toolbar key={0} theme="red">
            
            <h1 dir="auto">جستجو برای &quot;عطر اوشن&quot;</h1>
          </Toolbar>,
        ]}
        
        showNavbar={true}
      >
        <Products />
      </MainLayout>
    </>
  );
};

export default searchPage;
