# Mealstrom Calorie Tracker & Meal Planner

## Tauri + Vue + TypeScript

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

---

## Styling: Tailwind CSS v4 & DaisyUI v5

### Tailwind CSS v4

- **Utility-first CSS framework** for rapid UI development.
- Configured via `src/style.css` using the new Tailwind v4 CSS variable and plugin system.
- Custom fonts and theme variables are set in the `@theme` block in `src/style.css`.
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

### DaisyUI v5

- **Component library** for Tailwind CSS, providing ready-to-use UI components and themes.
- Enabled as a plugin in `src/style.css` with theme configuration.
- You can use DaisyUI classes (e.g., `btn`, `navbar`, `dock`, etc.) directly in your Vue templates.
- [DaisyUI Docs](https://daisyui.com/docs/use/)

---

## State Management: Pinia

- **Pinia** is the official state management library for Vue 3.
- Stores are defined in `src/stores/` (e.g., `meals.ts`, `foods.ts`, `userSettings.ts`).
- Pinia is registered in `src/main.ts` and can be used in any component via the `useXStore` pattern.
- Example usage (adding/removing meals) is shown in `src/App.vue`.
- [Pinia Docs](https://pinia.vuejs.org/introduction.html)

---

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
