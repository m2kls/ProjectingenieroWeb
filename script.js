const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible'));
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();
document.querySelector('.menu-btn')?.addEventListener('click', () => {
  document.querySelector('.main-nav').classList.toggle('open');
});

const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.news-card');
const searchInput = document.getElementById('searchNews');

function renderNews() {
  const active = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
  const query = searchInput.value.toLowerCase().trim();

  cards.forEach((card) => {
    const categoryMatch = active === 'all' || card.dataset.category === active;
    const text = card.innerText.toLowerCase();
    const searchMatch = text.includes(query);
    card.style.display = categoryMatch && searchMatch ? 'block' : 'none';
  });
}

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    renderNews();
  });
});
searchInput.addEventListener('input', renderNews);

const hidden = document.querySelectorAll('.hidden-news');
document.getElementById('loadMore').addEventListener('click', (e) => {
  hidden.forEach((n) => n.classList.remove('hidden-news'));
  e.target.style.display = 'none';
  renderNews();
});

const form = document.getElementById('newsletterForm');
const emailInput = document.getElementById('emailInput');
const formMessage = document.getElementById('formMessage');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();
  localStorage.setItem('projectingeniero_newsletter_email', email);
  formMessage.textContent = '¡Gracias por suscribirte! Te avisaremos cuando salga el próximo resumen.';
  form.reset();
});

renderNews();
