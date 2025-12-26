/* ===========================================
   justingohn.com - JavaScript
   =========================================== */

// ---------- Dark Mode Toggle ----------
(function() {
  const THEME_KEY = 'theme';
  const DARK = 'dark';
  const LIGHT = 'light';

  // Get saved theme or system preference
  function getPreferredTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) return saved;

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK : LIGHT;
  }

  // Apply theme to document
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    updateToggleIcon(theme);
  }

  // Update toggle button icon
  function updateToggleIcon(theme) {
    const toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;

    const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>`;

    const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>`;

    toggle.innerHTML = theme === DARK ? sunIcon : moonIcon;
    toggle.setAttribute('aria-label', theme === DARK ? 'Switch to light mode' : 'Switch to dark mode');
  }

  // Toggle between themes
  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === DARK ? LIGHT : DARK;
    setTheme(next);
  }

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', function() {
    // Set initial theme
    setTheme(getPreferredTheme());

    // Attach click handler to toggle button
    const toggle = document.querySelector('.theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', toggleTheme);
    }
  });

  // Listen for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    if (!localStorage.getItem(THEME_KEY)) {
      setTheme(e.matches ? DARK : LIGHT);
    }
  });
})();

// ---------- Active Nav Link ----------
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(function(link) {
      const href = link.getAttribute('href');

      // Check if current page matches link
      if (currentPath.endsWith(href) ||
          (href === 'index.html' && (currentPath === '/' || currentPath.endsWith('/')))) {
        link.classList.add('active');
      }
    });
  });
})();
