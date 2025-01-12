const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Function to set the theme
function setTheme(isDark) {
    if (isDark) {
        body.classList.remove('light-mode');
    } else {
        body.classList.add('light-mode');
    }
}

// Toggle dark mode
darkModeToggle.addEventListener('click', function() {
    const isDark = body.classList.contains('light-mode');
    setTheme(isDark);
    localStorage.setItem('darkMode', isDark ? 'false' : 'true');
});

// Check if dark mode preference is stored, if not, check system preference
const userPrefersDark = localStorage.getItem('darkMode') === 'true';
const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// Set initial theme based on user preference or system preference
setTheme(userPrefersDark !== null ? !userPrefersDark : !systemPrefersDark);