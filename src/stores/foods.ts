import { defineStore } from 'pinia';

export interface Food {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export const useFoodsStore = defineStore('foods', {
  state: () => ({
    foods: [] as Food[],
  }),
  actions: {
    addFood(food: Food) {
      this.foods.push(food);
    },
  },
});
