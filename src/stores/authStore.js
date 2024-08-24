// src/stores/authStore.js
import { writable } from 'svelte/store';


// Create a writable store to manage the logged-in state
export const isLoggedIn = writable(false);



// Function to update the store based on session storage
export const checkSession = () => {
  const sessionStatus = localStorage.getItem('isLoggedIn');

  
  if (sessionStatus === 'true') {
    isLoggedIn.set(true);
  }
};

// Initialize the store with session storage value