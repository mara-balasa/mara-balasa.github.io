/* ── Paper filter ─────────────────────────────────────────── */
const filterBtns = document.querySelectorAll('.filter-btn');
const paperCards = document.querySelectorAll('.paper-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    paperCards.forEach(card => {
      if (filter === 'all' || card.dataset.type === filter) {
        card.removeAttribute('data-hidden');
      } else {
        card.setAttribute('data-hidden', '');
      }
    });
  });
});

/* ── Mobile nav toggle ────────────────────────────────────── */
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', open);
  });
}

/* ── Scroll animations ────────────────────────────────────── */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
);

document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
