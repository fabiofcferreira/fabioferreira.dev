function isOnView(el1) {
  let elemStart = el1.offsetTop,
    elemHeight = el1.offsetHeight

  if (window.scrollY < elemStart ||
    window.scrollY + window.innerHeight > elemStart + elemHeight) return true
  
  return false
}

function navbar() {
  let navbar = document.querySelector('nav')

  navbar.querySelector('.hamburger').addEventListener('click', (ev) => ev.target.classList.toggle('active'))

  document.addEventListener('touchmove', (ev) => {
    if (window.scrollY > 0) navbar.classList.add('active')
    else if (window.scrollY == 0) navbar.classList.remove('active')
  })

  document.addEventListener('scroll', (ev) => {
    if (window.scrollY > 0) navbar.classList.add('active')
    else if (window.scrollY == 0) navbar.classList.remove('active')
  })
}

function pageIndicator() {
  let nav = document.querySelector('nav')
  let navLinks = document.querySelector('nav ul.links')
  let slug = window.location.pathname.split('/').slice(1)[0]

  if (slug.length <= 1) return

  navLinks.querySelectorAll('a').forEach(el => {
    let pathParts = el.href.replace(window.location.origin, "").split('/')
    // detect if any of the tabs are an anchor tag for an element in the same page
    if (pathParts[pathParts.length - 1].startsWith('#')) return

    let linkSlug = el.href.replace(window.location.origin, "").split('/')[1]

    // no slug
    if (linkSlug.length == 0) return

    if (linkSlug == slug) {
      el.classList.add('active')

      if (slug == "hire") nav.style.setProperty('--accent', 'var(--orange)')
    }
  })
}

function loadEffect() {
  let allImages = document.querySelectorAll('img')
  allImages.forEach(el => {
    if (isOnView(el)) setTimeout(() => el.classList.add('loaded'), 250)
  })

  document.addEventListener('scroll', () => {
    allImages.forEach(el => {
      if (isOnView(el)) setTimeout(() => el.classList.add('loaded'), 500)
    })
  })
}

function app() {
  navbar()
  pageIndicator()

  loadEffect()
}

document.addEventListener('DOMContentLoaded', () => {
  app()
})