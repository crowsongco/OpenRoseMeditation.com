// Toggle theme between light and dark mode
function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode', !isDark);

    // Save the theme preference in localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Load the saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.add('light-mode');
    }
});

// Toggle language content between English and Spanish
function toggleLanguage(lang) {
    const enContent = document.getElementById('en-content');
    const esContent = document.getElementById('es-content');
    if (lang === 'en') {
        enContent.style.display = 'block';
        esContent.style.display = 'none';
    } else {
        enContent.style.display = 'none';
        esContent.style.display = 'block';
    }
}
