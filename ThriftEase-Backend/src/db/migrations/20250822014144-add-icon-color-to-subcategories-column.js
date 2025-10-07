"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("SubCategory", "iconColor", {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "bg-gray-700",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("SubCategory", "iconColor");
  },
};
