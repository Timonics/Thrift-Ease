"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("SubCategory", [
      {
        name: "Smartphones",
        categoryId: 1,
      },
      {
        name: "Laptops",
        categoryId: 1,
      },
      {
        name: "Tablets",
        categoryId: 1,
      },
      {
        name: "Accessories",
        categoryId: 1,
      },
      {
        name: "Cameras & Photography",
        categoryId: 1,
      },
      {
        name: "Gaming Consoles",
        categoryId: 1,
      },
      {
        name: "Men’s Clothing",
        categoryId: 2,
      },
      {
        name: "Women’s Clothing",
        categoryId: 2,
      },
      {
        name: "Footwear",
        categoryId: 2,
      },
      {
        name: "Handbags & Accessories",
        categoryId: 2,
      },
      {
        name: "Watches & Jewelry",
        categoryId: 2,
      },
      {
        name: "Kids’ Clothing",
        categoryId: 2,
      },
      {
        name: "Furniture",
        categoryId: 3,
      },
      {
        name: "Home Décor",
        categoryId: 3,
      },
      {
        name: "Kitchenware",
        categoryId: 3,
      },
      {
        name: "Bedding & Linens",
        categoryId: 3,
      },
      {
        name: "Lighting",
        categoryId: 3,
      },
      {
        name: "Fiction Books",
        categoryId: 4,
      },
      {
        name: "Textbooks",
        categoryId: 4,
      },
      {
        name: "Notebooks",
        categoryId: 4,
      },
      {
        name: "Magazines",
        categoryId: 4,
      },
      {
        name: "Planners & Journals",
        categoryId: 4,
      },
      {
        name: "Exercise Equipment",
        categoryId: 5,
      },
      {
        name: "Camping Gear",
        categoryId: 5,
      },
      {
        name: "Cycling",
        categoryId: 5,
      },
      {
        name: "Outdoor Furniture",
        categoryId: 5,
      },
      {
        name: "Sports Apparel",
        categoryId: 5,
      },
      {
        name: "Musical Instruments",
        categoryId: 6,
      },
      {
        name: "Audio Equipment",
        categoryId: 6,
      },
      {
        name: "Music Accessories",
        categoryId: 6,
      },
      {
        name: "Music Merchandise",
        categoryId: 6,
      },
      {
        name: "Music Software",
        categoryId: 6,
      },
      {
        name: "Music CDs & Vinyls",
        categoryId: 6,
      },
      {
        name: "Skincare",
        categoryId: 7,
      },
      {
        name: "Haircare",
        categoryId: 7,
      },
      {
        name: "Makeup",
        categoryId: 7,
      },
      {
        name: "Fragrances",
        categoryId: 7,
      },
      {
        name: "Grooming Tools",
        categoryId: 7,
      },
      {
        name: "Car Accessories",
        categoryId: 8,
      },
      {
        name: "Motorcycle Parts",
        categoryId: 8,
      },
      {
        name: "Tires & Wheels",
        categoryId: 8,
      },
      {
        name: "Car Electronics",
        categoryId: 8,
      },
      {
        name: "Tools & Equipment",
        categoryId: 8,
      },
      {
        name: "Antiques",
        categoryId: 9,
      },
      {
        name: "Art Prints",
        categoryId: 9,
      },
      {
        name: "Coins & Stamps",
        categoryId: 9,
      },
      {
        name: "Memorabilia",
        categoryId: 9,
      },
      {
        name: "Handmade Crafts",
        categoryId: 9,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Category", null, {});
  },
};