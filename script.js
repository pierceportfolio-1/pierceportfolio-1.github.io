const sections = ['home', 'about', 'experience', 'blog', 'contact'];

function showSection(section) {
  if (!sections.includes(section)) section = 'home';

  // Hide all sections, show target
  sections.forEach(s => {
    document.getElementById(s).classList.toggle('hidden', s !== section);
  });

  // Update URL with history API without reload
  history.pushState({ section }, '', `#${section}`);
}

// Handle back/forward navigation
window.addEventListener('popstate', (event) => {
  const section = event.state?.section || location.hash.replace('#', '') || 'home';
  showSection(section);
});

// On initial page load, show correct section based on URL hash or default
window.addEventListener('DOMContentLoaded', () => {
  const initialSection = location.hash.replace('#', '') || 'home';
  showSection(initialSection);
});
