
// Main entry point for the application
import '../assets/styles/base.scss';
import '../assets/scripts/base.js';

console.log('The Popcorn Awakens - Application loaded!');

// Ensure DOM is loaded before initializing
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}

function initializeApp() {
  console.log('App initialized');
}
