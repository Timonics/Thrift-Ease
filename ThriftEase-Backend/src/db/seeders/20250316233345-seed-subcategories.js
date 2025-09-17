"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("SubCategory", [
      // Electronics & Gadgets
      {
        name: "Smartphones",
        categoryId: 1,
        icon: "Smartphone",
        iconColor: "#3B82F6",
      },
      { name: "Laptops", categoryId: 1, icon: "Laptop", iconColor: "#2563EB" },
      { name: "Tablets", categoryId: 1, icon: "Tablet", iconColor: "#60A5FA" },
      {
        name: "Accessories",
        categoryId: 1,
        icon: "Headphones",
        iconColor: "#1E40AF",
      },
      {
        name: "Cameras & Photography",
        categoryId: 1,
        icon: "Camera",
        iconColor: "#2563EB",
      },
      {
        name: "Gaming Consoles",
        categoryId: 1,
        icon: "Gamepad",
        iconColor: "#3B82F6",
      },

      // Fashion & Apparels
      {
        name: "Men’s Clothing",
        categoryId: 2,
        icon: "TShirt",
        iconColor: "#EC4899",
      },
      {
        name: "Women’s Clothing",
        categoryId: 2,
        icon: "TShirt",
        iconColor: "#F472B6",
      },
      { name: "Footwear", categoryId: 2, icon: "Zap", iconColor: "#DB2777" },
      {
        name: "Handbags & Accessories",
        categoryId: 2,
        icon: "Bag",
        iconColor: "#E11D48",
      },
      {
        name: "Watches & Jewelry",
        categoryId: 2,
        icon: "Watch",
        iconColor: "#BE185D",
      },
      {
        name: "Kids’ Clothing",
        categoryId: 2,
        icon: "TShirt",
        iconColor: "#F9A8D4",
      },

      // Home & Living
      { name: "Furniture", categoryId: 3, icon: "Chair", iconColor: "#22C55E" },
      {
        name: "Home Décor",
        categoryId: 3,
        icon: "Framer",
        iconColor: "#16A34A",
      },
      {
        name: "Kitchenware",
        categoryId: 3,
        icon: "Coffee",
        iconColor: "#4ADE80",
      },
      {
        name: "Bedding & Linens",
        categoryId: 3,
        icon: "Bed",
        iconColor: "#22C55E",
      },
      { name: "Lighting", categoryId: 3, icon: "Lamp", iconColor: "#84CC16" },

      // Books & Stationery
      {
        name: "Fiction Books",
        categoryId: 4,
        icon: "BookOpen",
        iconColor: "#F59E0B",
      },
      { name: "Textbooks", categoryId: 4, icon: "Book", iconColor: "#D97706" },
      {
        name: "Notebooks",
        categoryId: 4,
        icon: "Clipboard",
        iconColor: "#FBBF24",
      },
      {
        name: "Magazines",
        categoryId: 4,
        icon: "Newspaper",
        iconColor: "#FCD34D",
      },
      {
        name: "Planners & Journals",
        categoryId: 4,
        icon: "Calendar",
        iconColor: "#F59E0B",
      },

      // Sports & Outdoors
      {
        name: "Exercise Equipment",
        categoryId: 5,
        icon: "Dumbbell",
        iconColor: "#14B8A6",
      },
      {
        name: "Camping Gear",
        categoryId: 5,
        icon: "Tent",
        iconColor: "#0D9488",
      },
      {
        name: "Cycling",
        categoryId: 5,
        icon: "Activity",
        iconColor: "#2DD4BF",
      },
      {
        name: "Outdoor Furniture",
        categoryId: 5,
        icon: "Chair",
        iconColor: "#22C55E",
      },
      {
        name: "Sports Apparel",
        categoryId: 5,
        icon: "TShirt",
        iconColor: "#10B981",
      },

      // Music & Entertainment
      {
        name: "Musical Instruments",
        categoryId: 6,
        icon: "Music",
        iconColor: "#8B5CF6",
      },
      {
        name: "Audio Equipment",
        categoryId: 6,
        icon: "Speaker",
        iconColor: "#7C3AED",
      },
      {
        name: "Music Accessories",
        categoryId: 6,
        icon: "Headphones",
        iconColor: "#A78BFA",
      },
      {
        name: "Music Merchandise",
        categoryId: 6,
        icon: "Gift",
        iconColor: "#C4B5FD",
      },
      {
        name: "Music Software",
        categoryId: 6,
        icon: "Laptop",
        iconColor: "#9333EA",
      },
      {
        name: "Music CDs & Vinyls",
        categoryId: 6,
        icon: "Disc",
        iconColor: "#7C3AED",
      },

      // Health & Beauty
      {
        name: "Skincare",
        categoryId: 7,
        icon: "Droplet",
        iconColor: "#F87171",
      },
      {
        name: "Haircare",
        categoryId: 7,
        icon: "Scissors",
        iconColor: "#EF4444",
      },
      { name: "Makeup", categoryId: 7, icon: "Brush", iconColor: "#DC2626" },
      { name: "Fragrances", categoryId: 7, icon: "Star", iconColor: "#FCA5A5" },
      {
        name: "Grooming Tools",
        categoryId: 7,
        icon: "Tool",
        iconColor: "#B91C1C",
      },

      // Automotive & Tools
      {
        name: "Car Accessories",
        categoryId: 8,
        icon: "Car",
        iconColor: "#6B7280",
      },
      {
        name: "Motorcycle Parts",
        categoryId: 8,
        icon: "Settings",
        iconColor: "#4B5563",
      },
      {
        name: "Tires & Wheels",
        categoryId: 8,
        icon: "Repeat",
        iconColor: "#9CA3AF",
      },
      {
        name: "Car Electronics",
        categoryId: 8,
        icon: "Cpu",
        iconColor: "#6B7280",
      },
      {
        name: "Tools & Equipment",
        categoryId: 8,
        icon: "Tool",
        iconColor: "#4B5563",
      },

      // Antiques & Collectibles
      {
        name: "Antiques",
        categoryId: 9,
        icon: "Archive",
        iconColor: "#FBBF24",
      },
      {
        name: "Art Prints",
        categoryId: 9,
        icon: "Image",
        iconColor: "#F59E0B",
      },
      {
        name: "Coins & Stamps",
        categoryId: 9,
        icon: "CreditCard",
        iconColor: "#D97706",
      },
      {
        name: "Memorabilia",
        categoryId: 9,
        icon: "Gift",
        iconColor: "#FCD34D",
      },
      {
        name: "Handmade Crafts",
        categoryId: 9,
        icon: "Package",
        iconColor: "#FBBF24",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("SubCategory", null, {});
  },
};
