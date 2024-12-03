/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('dogs').del()
  await knex('dogs').insert([
    {
      id: 1, 
      name: 'Toby',
      breed: 'daschund',
      gender: 'male',

  },
    {
      id: 2, 
      name: 'Bella',
      breed: 'poodle',
      gender: 'female',
    
    },
    {
      id: 3, 
      name: 'Rocky',
      breed: 'mastiff',
      gender: 'male',
    
    
    }
  ]);
};
