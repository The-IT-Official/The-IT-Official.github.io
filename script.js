const toggle = document.getElementById('themeToggle');
const root = document.documentElement;
const savedTheme = localStorage.getItem('theme') || 'dark';

root.setAttribute('data-theme', savedTheme);
toggle.textContent = savedTheme === 'dark' ? '☾' : '☀';

toggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    toggle.textContent = next === 'dark' ? '☾' : '☀';
    localStorage.setItem('theme', next);
});
