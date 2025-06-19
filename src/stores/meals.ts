import { defineStore } from 'pinia';

export type Meal = {
  id: number;
  name: string;
};

export const useMealsStore = defineStore('meals', {
  state: () => ({
    meals: [{ id: 1, name: 'Pizza!' }] as Meal[],
  }),
  actions: {
    addMeal(meal: Meal) {
      this.meals = [...this.meals, meal];
    },
    removeMeal(id: number) {
      this.meals = this.meals.filter((meal) => meal.id !== id);
    },
  },
});
