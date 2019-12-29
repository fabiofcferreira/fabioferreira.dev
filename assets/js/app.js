function pageIndicator() {
  let nav = document.querySelector('nav ul.links')
  let slug = window.location.pathname.split('/').slice(1)[0]

  if (slug.length <= 1) return

  nav.querySelectorAll('a').forEach(el => {
    let pathParts = el.href.replace(window.location.origin, "").split('/')
    // detect if any of the tabs are an anchor tag for an element in the same page
    if (pathParts.length > 2 && pathParts[2].startsWith('#')) return

    let linkSlug = el.href.replace(window.location.origin, "").split('/')[1]
    // no slug
    if (linkSlug.length == 0) return

    if (linkSlug == slug) {
      el.classList.add('active')
    }
  })
}

function app() {
  pageIndicator()
}

document.addEventListener('DOMContentLoaded', () => {
  app()
})