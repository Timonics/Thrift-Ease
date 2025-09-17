import React from "react";
import CategoriesHeader from "./landing-components/CategoriesHeader";
import Categories from "./landing-components/Categories";
import PopularCategories from "./landing-components/PopularCategories";
import Footer from "../../components/footer";

const CategoriesPage: React.FC = () => {
  return (
    <>
      <CategoriesHeader />
      <Categories />
      <PopularCategories />
      <Footer />
    </>
  );
};

export default CategoriesPage;
