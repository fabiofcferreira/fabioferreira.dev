particlesJS.load('particles', 'particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});

document.addEventListener('DOMContentLoaded', () => {
  let bio = document.querySelector('div#bio')
  let age = moment().diff(moment("2001-07-18"), 'years')

  bio.innerText = `${age}y old self-taught full stack developer`
})