import React from "react";
import { useApiContext } from "../../contexts/ApiContext";
import { Link } from "react-router-dom";

const Category: React.FC = () => {
  const { categories } = useApiContext();

  const categoryElements = categories.map((category) => {
    const categoryNameArr = category.name.split(" ");
    categoryNameArr[1] = "-and-";
    const categoryPath = categoryNameArr.join("").toLowerCase();
    return (
      <Link
        key={category.id}
        to={`../../categories/${categoryPath}`}
        className="w-full category-background shadow-xl"
      >
        <img src="" alt="" className="w-full min-h-[100px] bg-appdarkblue" />
        <div className="flex flex-col gap-1 p-4">
          <h2 className="text-2xl font-bold pops">{category.name}</h2>
          <p className="font-light leading-6 md:leading-7 text-[15px] md:text-base">
            {category.description}
          </p>
        </div>
      </Link>
    );
  });

  return (
    <div className="flex flex-col gap-7 px-2">
      <div className="flex flex-col gap-3 px-2">
        <h1 className="font-extrabold text-[40px] leading-[48px] sm:text-[45px] md:text-[50px] md:leading-[58px] mt-4 appdarkblue pops">
          Shop items by categories
        </h1>
        <p className="w-[90%] font-light appdarkblue leading-6 md:leading-7 text-[15px] sm:text-base md:text-lg">
          At{" "}
          <span className="font-bold appgreen text-base sm:text-[17px] md:text-xl pops">
            ThriftEase.
          </span>
          , we've organized a wide range of categories to make it easy for you
          to find exactly what you're looking for. Whether you’re hunting for
          something specific or just browsing, our categories help you discover
          amazing deals on quality second-hand items. Dive into each category
          and explore a world of thrifted treasures!
        </p>
      </div>
      <div className="flex flex-col gap-10 p-2 md:p-4 items-center">
        {categoryElements}
      </div>
    </div>
  );
};

export default Category;
