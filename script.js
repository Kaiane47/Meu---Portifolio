// ==========================
// MENU TOGGLE
// ==========================
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// ==========================
// DARK MODE
// ==========================
const darkToggle = document.getElementById('dark-toggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// ==========================
// SKILL BARS ANIMATION
// ==========================
const skillFills = document.querySelectorAll('.skill-fill');

window.addEventListener('load', () => {
  skillFills.forEach(fill => {
    const value = fill.dataset.skill;
    setTimeout(() => {
      fill.style.width = value;
    }, 500); // delay suave
  });
});

// ==========================
// FADE-IN DAS SEÇÕES
// ==========================
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// ==========================
// FORM SUBMIT
// ==========================
const form = document.querySelector('.contact-form');
const status = document.querySelector('.form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  status.textContent = 'Mensagem enviada com sucesso!';
  form.reset();
  setTimeout(() => { status.textContent = ''; }, 5000);
});

// ==========================
// BOTÃO TOPO
// ==========================
const topBtn = document.getElementById('top-btn');

window.addEventListener('scroll', () => {
  topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
