const noBtn = document.getElementById('noBtn')
const yesBtn = document.getElementById('yesBtn')

function moveNoButton() {
  // We use the screen size so the button can run anywhere inside the browser window
  const maxX = window.innerWidth - noBtn.offsetWidth - 20
  const maxY = window.innerHeight - noBtn.offsetHeight - 20

  // Random position keeps the movement unpredictable and funny
  const randomX = Math.floor(Math.random() * maxX)
  const randomY = Math.floor(Math.random() * maxY)

  noBtn.classList.add('escape')
  noBtn.style.left = `${randomX}px`
  noBtn.style.top = `${randomY}px`
}

noBtn.addEventListener('mouseenter', moveNoButton)
noBtn.addEventListener('click', moveNoButton)
noBtn.addEventListener('touchstart', moveNoButton)

yesBtn.addEventListener('click', () => {
  // We redirect to a separate page so the celebration feels like a real second screen
  window.location.href = 'celebration.html'
})
