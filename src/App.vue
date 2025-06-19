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
  <div className="navbar bg-base-100 shadow-sm sticky top-0">
    <div className="flex-none">
      <button className="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-5 w-5 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </div>
    <div className="flex-1">
      <span className="btn btn-ghost text-2xl uppercase font-brand">
        Mealstrom
      </span>
    </div>
    <div className="flex-none">
      <button className="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-5 w-5 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
  <main
    class="flex flex-col items-center justify-center min-h-[calc(100vh-150px)] bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans"
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
  <div className="dock sticky bottom-0">
    <button>
      <svg
        className="size-[1.2em]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
          <polyline
            points="1 11 12 2 23 11"
            fill="none"
            stroke="currentColor"
            stroke-miterlimit="10"
            strokeWidth="2"
          ></polyline>
          <path
            d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7"
            fill="none"
            stroke="currentColor"
            strokeLinecap="square"
            stroke-miterlimit="10"
            strokeWidth="2"
          ></path>
          <line
            x1="12"
            y1="22"
            x2="12"
            y2="18"
            fill="none"
            stroke="currentColor"
            strokeLinecap="square"
            stroke-miterlimit="10"
            strokeWidth="2"
          ></line>
        </g>
      </svg>
      <span className="dock-label">Home</span>
    </button>

    <button className="dock-active">
      <svg
        className="size-[1.2em]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
          <polyline
            points="3 14 9 14 9 17 15 17 15 14 21 14"
            fill="none"
            stroke="currentColor"
            stroke-miterlimit="10"
            strokeWidth="2"
          ></polyline>
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            ry="2"
            fill="none"
            stroke="currentColor"
            strokeLinecap="square"
            stroke-miterlimit="10"
            strokeWidth="2"
          ></rect>
        </g>
      </svg>
      <span className="dock-label">Inbox</span>
    </button>

    <button>
      <svg
        className="size-[1.2em]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt">
          <circle
            cx="12"
            cy="12"
            r="3"
            fill="none"
            stroke="currentColor"
            strokeLinecap="square"
            stroke-miterlimit="10"
            strokeWidth="2"
          ></circle>
          <path
            d="m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="square"
            stroke-miterlimit="10"
            strokeWidth="2"
          ></path>
        </g>
      </svg>
      <span className="dock-label">Settings</span>
    </button>
  </div>
</template>
