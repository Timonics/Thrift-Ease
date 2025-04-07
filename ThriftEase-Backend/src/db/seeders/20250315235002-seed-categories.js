"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Category", [
      {
        name: "Electronics & Gadgets",
        description:
          "Discover a range of pre-loved electronics, from smartphones and laptops to tablets and accessories. Tech doesn’t have to break the bank!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fashion & Apparel",
        description:
          "Stay stylish on a budget! Find great deals fashion and accessories for men, women, and children in this category.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Home & Living",
        description:
          "Spruce up your space with second-hand furniture, home décor,kitchenware, and more. Make your house feel like home without overspending..",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Books & Stationery",
        description:
          "Get your hands on novels, textbooks, notebooks, and all sorts of stationery. Perfect for students, readers, and stationery lovers alike!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sports & Outdoor",
        description:
          "Gear up for your next adventure! Browse through sports equipment, camping gear, fitness tools, and other outdoor essentials.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Music & Instruments",
        description:
          "Explore our collection of musical instruments and gear at thrift prices.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Beauty & Health",
        description:
          "Discover great deals on beauty products, skincare, grooming tools, and wellness essentials to keep you looking and feeling your best.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Automobiles & Accessories",
        description:
          "Find used cars, motorbikes, auto parts, and vehicle accessories at unbeatable prices. Drive your way to a great deal!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Odds & Ends",
        description:
          "Not sure where to look? This category features a variety of unique items that don't quite fit into the usual boxes.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Category", null, {});
  },
};
