import { defineStore } from 'pinia';

export const useUserSettingsStore = defineStore('userSettings', {
  state: () => ({
    settings: {} as Record<string, any>, // Replace any with a more specific type later
  }),
  actions: {
    // Add actions for managing user settings here
  },
});
