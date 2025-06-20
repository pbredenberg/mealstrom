<script setup lang="ts"></script>

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
    <router-view />
  </main>
  <div class="dock sticky bottom-0">
    <router-link
      to="/"
      class="dock-link"
      custom
      v-slot="{ navigate, isActive }"
    >
      <button :class="isActive ? 'dock-active' : ''" @click="navigate">
        <svg
          class="size-[1.2em]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt">
            <polyline
              points="1 11 12 2 23 11"
              fill="none"
              stroke="currentColor"
              stroke-miterlimit="10"
              stroke-width="2"
            ></polyline>
            <path
              d="m5,13v7c0,1.105.895,2,2,2h10c1.105,0,2-.895,2-2v-7"
              fill="none"
              stroke="currentColor"
              stroke-linecap="square"
              stroke-miterlimit="10"
              stroke-width="2"
            ></path>
            <line
              x1="12"
              y1="22"
              x2="12"
              y2="18"
              fill="none"
              stroke="currentColor"
              stroke-linecap="square"
              stroke-miterlimit="10"
              stroke-width="2"
            ></line>
          </g>
        </svg>
        <span class="dock-label">Meals</span>
      </button>
    </router-link>

    <router-link
      to="/foods"
      class="dock-link"
      custom
      v-slot="{ navigate, isActive }"
    >
      <button :class="isActive ? 'dock-active' : ''" @click="navigate">
        <svg
          class="size-[1.2em]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M7 4v5" />
            <path d="M10 4v5" />
            <path d="M14 4v5" />
            <path d="M17 4v5" />
            <path d="M7 9c0 3 2 5 5 5s5-2 5-5" />
            <path d="M12 14v8" />
          </g>
        </svg>
        <span class="dock-label">Foods</span>
      </button>
    </router-link>

    <button>
      <svg
        class="size-[1.2em]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt">
          <circle
            cx="12"
            cy="12"
            r="3"
            fill="none"
            stroke="currentColor"
            stroke-linecap="square"
            stroke-miterlimit="10"
            stroke-width="2"
          ></circle>
          <path
            d="m22,13.25v-2.5l-2.318-.966c-.167-.581-.395-1.135-.682-1.654l.954-2.318-1.768-1.768-2.318.954c-.518-.287-1.073-.515-1.654-.682l-.966-2.318h-2.5l-.966,2.318c-.581.167-1.135.395-1.654.682l-2.318-.954-1.768,1.768.954,2.318c-.287.518-.515,1.073-.682,1.654l-2.318.966v2.5l2.318.966c.167.581.395,1.135.682,1.654l-.954,2.318,1.768,1.768,2.318-.954c.518.287,1.073.515,1.654.682l.966,2.318h2.5l.966-2.318c.581-.167,1.135-.395,1.654-.682l2.318.954,1.768-1.768-.954-2.318c.287-.518.515-1.073.682-1.654l2.318-.966Z"
            fill="none"
            stroke="currentColor"
            stroke-linecap="square"
            stroke-miterlimit="10"
            stroke-width="2"
          ></path>
        </g>
      </svg>
      <span class="dock-label">Settings</span>
    </button>
  </div>
</template>
