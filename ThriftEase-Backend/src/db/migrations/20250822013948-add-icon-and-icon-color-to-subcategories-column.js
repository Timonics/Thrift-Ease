'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("SubCategory", "icon", {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "shopping-bag",
    })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn("SubCategory", "icon")
  }
};
