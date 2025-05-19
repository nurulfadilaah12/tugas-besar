// Saat halaman dimuat, beri efek fade-in
document.body.classList.add('fade-in');

// Tangani semua klik link internal
document.querySelectorAll('a[href]').forEach(link => {
  const url = link.getAttribute('href');
  if (url && !url.startsWith('#') && !url.startsWith('http')) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      document.body.classList.remove('fade-in');
      document.body.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = this.href;
      }, 300); // waktu harus sedikit lebih kecil dari durasi transition
    });
  }
});

// Fade-in halaman saat load
document.body.classList.add('fade-in');

// Smooth page transition
document.querySelectorAll('a[href]').forEach(link => {
  const url = link.getAttribute('href');
  if (url && !url.startsWith('#') && !url.startsWith('http')) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      document.body.classList.remove('fade-in');
      document.body.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = this.href;
      }, 300);
    });
  }
});

// Scroll Reveal effect
const revealElements = document.querySelectorAll('.scroll-reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 50) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
