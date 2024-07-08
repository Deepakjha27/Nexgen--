document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
  
    // Check for saved user preference, if any, on load of the website
    if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark');
    }
  
    toggleButton.addEventListener('click', () => {
      body.classList.toggle('dark');
  
      // Save the user's preference to local storage
      if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  });
  