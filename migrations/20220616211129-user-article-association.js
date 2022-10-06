'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('Articles',{
      fields:['UserId'],
      type:'foreign Key',
      name: 'article_user_association',
      references:{
        table:'Users',
        field:'id'
      },
      onDelete: 'RESTRICT',
      onUpdate: 'CASCADE'
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Articles', 'article_user_association')
  }
};
