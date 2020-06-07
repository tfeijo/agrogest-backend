module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('prod_activities',
    [
      {
        id: 1,
        name: 'Bovinocultura de leite',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        name: 'Bovinocultura de corte',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        name: 'Suinocultura',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        name: 'Avicultura',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        name: 'Agricultura',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('prod_activities', null, {}),
};
