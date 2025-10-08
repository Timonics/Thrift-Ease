import React, { useEffect, useState } from "react";
import Card from "../../../components/card";
import {
  AlertCircle,
  CheckCircle2,
  DollarSign,
  Info,
  MapPin,
  Package,
  Upload,
  X,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store/store";
import { fetchSelectedCategorySubCategory } from "../../../store/slices/category.slice";
import { CgSpinner } from "react-icons/cg";
import type { Product } from "../../../interfaces/product.interface";
import { addToDrafts } from "../../../store/slices/draft.slice";
import { useNavigate } from "react-router";
import { useAppState } from "../../../contexts/StateProvider";

const MainForm: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );
  const [selectedCondition, setSelectedCondition] = useState("");
  const [listingType, setListingType] = useState("fixed");

  const userData = useSelector((state: RootState) => state.users.userData);

  const [listingData, setListingData] = useState<Partial<Product>>({
    name: "",
    description: "",
    price: 0,
    categoryId: 0,
    subCategoryId: 0,
    ownerId: userData?.id || 0,
    image: "",
    images: [],
    stock: 0,
    condition: selectedCondition,
    deliveryOptions: [],
    location: "",
    status: "Available",
    discountPrice: 0,
  });

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  // const location = useLocation();

  useEffect(() => {
    if (selectedCategoryId) {
      dispatch(fetchSelectedCategorySubCategory(selectedCategoryId));
    }
  }, [dispatch, selectedCategoryId]);

  useEffect(() => {
    setListingData((prevState) => ({
      ...prevState,
      image: images.length ? images[0] : "",
      images: images.length > 1 ? images.slice(1) : [],
    }));
  }, [images]);

  const { categories, subCategories, subCategoriesLoading, loading } =
    useSelector((state: RootState) => state.categories);

  const conditions = ["New", "Like New", "Good", "Fair", "Poor"];

  // const from = (location.state as { from?: string })?.from || "dashboard";

  const { setIsDrafted } = useAppState();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setImages([...images, ...newImages].slice(0, 8));
    }
  };
  console.log(listingData);

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleAddToDraft = (product: Partial<Product>) => {
    dispatch(addToDrafts(product));

    setIsDrafted(true);
    navigate("/dashboard", { replace: true });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    const checked =
      e.target instanceof HTMLInputElement ? e.target.checked : false;

    if (name === "deliveryOptions") {
      setListingData((prevData) => {
        const prevOptions = prevData.deliveryOptions || [];
        if (checked) {
          if (!prevOptions.includes(value)) {
            return {
              ...prevData,
              deliveryOptions: [...prevOptions, value],
            };
          }
          return prevData;
        } else {
          return {
            ...prevData,
            deliveryOptions: prevOptions.filter((opt) => opt !== value),
          };
        }
      });
      return;
    }

    setListingData((prevData) => ({
      ...prevData,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  //   const handleSubmit = () => {};

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Image Upload Section */}
          <Card>
            <div className="p-6">
              <div className="mb-4">
                <h2 className="font-heading font-bold text-xl text-foreground mb-2">
                  Product Photos
                </h2>
                <p className="font-body text-sm text-foreground/50">
                  Add up to 8 photos. First photo will be the cover image.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 font-body">
                {images.map((image, index) => (
                  <div key={index} className="relative aspect-square">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    {index === 0 && (
                      <div className="absolute bottom-2 left-2 bg-primary text-black rounded-sm font-semibold text-xs px-2 py-0.5">
                        Cover
                      </div>
                    )}
                  </div>
                ))}

                {images.length < 8 && (
                  <label className="aspect-square border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
                    <Upload className="w-8 h-8 text-foreground/70 mb-2" />
                    <span className="text-sm text-foreground/70">
                      Upload Photo
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>

              <div className="flex items-center gap-2 p-3 bg-blue-900/20 rounded-lg">
                <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="font-body text-sm text-foreground">
                  Use clear, well-lit photos from multiple angles. Items with
                  quality photos sell 3x faster!
                </p>
              </div>
            </div>
          </Card>

          {/* Product Details */}
          <Card className="bg-card border border-border">
            <div className="p-6">
              <h2 className="font-heading font-bold text-xl text-foreground mb-6">
                Product Details
              </h2>

              <div className="space-y-6">
                {/* Product Title */}
                <div>
                  <label className="font-body font-semibold text-foreground mb-2 block">
                    Product Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="name"
                    value={listingData.name}
                    onChange={handleChange}
                    placeholder="e.g., Vintage Leather Jacket - Brown, Size M"
                    className="border rounded-md p-1.5 pl-2 w-full focus:border-primary focus:ring-primary"
                  />
                  <p className="font-body text-xs text-foreground/50 mt-1">
                    Be specific and descriptive (max 80 characters)
                  </p>
                </div>

                {/* Category */}
                <div>
                  <label className="font-body font-semibold text-foreground mb-2 block">
                    Category <span className="text-red-500">*</span>
                  </label>
                  {categories.length !== 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          type="button"
                          onClick={() => {
                            setSelectedCategoryId(category.id);
                            setSelectedCategory(category.name);
                            setListingData((prevState) => ({
                              ...prevState,
                              categoryId: category.id,
                            }));
                          }}
                          className={`p-3 rounded-lg border text-sm font-body transition-all ${
                            selectedCategory === category.name
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  )}
                  {loading && (
                    <div className="p-4 flex items-center justify-center font-body gap-4">
                      <CgSpinner className="animate-spin" size={24} />
                      Loading...
                    </div>
                  )}
                </div>

                {/* Sub-Category */}
                <div>
                  <label className="font-body font-semibold text-foreground mb-2 block">
                    Subcategory <span className="text-red-500">*</span>
                  </label>
                  {!subCategoriesLoading &&
                    (selectedCategoryId ? (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {subCategories.map((subcategory) => (
                          <button
                            key={subcategory.id}
                            type="button"
                            onClick={() => {
                              setSelectedSubCategory(subcategory.name);
                              setListingData((prevState) => ({
                                ...prevState,
                                subCategoryId: subcategory.id,
                              }));
                            }}
                            className={`p-3 rounded-lg border text-sm font-body transition-all ${
                              selectedSubCategory === subcategory.name
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-border hover:border-primary/50"
                            }`}
                          >
                            {subcategory.name}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="flex font-body p-2 items-center justify-center">
                        Select a category to view subcategories
                      </div>
                    ))}
                  {subCategoriesLoading && (
                    <div className="p-4 flex items-center justify-center font-body gap-4">
                      <CgSpinner className="animate-spin" size={24} />
                      Loading...
                    </div>
                  )}
                </div>

                {/* Description */}
                <div>
                  <label className="font-body font-semibold text-foreground mb-2 block">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="description"
                    value={listingData.description}
                    onChange={handleChange}
                    placeholder="Describe your item in detail. Include brand, size, measurements, flaws, and why you're selling it..."
                    className="border rounded-md p-1.5 pl-2 w-full focus:border-primary focus:ring-primary"
                  />
                  <p className="font-body text-xs text-foreground/50 mt-1">
                    Minimum 50 characters
                  </p>
                </div>

                {/* Condition */}
                <div>
                  <label className="font-outfit font-semibold text-foreground mb-2 block">
                    Condition <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {conditions.map((condition) => (
                      <button
                        key={condition}
                        type="button"
                        onClick={() => {
                          setSelectedCondition(condition);
                          setListingData((prevState) => ({
                            ...prevState,
                            condition,
                          }));
                        }}
                        className={`p-3 rounded-lg border text-sm font-body transition-all ${
                          selectedCondition === condition
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        {condition}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Pricing & Listing Type */}
          <Card>
            <div className="p-6">
              <h2 className="font-heading font-bold text-xl text-foreground mb-6">
                Pricing & Listing Type
              </h2>

              <div className="space-y-6">
                {/* Listing Type */}
                <div>
                  <label className="font-body font-semibold text-foreground mb-3 block">
                    How do you want to sell?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="grid md:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setListingType("fixed")}
                      className={`p-4 rounded-lg border transition-all ${
                        listingType === "fixed"
                          ? "border-primary bg-primary/10"
                          : " hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <DollarSign
                          className={`w-6 h-6 flex-shrink-0 ${
                            listingType === "fixed"
                              ? "text-primary"
                              : "text-foreground/70"
                          }`}
                        />
                        <div className="text-left">
                          <h3 className="font-heading font-semibold text-foreground mb-1">
                            Fixed Price
                          </h3>
                          <p className="font-body text-sm text-foreground/70">
                            Set a price and sell immediately
                          </p>
                        </div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setListingType("auction")}
                      className={`p-4 rounded-lg border  transition-all ${
                        listingType === "auction"
                          ? "border-primary bg-primary/10"
                          : "hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-6 h-6 flex-shrink-0 ${
                            listingType === "auction"
                              ? "text-primary"
                              : "text-foreground/70"
                          }`}
                        />
                        <div className="text-left">
                          <h3 className="font-heading font-semibold text-foreground mb-1">
                            Auction/Bidding
                          </h3>
                          <p className="font-body text-sm text-foreground/70">
                            Let buyers bid on your item
                          </p>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Fixed Price Fields */}
                {listingType === "fixed" && (
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body font-semibold text-foreground mb-2 block">
                        Price <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/70">
                          $
                        </span>
                        <input
                          type="text"
                          name="price"
                          value={listingData.price}
                          onChange={handleChange}
                          placeholder="0.00"
                          className="pl-8 border  w-full p-1.5 rounded-md focus:border-primary focus:ring-primary"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-body font-semibold text-foreground mb-2 block">
                        Discounted Price (Optional)
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/70">
                          $
                        </span>
                        <input
                          type="text"
                          name="discountPrice"
                          value={listingData.discountPrice}
                          onChange={handleChange}
                          placeholder="0.00"
                          className="pl-8 border  p-1.5 w-full rounded-md focus:border-primary focus:ring-primary"
                        />
                      </div>
                      <p className="font-body text-xs text-foreground/50 mt-1">
                        Show buyers how much they're saving
                      </p>
                    </div>
                  </div>
                )}

                {/* Auction Fields */}
                {listingType === "auction" && (
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="font-body font-semibold text-foreground mb-2 block">
                          Starting Bid <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/70">
                            $
                          </span>
                          <input
                            type="number"
                            placeholder="0.00"
                            className="pl-8 w-full rounded-md border  p-1.5 focus:border-primary focus:ring-primary"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="font-outfit font-semibold text-foreground mb-2 block">
                          Reserve Price (Optional)
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/70">
                            $
                          </span>
                          <input
                            type="number"
                            placeholder="0.00"
                            className="pl-8 border  p-1.5 rounded-md w-full focus:border-primary focus:ring-primary"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="font-body font-semibold text-foreground mb-2 block">
                        Auction Duration <span className="text-red-500">*</span>
                      </label>
                      <select className="w-full p-3 rounded-lg border  bg-background focus:border-primary focus:ring-primary">
                        <option>1 Day</option>
                        <option>3 Days</option>
                        <option>5 Days</option>
                        <option>7 Days</option>
                        <option>10 Days</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Card>

          {/* Shipping & Location */}
          <Card>
            <div className="p-6">
              <h2 className="font-heading font-bold text-xl text-foreground mb-6">
                Shipping & Location
              </h2>

              <div className="space-y-6">
                {/* Location */}
                <div>
                  <label className="font-body font-semibold text-foreground mb-2 block">
                    Your Location <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/70 w-4 h-4" />
                    <input
                      type="text"
                      name="location"
                      value={listingData.location}
                      onChange={handleChange}
                      placeholder="City, State or ZIP Code"
                      className="pl-10 border  w-full p-1.5 rounded-md focus:border-primary focus:ring-primary"
                    />
                  </div>
                </div>

                {/* Shipping Options */}
                <div>
                  <label className="font-outfit font-semibold text-foreground mb-3 block">
                    Shipping Options <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-start gap-3 p-4 border  rounded-lg cursor-pointer hover:border-primary transition-colors">
                      <input
                        type="checkbox"
                        name="deliverOptions"
                        value={"Standard Shipping"}
                        checked={listingData.deliveryOptions?.includes(
                          "Standard Shipping"
                        )}
                        className="mt-1"
                        onChange={handleChange}
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-heading font-semibold text-foreground">
                            Standard Shipping
                          </span>
                          <span className="font-body text-sm text-foreground/70">
                            5-7 business days
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-body text-sm text-foreground/70">
                            Cost:
                          </span>
                          <input
                            type="number"
                            placeholder="0.00"
                            className="w-24 pl-2 p-1.5 rounded-md h-8 text-sm border  focus:border-primary focus:ring-primary"
                          />
                        </div>
                      </div>
                    </label>

                    <label className="flex items-start gap-3 p-4 border  rounded-lg cursor-pointer hover:border-primary transition-colors">
                      <input
                        type="checkbox"
                        className="mt-1"
                        name="deliverOptions"
                        value={"Express Shipping"}
                        onChange={handleChange}
                        checked={listingData.deliveryOptions?.includes(
                          "Express Shipping"
                        )}
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-heading font-semibold text-foreground">
                            Express Shipping
                          </span>
                          <span className="font-body text-sm text-foreground/70">
                            2-3 business days
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-body text-sm text-foreground/70">
                            Cost:
                          </span>
                          <input
                            type="number"
                            placeholder="0.00"
                            className="w-24 h-8 text-sm border  rounded-md pl-2 p-1.5 focus:border-primary focus:ring-primary"
                          />
                        </div>
                      </div>
                    </label>

                    <label className="flex items-start gap-3 p-4 border  rounded-lg cursor-pointer hover:border-primary transition-colors">
                      <input
                        type="checkbox"
                        className="mt-1"
                        name="deliverOptions"
                        value={"Local Pickup"}
                        onChange={handleChange}
                        checked={listingData.deliveryOptions?.includes(
                          "Local Pickup"
                        )}
                      />
                      <div className="flex-1">
                        <span className="font-heading font-semibold text-foreground">
                          Local Pickup
                        </span>
                        <p className="font-body text-sm text-foreground/70 mt-1">
                          Buyer can pick up in person (Free)
                        </p>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Package Details */}
                {/* <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="font-body text-sm text-foreground mb-2 block">
                      Weight (lbs)
                    </label>
                    <input
                      type="number"
                      placeholder="0.0"
                      className="border w-full p-1.5 pl-2 rounded-md  focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm text-foreground mb-2 block">
                      Length (in)
                    </label>
                    <input
                      type="number"
                      placeholder="0"
                      className="border w-full p-1.5 pl-2 rounded-md  focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm text-foreground mb-2 block">
                      Width (in)
                    </label>
                    <input
                      type="number"
                      placeholder="0"
                      className="border w-full p-1.5 pl-2 rounded-md  focus:border-primary focus:ring-primary"
                    />
                  </div>
                </div> */}
              </div>
            </div>
          </Card>

          {/* Additional Options */}
          <Card>
            <div className="p-6">
              <h2 className="font-heading font-bold text-xl text-foreground mb-6">
                Additional Options
              </h2>

              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1" />
                  <div>
                    <span className="font-body font-semibold text-foreground block mb-1">
                      Accept Offers
                    </span>
                    <p className="font-secondary text-sm text-foreground/70">
                      Allow buyers to make offers on your item
                    </p>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1" />
                  <div>
                    <span className="font-body font-semibold text-foreground block mb-1">
                      Promote Listing (Optional)
                    </span>
                    <p className="font-secondary text-sm text-foreground/70">
                      Feature your listing for better visibility (+$2.99)
                    </p>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" defaultChecked className="mt-1" />
                  <div>
                    <span className="font-body font-semibold text-foreground block mb-1">
                      Sustainability Badge
                    </span>
                    <p className="font-secondary text-sm text-foreground/70">
                      Show buyers you're contributing to sustainable fashion
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </Card>

          {/* Preview & Submit */}
          <Card className="bg-primary/5 dark:bg-primary/10 border border-primary">
            <div className="p-6">
              <div className="flex items-start gap-3 mb-6">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">
                    Ready to List?
                  </h3>
                  <p className="font-body text-sm text-foreground/70 mb-4">
                    Review your listing details before publishing. You can
                    always edit it later.
                  </p>
                  <div className="flex flex-wrap gap-3 font-semibold font-heading">
                    <button
                      onClick={() => handleAddToDraft(listingData)}
                      className="border-2 p-2 px-3 rounded-md hover:border-primary hover:bg-primary/10 bg-transparent"
                    >
                      Save as Draft
                    </button>
                    <button
                      type="submit"
                      disabled={
                        !listingData.name ||
                        !listingData.description ||
                        !listingData.categoryId ||
                        !listingData.subCategoryId ||
                        !listingData.condition ||
                        !listingData.price ||
                        listingData.price == 0 ||
                        listingData.subCategoryId == 0 ||
                        listingData.categoryId == 0 ||
                        !listingData.location ||
                        !listingData.deliveryOptions?.length
                      }
                      className="bg-primary disabled:opacity-30 disabled:pointer-events-none flex items-center p-2 px-3 rounded-md hover:bg-primary/90 text-white"
                    >
                      <Package className="w-4 h-4 mr-2" />
                      Publish Listing
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 p-3 bg-foreground/10 rounded-lg">
                <AlertCircle className="w-4 h-4 text-foreground/70 flex-shrink-0 mt-0.5" />
                <p className="font-body text-xs text-foreground">
                  By listing, you agree to ThriftEase's Terms of Service and
                  Seller Policy. We charge a 5% fee on successful sales.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MainForm;
