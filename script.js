const fig = document.getElementById('figure');

if (fig) {
  fig.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.add('leaving');
    setTimeout(() => {
      window.location.href = fig.href;
    }, 1400);
  });
}

// keď sa user vráti tlačidlom Späť, zruší vyblednutie
window.addEventListener('pageshow', () => {
  document.body.classList.remove('leaving');
});

const ornament = document.querySelector('.art-illustration');

if (ornament) {
  ornament.addEventListener('mouseenter', () => {
    ornament.classList.add('swinging');
  });

  ornament.addEventListener('animationend', () => {
    ornament.classList.remove('swinging');
  });
}


const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-list a");

if (menuBtn && navbar) {
  menuBtn.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("active");
    // Zamkne scrollovanie stránky, kým je menu otvorené
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
      document.body.style.overflow = "";
    });
  });
}

