import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useApiContext } from "../../contexts/ApiContext";
import { categoryDescriptions } from "../../lib/categoryDescription";
import { useCategoryName } from "../../utils/urlHelper";
import { useSubCategories } from "../../hooks/useSubCategories";
import { useCategoryProducts } from "../../hooks/useCategoryProducts";
import SoldOut from "../../components/badges/sold-out";

const Categories: React.FC = () => {
  const activeLink = new URLSearchParams(location.search).get("subcategory");
  const querySubCategoryId = Number(activeLink);
  const { categories, subCategories, categoryProducts } = useApiContext();
  const categoryName = useCategoryName();

  const filteredCategory = categories.filter((category) => {
    return category.name.toLowerCase().trim() == categoryName.trim();
  });

  useSubCategories(filteredCategory);
  useCategoryProducts(filteredCategory);

  const categoryElement = filteredCategory.map((category) => {
    const filteredDesc = categoryDescriptions.filter(
      (desc) => desc.id === category.id
    );
    const categoryDesc = filteredDesc.map((desc) => desc.desc);
    return (
      <div key={category.id} className="flex flex-col gap-7 p-2">
        <div className="space-y-1">
          <h1 className="text-[40px] leading-[48px] sm:text-[45px] md:text-[50px] md:leading-[58px] pops font-bold appgreen">
            {category.name}
          </h1>
          <p className="leading-6 md:leading-7 text-[15px] sm:text-base md:text-lg font-light appdarkblue">
            {categoryDesc}
          </p>
        </div>
      </div>
    );
  });

  const subCategoriesElements = subCategories.map((category) => (
    <NavLink
      key={category.id}
      to={`?subcategory=${category.id}`}
      className={`p-2 relative text-xs monte ${
        activeLink === category.id?.toString()
          ? "border-active font-bold appgreen"
          : "border-inactive hover:bg-slate-300/15 appblue"
      }`}
    >
      {category.name}
    </NavLink>
  ));

  const categoryProductsElements = categoryProducts.map((product) => {
    return (
      <Link
        to={""}
        key={product.id}
        className="relative shadow-slate-500/75 shadow-2xl w-full sm:w-[270px] mx-5 sm:mx-3 rounded-b-xl pops"
      >
        <SoldOut />
        <img
          src="product-image"
          alt="Product-Image"
          className="w-full h-[130px] bg-slate-800 outline-transparent focus:outline-transparent border-transparent rounded-t-xl"
        />
        <div className="py-3 px-2 gap-2 flex flex-col product-background rounded-b-xl">
          <h2 className="font-semibold text-xs">{"Name: " + product.name}</h2>
          <p className="text-xs font-light">
            {"Description: " + product.description}
          </p>
          <p className="text-sm font-extrabold">{"Price: $" + product.price}</p>
        <div className="flex justify-center gap-5 mt-3 items-center">
          <button className="p-3 sm:p-3 sm:px-3.5 px-3 pops mx-2 font-bold text-base sm:text-[13px] rounded-lg bg-black/90 appgreen cursor-pointer">Add to Cart</button>
          <button className="p-3 sm:p-3 sm:px-3.5 px-3 pops mx-2 font-bold text-base sm:text-[13px] rounded-lg bg-black/90 appgreen cursor-pointer">Negotiate</button>
        </div>
        </div>
      </Link>
    );
  });

  const filteredProductsBySubCategory = categoryProducts.filter(
    (product) => product.subCategoryId === querySubCategoryId
  );

  const filteredProductsBySubCategoryElements =
    filteredProductsBySubCategory.map((product) => (
      <Link
        to={""}
        key={product.id}
        className="relative shadow-slate-500/75 shadow-2xl w-full sm:w-[270px] mx-5 sm:mx-3 rounded-b-xl pops"
      >
        <SoldOut />
        <img
          src="product-image"
          alt="Product-Image"
          className="w-full h-[130px] bg-slate-800 outline-transparent focus:outline-transparent border-transparent rounded-t-xl"
        />
        <div className="py-3 px-2 gap-2 flex flex-col product-background rounded-b-xl">
          <h2 className="font-semibold text-xs">{"Name: " + product.name}</h2>
          <p className="text-xs font-light">
            {"Description: " + product.description}
          </p>
          <p className="text-sm font-extrabold">{"Price: $" + product.price}</p>
        <div className="flex justify-center gap-5 mt-3 items-center">
          <button className="p-3 sm:p-3 sm:px-3.5 px-3 pops mx-2 font-bold text-base sm:text-[13px]  bg-black/90 appgreen cursor-pointer">Add to Cart</button>
          <button className="p-3 sm:p-3 sm:px-3.5 px-3 pops mx-2 font-bold text-base sm:text-[13px] bg-black/90 appgreen cursor-pointer">Negotiate</button>
        </div>
        </div>
      </Link>
    ));

  return (
    <div className="flex flex-col gap-5">
      {categoryElement}
      <div className="bg-gray-950 gap-5 items-center justify-center mx-4 hidden md:flex">
        {subCategoriesElements}
      </div>
      <div className="flex gap-5 flex-wrap justify-center md:justify-start md:px-7">
        {!querySubCategoryId
          ? categoryProductsElements
          : filteredProductsBySubCategoryElements}
      </div>
    </div>
  );
};

export default Categories;
