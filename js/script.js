document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const url = card.getAttribute('data-url');
    document.querySelector('.modal-iframe').src = url;
  });
});

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.getAttribute('data-filter');
    projectCards.forEach(card => {
      if (category === 'all' || card.getAttribute('data-category') === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

const toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.classList.toggle("fa-moon");
  toggleBtn.classList.toggle("fa-sun");
});

function hidePostcard() {
  const postcard = document.getElementById('postcard');
  const maincontent = document.getElementById('maincontent');
  postcard.style.opacity = '0';
  postcard.style.transform = 'translateY(-100%)';
  setTimeout(() => {
    postcard.style.display = 'none';
    maincontent.style.display = 'block';
  }, 2000);
}

const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function navMenu() {
  const menu = document.getElementById('navMenu');
  menu.classList.toggle('active'); // Toggle 'active' to slide in/out
}

AOS.init();

// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  if (!name.value || !email.value || !message.value) {
    alert('Please fill in all fields.');
    return;
  }
  alert('Form submitted! (This is just a placeholder alert.)');
  this.reset();
});

// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

function goToProfile() {
  const profile = document.getElementById('profile');
  const homepage = document.getElementById('homepage');
  const projects = document.getElementById('projectspage');
  const menu = document.getElementById('navMenu');
  menu.classList.toggle('active'); // Toggle 'active' to slide in/out
    homepage.style.display = 'none';
    profile.style.display = 'block';
    projects.style.display = 'none';
}

function goToHome() {
  const profile = document.getElementById('profile');
  const homepage = document.getElementById('homepage');
  const projects = document.getElementById('projectspage');
  const menu = document.getElementById('navMenu');
  menu.classList.toggle('active'); // Toggle 'active' to slide in/out
    homepage.style.display = 'block';
    profile.style.display = 'none';
    projects.style.display = 'none';
    
}

function goToProjects() {
  const profile = document.getElementById('profile');
  const homepage = document.getElementById('homepage');
  const projects = document.getElementById('projectspage');
  const menu = document.getElementById('navMenu');
  menu.classList.toggle('active'); // Toggle 'active' to slide in/out
    homepage.style.display = 'none';
    profile.style.display = 'none';
    projects.style.display = 'block';
}

function goToProfileFromHome() {
  const profile = document.getElementById('profile');
  const homepage = document.getElementById('homepage');
  const projects = document.getElementById('projectspage');
  const menu = document.getElementById('navMenu');
    homepage.style.display = 'none';
    profile.style.display = 'block';
    projects.style.display = 'none';
}


function goToProjectsFromHome() {
  const profile = document.getElementById('profile');
  const homepage = document.getElementById('homepage');
  const projects = document.getElementById('projectspage');
  const menu = document.getElementById('navMenu');
    homepage.style.display = 'none';
    profile.style.display = 'none';
    projects.style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate__animated", "animate__fadeInUp");
                observer.unobserve(entry.target); // Remove if you only want it to trigger once
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
});
