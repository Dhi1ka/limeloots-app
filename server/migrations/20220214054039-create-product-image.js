"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("productImages", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fileName: {
        type: Sequelize.STRING,
      },
      fileSize: {
        type: Sequelize.INTEGER,
      },
      fileType: {
        type: Sequelize.STRING,
      },
      primary: {
        type: Sequelize.BOOLEAN,
      },
      productId: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("productImages");
  },
};
