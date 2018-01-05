window.onload = function() {
  const exitMenu = document.getElementById('menu-out')
  const menu = document.getElementById('menu')
  const enterMenu = document.getElementById('menu-link')

  exitMenu.onclick = function() {
    menu.classList.remove('menu-shown')
  }

  enterMenu.onclick = function() {
    menu.classList.add('menu-shown')
  }
  console.log('heyyyy')
}
