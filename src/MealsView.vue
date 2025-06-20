<script setup lang="ts">
import { ref } from 'vue';
import { useMealsStore, Meal } from './stores/meals';

const mealsStore = useMealsStore();
const newMealName = ref('');
let nextMealId = 1;

function addMeal() {
  const trimmed = newMealName.value.trim();
  if (trimmed.length === 0) {
    return;
  }
  const meal: Meal = { id: nextMealId++, name: trimmed };
  mealsStore.addMeal(meal);
  newMealName.value = '';
}

function removeMeal(id: number) {
  mealsStore.removeMeal(id);
}
</script>

<template>
  <section class="w-full max-w-md mt-8">
    <h2 class="text-xl font-semibold mb-4">Meals</h2>
    <form class="flex space-x-2 mb-4" @submit.prevent="addMeal">
      <input
        v-model="newMealName"
        placeholder="Add a meal..."
        class="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
      />
      <button
        type="submit"
        class="rounded-lg px-4 py-2 bg-green-600 text-white font-semibold hover:bg-green-700 active:bg-green-800 transition-colors"
      >
        Add
      </button>
    </form>
    <ul>
      <li
        v-for="meal in mealsStore.meals"
        :key="meal.id"
        class="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700"
      >
        <span>{{ meal.name }}</span>
        <button
          @click="removeMeal(meal.id)"
          class="ml-4 px-2 py-1 text-xs rounded bg-red-500 text-white hover:bg-red-600 active:bg-red-700"
        >
          Remove
        </button>
      </li>
      <li v-if="mealsStore.meals.length === 0" class="text-gray-400 py-2">
        No meals yet.
      </li>
    </ul>
  </section>
</template>
