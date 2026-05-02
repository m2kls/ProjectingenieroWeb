const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.main-nav');
btn?.addEventListener('click', () => nav.classList.toggle('open'));
