import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Logo from "../../components/logo";
import {
  ProductCondition,
  ProductData,
  ProductStatus,
} from "../../interfaces/thriftease-interfaces/product.interfaces";
import { useApiContext } from "../../contexts/ApiContext";
import { ImCheckmark } from "react-icons/im";
import { TbPlus } from "react-icons/tb";

const ListForm: React.FC = () => {
  type DeliveryOptions = {
    selected: boolean;
    option: string;
  };

  const {
    categories,
    getSubCategoriesByCategory,
    subCategories,
    // message,
    listProduct,
  } = useApiContext();

  const [deliveryOptionsAvailable, setDeliveryOptionsAvailable] = useState<
    DeliveryOptions[]
  >([
    { selected: false, option: "Home Delivery" },
    { selected: false, option: "Pick Up" },
    { selected: false, option: "Courier" },
  ]);

  const [productInfo, setProductInfo] = useState({
    name: "",
    description: "",
    price: "",
    categoryId: 0,
    subCategoryId: 0,
    ownerId: 0,
    image: "",
    stock: "",
    condition: "" as ProductCondition,
    negotiable: false,
    deliveryOptions: [""],
    location: "",
    status: "" as ProductStatus,
  });

  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(0);
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState<number>(0);
  const [selectedCategoryName, setSelectedCategoryName] = useState<string>("");
  const [selectedSubCategoryName, setSelectedSubCategoryName] =
    useState<string>("");
  const [selectedCondition, setSelectedCondition] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [categoryDropDownOpen, setCategoryDropDownOpen] =
    useState<boolean>(false);
  const [subCategoryDropDownOpen, setSubCategoryDropDownOpen] =
    useState<boolean>(false);
  const [conditionDropDownOpen, setConditionDropDownOpen] =
    useState<boolean>(false);
  const [statusDropDownOpen, setStatusDropDownOpen] = useState<boolean>(false);
  const [isNegotiable, setIsNegotiable] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData: ProductData = {
      name: productInfo.name,
      description: productInfo.description,
      price: Number(productInfo.price),
      categoryId: productInfo.categoryId,
      subCategoryId: productInfo.subCategoryId,
      ownerId: productInfo.ownerId,
      image: productInfo.image,
      stock: Number(productInfo.stock),
      condition: productInfo.condition,
      negotiable: productInfo.negotiable,
      deliveryOptions: productInfo.deliveryOptions,
      location: productInfo.location,
      status: productInfo.status,
    };
    try {
      listProduct(formData);
    } catch (err) {
      console.error("Err: ", err);
    }
  };

  //console.log(productInfo);
  // console.log(message);
  console.log(document.cookie);

  const handleSelect = (optionSelected: string) => {
    let deliveryOptionsSelected: DeliveryOptions[] = [];
    setDeliveryOptionsAvailable(
      (deliveryOptionsSelected = deliveryOptionsAvailable.map(
        (deliverySelect) => {
          if (deliverySelect.option === optionSelected) {
            return {
              ...deliverySelect,
              selected: !deliverySelect.selected,
            };
          } else {
            return deliverySelect;
          }
        }
      ))
    );
    setProductInfo((prevState) => {
      const filteredOptionSelected = deliveryOptionsSelected.filter(
        (option) => option.selected
      );
      const OptionsNameArr = filteredOptionSelected.map(
        (option) => option.option
      );

      return {
        ...prevState,
        deliveryOptions: OptionsNameArr,
      };
    });
  };

  const deliveryOptionsElements = deliveryOptionsAvailable.map((option) => (
    <div
      key={option.option}
      className={`cursor-pointer py-2 px-3 text-xs ${
        option.selected
          ? "bg-appgreen appdarkblue font-bold"
          : "bg-slate-300/50"
      }`}
      onClick={() => handleSelect(option.option)}
    >
      {option.option}
    </div>
  ));

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value, type } = event.target;
    if (type === "file") {
      const fileInput = event.target as HTMLInputElement;
      if (fileInput.files && fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const previewUrl = URL.createObjectURL(file);
        setImagePreview(previewUrl);
        setProductInfo((prevState) => ({
          ...prevState,
          [name]: file,
        }));
      }
    } else {
      setProductInfo((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  useEffect(() => {
    if (selectedCategoryId > 0) getSubCategoriesByCategory(selectedCategoryId);
  }, [selectedCategoryId]);

  return (
    <div
      className="p-4 flex flex-col gap-3 bg-slate-100 shadow-xl shadow-black/20 w-full"
      onClick={() => {
        if (categoryDropDownOpen === true) setCategoryDropDownOpen(false);
      }}
    >
      <Logo />
      <div className="flex flex-col-reverse md:flex-row gap-3 items-center py-4">
        <div className="w-full">
          <form
            className="flex flex-col gap-5 py-4 md:p-4 pops"
            onSubmit={handleSubmit}
          >
            <input
              name="name"
              type="text"
              placeholder="Product Name"
              className=""
              value={productInfo?.name}
              onChange={handleChange}
            />
            <input
              name="description"
              type="textarea"
              placeholder="Product Description"
              className=""
              value={productInfo.description}
              onChange={handleChange}
            />
            <div
              className="p-2 border-b-2 border-[#2ecc7180] bg-slate-100 outline-none relative cursor-auto z-20"
              onClick={() => {
                setCategoryDropDownOpen(!categoryDropDownOpen);
                setSubCategoryDropDownOpen(false);
                setConditionDropDownOpen(false);
                setStatusDropDownOpen(false);
              }}
            >
              {selectedCategoryId <= 0 ? (
                <p className="text-black/55">Please select a category</p>
              ) : (
                <p>{selectedCategoryName}</p>
              )}

              {categoryDropDownOpen && (
                <ul className="absolute border-green-400 border-2 home-background top-10 left-0 right-0 flex flex-col gap-4 backdrop-blur-s p-2 max-h-[200px] overflow-auto z-20">
                  {categories.map((category) => (
                    <li
                      key={category.id}
                      className="appdarkblue font-bold cursor-pointer"
                      onClick={() => {
                        if (category.id) setSelectedCategoryId(category.id);
                        setSelectedCategoryName(category.name);
                        setSelectedSubCategoryId(0);
                        setProductInfo((prevState) => {
                          return {
                            ...prevState,
                            categoryId: category.id!,
                          };
                        });
                      }}
                    >
                      {category.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div
              className="p-2 border-b-2 border-[#2ecc7180] bg-slate-100 outline-none cursor-auto relative z-10"
              onClick={() => {
                setSubCategoryDropDownOpen(!subCategoryDropDownOpen);
                setConditionDropDownOpen(false);
                setStatusDropDownOpen(false);
              }}
            >
              {selectedSubCategoryId <= 0 ? (
                <p className="text-black/55">Please select a subCategory</p>
              ) : (
                <p>{selectedSubCategoryName}</p>
              )}

              {subCategoryDropDownOpen && (
                <ul className="absolute border-green-400 border-2 home-background top-10 left-0 right-0 flex flex-col gap-4 backdrop-blur-s p-2 max-h-[200px] overflow-auto">
                  {selectedCategoryId > 0 ? (
                    subCategories.map((subCategory) => (
                      <li
                        key={subCategory.id}
                        className="appdarkblue font-bold cursor-pointer"
                        onClick={() => {
                          if (subCategory.id)
                            setSelectedSubCategoryId(subCategory.id);
                          setSelectedSubCategoryName(subCategory.name);
                          setProductInfo((prevState) => ({
                            ...prevState,
                            subCategoryId: subCategory.id!,
                          }));
                        }}
                      >
                        {subCategory.name}
                      </li>
                    ))
                  ) : (
                    <p className="font-bold appdarkblue">
                      Please select a category first
                    </p>
                  )}
                </ul>
              )}
            </div>

            <div className="flex gap-5">
              <div
                className="p-2 border-b-2 border-[#2ecc7180] bg-slate-100 outline-none cursor-auto relative w-full"
                onClick={() => setConditionDropDownOpen(!conditionDropDownOpen)}
              >
                {!selectedCondition ? (
                  <p className="text-black/55">
                    Select the condition of your product
                  </p>
                ) : (
                  <p>{selectedCondition}</p>
                )}

                {conditionDropDownOpen && (
                  <ul className="absolute border-green-400 border-2 home-background top-10 left-0 right-0 flex flex-col gap-4 backdrop-blur-s p-2 max-h-[200px] overflow-auto">
                    {Object.values(ProductCondition).map((condition, index) => (
                      <li
                        key={index}
                        className="appdarkblue font-bold cursor-pointer"
                        onClick={() => {
                          setSelectedCondition(condition);
                          setProductInfo((prevState) => ({
                            ...prevState,
                            condition: condition,
                          }));
                        }}
                      >
                        {condition}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div
                className="p-2 border-b-2 border-[#2ecc7180] bg-slate-100 outline-none cursor-auto relative w-full"
                onClick={() => setStatusDropDownOpen(!statusDropDownOpen)}
              >
                {!selectedStatus ? (
                  <p className="text-black/55">
                    Select the status of your product
                  </p>
                ) : (
                  <p>{selectedStatus}</p>
                )}

                {statusDropDownOpen && (
                  <ul className="absolute border-green-400 border-2 home-background top-10 left-0 right-0 flex flex-col gap-4 backdrop-blur-s p-2 max-h-[200px] overflow-auto">
                    {Object.values(ProductStatus).map((status, index) => (
                      <li
                        key={index}
                        className="appdarkblue font-bold cursor-pointer"
                        onClick={() => {
                          setSelectedStatus(status);
                          setProductInfo((prevState) => ({
                            ...prevState,
                            status: status,
                          }));
                        }}
                      >
                        {status}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="flex gap-5 w-full">
              <input
                name="location"
                type=""
                placeholder="Location"
                className="w-1/2"
                value={productInfo.location}
                onChange={handleChange}
              />
              <input
                name="price"
                type=""
                placeholder="Price"
                className="w-1/2"
                value={productInfo.price}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col md:flex-row md:flex-wrap gap-10 justify-between mx-1">
              <label className="flex gap-3 items-center">
                <button
                  className={`flex items-center justify-center size-3.5 border-[1.15px] rounded-[3.5px] cursor-pointer p-0.5 ${
                    isNegotiable && "bg-appgreen appdarkblue"
                  }`}
                  onClick={(event) => {
                    event.preventDefault();
                    setProductInfo((prevState) => ({
                      ...prevState,
                      negotiable: !prevState.negotiable,
                    }));
                    setIsNegotiable(!isNegotiable);
                  }}
                >
                  {isNegotiable && <ImCheckmark />}
                </button>
                Negotiable
              </label>
              <input
                name="stock"
                type=""
                placeholder="Stock"
                className="w-1/2"
                value={productInfo.stock}
                onChange={handleChange}
              />
              <div className="flex gap-5">{deliveryOptionsElements}</div>
            </div>
            <button
              type="submit"
              className="p-4 bg-appdarkblue appgreen font-bold mt-2 transition duration-300 ease-in-out hover:bg-appblue hover:text-appdarkblue rubik"
            >
              List my product
            </button>
          </form>
        </div>
        <div className="flex flex-col items-center gap-5 justify-center">
          <div className="rounded-xl bg-slate-700 relative h-[180px] w-[180px] flex items-center justify-center">
            {!imagePreview ? (
              <>
                <input
                  type="file"
                  name="image"
                  className="w-full h-full cursor-pointer p-5 rounded-xl pops text-transparent z-30"
                  onChange={handleChange}
                  accept="image/*"
                ></input>

                <div className="text-xs">
                  <TbPlus className="absolute inset-0 w-full h-full" />
                </div>
              </>
            ) : (
              <img
                src={imagePreview}
                className="size-full rounded-xl object-center object-cover"
              />
            )}
          </div>
          <h2 className="text-xs text-center w-full p-1 font-bold bg-appgreen text-black/70 pops">
            Upload product pictures
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ListForm;
