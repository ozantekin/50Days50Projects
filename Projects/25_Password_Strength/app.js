const password = document.getElementById('password')
const background = document.getElementById('background')
const passwordLabel = document.getElementById('passwordLabel')

password.addEventListener('input', (e) => {
  const length = e.target.value.length
  // console.log(length)
  const bgBlur = 20 - length * 2
  background.style.filter = `blur(${bgBlur}px)`

  if (length >= 10) {
    passwordLabel.innerText = 'Strong Password'
  }
})
