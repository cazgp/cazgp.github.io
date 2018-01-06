window.onload = function() {
  const exitMenu = document.getElementById('menu-out')
  const menu = document.getElementById('menu')
  const enterMenu = document.getElementById('menu-link')

  exitMenu.onclick = function() {
    menu.classList.remove('menu-shown')
    document.body.classList.remove('overflow-hidden')
  }

  enterMenu.onclick = function() {
    menu.classList.add('menu-shown')
    document.body.classList.add('overflow-hidden')
  }
  console.log('heyyyy')
}
