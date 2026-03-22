// ── Scroll-triggered fade-up animations ─────────────
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger siblings slightly for a cascading effect
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => entry.target.classList.add('visible'), delay);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.fade-up').forEach((el, i) => {
  // Auto-stagger elements within the same parent
  const siblings = Array.from(el.parentElement.querySelectorAll('.fade-up'));
  const index = siblings.indexOf(el);
  el.dataset.delay = index * 100;
  observer.observe(el);
});

// ── Waitlist form handler ───────────────────────────
function handleWaitlist(e) {
  e.preventDefault();
  const input = e.target.querySelector('input[type="email"]');
  const btn = e.target.querySelector('button');
  const email = input.value;

  btn.textContent = 'You\'re in!';
  btn.style.background = '#22C55E';
  input.value = '';

  setTimeout(() => {
    btn.textContent = 'Get Early Access';
    btn.style.background = '';
  }, 3000);
}

// ── Navbar background on scroll ─────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.borderBottomColor =
    window.scrollY > 10 ? 'var(--border)' : 'transparent';
});
