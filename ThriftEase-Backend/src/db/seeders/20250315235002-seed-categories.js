"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Category", [
      {
        name: "Electronics & Gadgets",
        description:
          "Discover a range of pre-loved electronics, from smartphones and laptops to tablets and accessories. Tech doesn't have to break the bank!",
        icon: "Smartphone",
        iconColor: "#2563eb",
      },
      {
        name: "Fashion & Apparel",
        description:
          "Stay stylish on a budget! Find great deals fashion and accessories for men, women, and children in this category.",
        icon: "Shirt",
        iconColor: "#dc2626",
      },
      {
        name: "Home & Living",
        description:
          "Spruce up your space with second-hand furniture, home décor, kitchenware, and more. Make your house feel like home without overspending.",
        icon: "Home",
        iconColor: "#059669",
      },
      {
        name: "Books & Stationery",
        description:
          "Get your hands on novels, textbooks, notebooks, and all sorts of stationery. Perfect for students, readers, and stationery lovers alike!",
        icon: "BookOpen",
        iconColor: "#7c3aed",
      },
      {
        name: "Sports & Outdoor",
        description:
          "Gear up for your next adventure! Browse through sports equipment, camping gear, fitness tools, and other outdoor essentials.",
        icon: "Dumbbell",
        iconColor: "#ea580c",
      },
      {
        name: "Music & Instruments",
        description:
          "Explore our collection of musical instruments and gear at thrift prices.",
        icon: "Music",
        iconColor: "#db2777",
      },
      {
        name: "Beauty & Health",
        description:
          "Discover great deals on beauty products, skincare, grooming tools, and wellness essentials to keep you looking and feeling your best.",
        icon: "HeatHandshake",
        iconColor: "#c026d3",
      },
      {
        name: "Automobiles & Accessories",
        description:
          "Find used cars, motorbikes, auto parts, and vehicle accessories at unbeatable prices. Drive your way to a great deal!",
        icon: "Car",
        iconColor: "#475569",
      },
      {
        name: "Odds & Ends",
        description:
          "Not sure where to look? This category features a variety of unique items that don't quite fit into the usual boxes.",
        icon: "Package",
        iconColor: "#4b5563",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Category", null, {});
  },
};
