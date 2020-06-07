module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('polluition_factors',
    [
      {
        id: 1,
        name: 'Alto',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        name: 'Médio',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        name: 'Baixo',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('polluition_factors', null, {}),
};
