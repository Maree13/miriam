const fig = document.getElementById('figure');

fig.addEventListener('click', (e) => {
  e.preventDefault();
  document.body.classList.add('leaving');
  setTimeout(() => {
    window.location.href = fig.href;
  }, 1400);
});

// keď sa user vráti tlačidlom Späť, zruší vyblednutie
window.addEventListener('pageshow', () => {
  document.body.classList.remove('leaving');
});

