<script setup lang="ts">
import { ref } from 'vue';
import { invoke } from '@tauri-apps/api/core';

const greetMsg = ref('');
const name = ref('');

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  greetMsg.value = await invoke('greet', { name: name.value });
}
</script>

<template>
  <main
    class="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans"
  >
    <h1 class="text-3xl font-bold mb-8">Welcome to Tauri + Vue</h1>

    <div class="flex justify-center mb-4 space-x-6">
      <a href="https://vitejs.dev" target="_blank">
        <img
          src="/vite.svg"
          class="h-24 transition-transform duration-300 hover:scale-110"
          alt="Vite logo"
        />
      </a>
      <a href="https://tauri.app" target="_blank">
        <img
          src="/tauri.svg"
          class="h-24 transition-transform duration-300 hover:scale-110"
          alt="Tauri logo"
        />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img
          src="./assets/vue.svg"
          class="h-24 transition-transform duration-300 hover:scale-110"
          alt="Vue logo"
        />
      </a>
    </div>
    <p class="mb-8 text-lg">
      Click on the Tauri, Vite, and Vue logos to learn more.
    </p>

    <form
      class="flex justify-center items-center space-x-2 mb-4"
      @submit.prevent="greet"
    >
      <input
        id="greet-input"
        v-model="name"
        placeholder="Enter a name..."
        class="rounded-lg border border-gray-300 px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
      />
      <button
        type="submit"
        class="rounded-lg px-4 py-2 bg-blue-600 text-white font-semibold hover:bg-blue-700 active:bg-blue-800 transition-colors"
      >
        Greet
      </button>
    </form>
    <p class="text-xl font-medium">{{ greetMsg }}</p>
  </main>
</template>
