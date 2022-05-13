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
        rating: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sharknado',
        description:
          "Nature's deadliest killer takes to the skies in the ultimate gill-ty pleasure as a group of friends try to save the Santa Monica coast from shark-infested tornadoes.",
        image:
          'https://m.media-amazon.com/images/M/MV5BODcwZWFiNTEtNDgzMC00ZmE2LWExMzYtNzZhZDgzNDc5NDkyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
        gonnerOrder: 1,
        rating: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hateful 8',
        description:
          'While racing toward the town of Red Rock in post-Civil War Wyoming, bounty hunter John "The Hangman" Ruth and his fugitive prisoner encounter another bounty hunter and a man who claims to be a sheriff.',
        image:
          'https://m.media-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_.jpg',
        gonnerOrder: 1,
        rating: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Reservoir Dogs',
        description:
          'Six criminals with pseudonyms, and each strangers to one another, are hired to carry out a robbery. ',
        image:
          'https://m.media-amazon.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
        gonnerOrder: 1,
        rating: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Deep Blue Sea',
        description:
          'Six criminals with pseudonyms, and each strangers to one another, are hired to carry out a robbery. ',
        image:
          'https://m.media-amazon.com/images/M/MV5BZWM0NjVkOGYtMjk5Mi00NGVmLWE3NDMtMDQ3ZjdjMDcwYzdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg',
        gonnerOrder: 1,
        rating: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Friday the 13th Part 8',
        description:
          'Mass murderer Jason Voorhees (Kane Hodder) is resurrected from the bottom of Crystal Lake.',
        image: 'https://m.media-amazon.com/images/I/51l2h6RZ+SL._AC_.jpg',
        gonnerOrder: 1,
        rating: null,
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
