<script setup lang="ts">
import { ref, watch } from 'vue';
import { useFoodsStore, Food } from './stores/foods';

const foodsStore = useFoodsStore();
const newFood = ref<Partial<Food>>({
  name: '',
  calories: undefined,
  protein: undefined,
  carbs: undefined,
  fat: undefined,
});
const errors = ref<{ [key: string]: string }>({});
const dirty = ref<{ [key: string]: boolean }>({});
const submitted = ref(false);

function markDirty(field: string) {
  dirty.value[field] = true;
}

// Reactive validation for each field
watch(
  () => newFood.value.name,
  (val) => {
    if (!val || !val.trim()) {
      errors.value.name = 'Name is required.';
    } else {
      delete errors.value.name;
    }
  }
);
watch(
  () => newFood.value.calories,
  (val) => {
    if (val == null) {
      errors.value.calories = 'Calories are required.';
    } else if (val > 10000) {
      errors.value.calories =
        'Please enter a value less than or equal to 10,000.';
    } else {
      delete errors.value.calories;
    }
  }
);
watch(
  () => newFood.value.protein,
  (val) => {
    if (val == null) {
      errors.value.protein = 'Protein is required.';
    } else if (val > 10000) {
      errors.value.protein =
        'Please enter a value less than or equal to 10,000.';
    } else {
      delete errors.value.protein;
    }
  }
);
watch(
  () => newFood.value.carbs,
  (val) => {
    if (val == null) {
      errors.value.carbs = 'Carbs are required.';
    } else if (val > 10000) {
      errors.value.carbs = 'Please enter a value less than or equal to 10,000.';
    } else {
      delete errors.value.carbs;
    }
  }
);
watch(
  () => newFood.value.fat,
  (val) => {
    if (val == null) {
      errors.value.fat = 'Fat is required.';
    } else if (val > 10000) {
      errors.value.fat = 'Please enter a value less than or equal to 10,000.';
    } else {
      delete errors.value.fat;
    }
  }
);

function validateFood() {
  const errs: { [key: string]: string } = {};
  if (!newFood.value.name || !newFood.value.name.trim()) {
    errs.name = 'Name is required.';
  }
  if (newFood.value.calories == null) {
    errs.calories = 'Calories are required.';
  }
  if (newFood.value.protein == null) {
    errs.protein = 'Protein is required.';
  }
  if (newFood.value.carbs == null) {
    errs.carbs = 'Carbs are required.';
  }
  if (newFood.value.fat == null) {
    errs.fat = 'Fat is required.';
  }
  errors.value = errs;
  return Object.keys(errs).length === 0;
}

function addFood() {
  submitted.value = true;
  if (!validateFood()) return;
  foodsStore.addFood({ ...newFood.value } as Food);
  newFood.value = {
    name: '',
    calories: undefined,
    protein: undefined,
    carbs: undefined,
    fat: undefined,
  };
  errors.value = {};
  dirty.value = {};
  submitted.value = false;
}
</script>

<template>
  <section class="w-full max-w-md mx-auto mt-8">
    <h2 class="text-xl font-semibold mb-4">Foods</h2>
    <form class="flex flex-col gap-2 mb-4" @submit.prevent="addFood">
      <label class="flex flex-col">
        <span class="mb-1 font-medium">Name</span>
        <input
          v-model="newFood.name"
          @input="markDirty('name')"
          placeholder="e.g. Apple"
          class="rounded-md border px-3 py-2"
        />
        <span
          v-if="(dirty.name || submitted) && errors.name"
          class="text-red-600 text-sm mt-1"
          >{{ errors.name }}</span
        >
      </label>
      <label class="flex flex-col">
        <span class="mb-1 font-medium">Calories</span>
        <input
          v-model.number="newFood.calories"
          @input="markDirty('calories')"
          type="number"
          placeholder="Calories"
          class="rounded-md border px-3 py-2"
          min="0"
          max="10000"
        />
        <span
          v-if="(dirty.calories || submitted) && errors.calories"
          class="text-red-600 text-sm mt-1"
          >{{ errors.calories }}</span
        >
      </label>
      <label class="flex flex-col">
        <span class="mb-1 font-medium">Protein (g)</span>
        <input
          v-model.number="newFood.protein"
          @input="markDirty('protein')"
          type="number"
          placeholder="Protein (g)"
          class="rounded-md border px-3 py-2"
          min="0"
          max="10000"
        />
        <span
          v-if="(dirty.protein || submitted) && errors.protein"
          class="text-red-600 text-sm mt-1"
          >{{ errors.protein }}</span
        >
      </label>
      <label class="flex flex-col">
        <span class="mb-1 font-medium">Carbs (g)</span>
        <input
          v-model.number="newFood.carbs"
          @input="markDirty('carbs')"
          type="number"
          placeholder="Carbs (g)"
          class="rounded-md border px-3 py-2"
          min="0"
          max="10000"
        />
        <span
          v-if="(dirty.carbs || submitted) && errors.carbs"
          class="text-red-600 text-sm mt-1"
          >{{ errors.carbs }}</span
        >
      </label>
      <label class="flex flex-col">
        <span class="mb-1 font-medium">Fat (g)</span>
        <input
          v-model.number="newFood.fat"
          @input="markDirty('fat')"
          type="number"
          placeholder="Fat (g)"
          class="rounded-md border px-3 py-2"
          min="0"
          max="10000"
        />
        <span
          v-if="(dirty.fat || submitted) && errors.fat"
          class="text-red-600 text-sm mt-1"
          >{{ errors.fat }}</span
        >
      </label>
      <button
        type="submit"
        class="bg-green-600 text-white font-semibold rounded-md px-4 py-2 hover:bg-green-700 mt-2"
      >
        Add Food
      </button>
    </form>
    <ul>
      <li
        v-for="food in foodsStore.foods"
        :key="food.name"
        class="py-2 border-b flex flex-col"
      >
        <span class="font-semibold">{{ food.name }}</span>
        <span>Calories: {{ food.calories }}</span>
        <span
          >Protein: {{ food.protein }}g | Carbs: {{ food.carbs }}g | Fat:
          {{ food.fat }}g</span
        >
      </li>
      <li v-if="foodsStore.foods.length === 0" class="text-gray-400 py-2">
        No foods yet.
      </li>
    </ul>
  </section>
</template>
