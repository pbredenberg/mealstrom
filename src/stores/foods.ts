import { defineStore } from 'pinia';

export const useFoodsStore = defineStore('foods', {
  state: () => ({
    foods: [] as any[], // Replace any with a Food type later
  }),
  actions: {
    // Add actions for managing foods here
  },
});
