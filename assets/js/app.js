function isOnView(el1) {
  let elemStart = el1.offsetTop,
    elemHeight = el1.offsetHeight

  if (window.scrollY < elemStart ||
    window.scrollY + window.innerHeight > elemStart + elemHeight) return true
  
  return false
}

function navbar() {
  let navbar = document.querySelector('nav')
  let hamburgerContainer = navbar.querySelector('.hamburger-container')
  let hamburger = hamburgerContainer.querySelector('.hamburger')
  let overlay = navbar.querySelector('#sidemenu-overlay')

  // watch for hamburger and overlay click to open and close the sidemenu
  hamburgerContainer.addEventListener('click', (ev) => toggleNavDrawer())
  overlay.addEventListener('click', (ev) => {
    if (hamburger.classList.contains('active')) toggleNavDrawer()
  })

  document.addEventListener('touchmove', (ev) => {
    if (window.scrollY > 0) navbar.classList.add('active')
    else if (window.scrollY == 0) navbar.classList.remove('active')
  })

  document.addEventListener('scroll', (ev) => {
    if (window.scrollY > 0) navbar.classList.add('active')
    else if (window.scrollY == 0) navbar.classList.remove('active')
  })
}

function toggleNavDrawer() {
  let hamburgerContainer = document.querySelector('nav .hamburger-container')
  let hamburger = hamburgerContainer.querySelector('.hamburger')

  hamburgerContainer.classList.toggle('active')
  hamburger.classList.toggle('active')
}

function pageIndicator() {
  let nav = document.querySelector('nav')
  let navLinks = document.querySelectorAll('ul.links')
  let slug = window.location.pathname.split('/').slice(1)[0]

  if (slug.length <= 1) return

  navLinks.forEach(list => {
    list.querySelectorAll('a').forEach(el => {
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
  })
}

function changeNewLinksTab() {
  let links = document.links
  
  for (let i = 0; i < links.length; i++) {
    if (links[i].hostname != window.location.hostname) links[i].target = '_blank'
  }
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
  changeNewLinksTab()

  loadEffect()
}

document.addEventListener('DOMContentLoaded', () => {
  app()
})