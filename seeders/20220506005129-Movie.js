'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    let movies = [
      {
        name: 'Predator',
        description:
          'Dutch (Arnold Schwarzenegger), a soldier of fortune, is hired by the U.S. government to secretly rescue a group of politicians trapped in Guatemala.',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRikSEIgYlliuIjkbfy1dm_7eQ0Ee1R2YZp_mOwY8VFLFCa5Acy97-NF3Mq4RvYqfY38_s&usqp=CAU',
        gonnerOrder: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    await queryInterface.bulkInsert('movies', movies)
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('movies')
  }
}
