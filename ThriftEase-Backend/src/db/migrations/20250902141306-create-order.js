"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Order", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      buyerId: {
        type: Sequelize.INTEGER,
      },
      sellerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM(
          "pending",
          "paid",
          "shipped",
          "delivered",
          "cancelled"
        ),
        defaultValue: "pending",
      },
      deliveryOption: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      deliveryAddress: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      paymentMethod: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      paymentStatus: {
        type: Sequelize.ENUM("pending", "paid", "failed", "refunded"),
        defaultValue: "pending",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Order");
  },
};
