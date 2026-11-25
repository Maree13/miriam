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

const ornament = document.querySelector('.intro-illustration');

if (ornament) {
  ornament.addEventListener('mouseenter', () => {
    ornament.classList.add('swinging');
  });

  ornament.addEventListener('animationend', () => {
    ornament.classList.remove('swinging');
  });
}
