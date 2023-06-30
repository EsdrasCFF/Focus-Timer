const buttonPlay = document.querySelector(".buttonPlay")
const buttonPause = document.querySelector(".buttonPause")
const buttonSetting = document.querySelector(".buttonSetting")
const buttonStop = document.querySelector(".buttonStop")

const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")

let intervalId;

buttonPlay.addEventListener('click', () => {
  intervalId = setInterval(updateTimer, 1000)

  buttonPause.classList.remove("hidden")
  buttonPlay.classList.add("hidden")
  buttonSetting.classList.add("hidden")
  buttonStop.classList.remove("hidden")
})

buttonPause.addEventListener('click', () => {
  clearInterval(intervalId)

  buttonPause.classList.add("hidden")
  buttonPlay.classList.remove("hidden")
})

buttonStop.addEventListener('click', () => {
  clearInterval(intervalId)
  
  buttonStop.classList.add("hidden")
  buttonPause.classList.add("hidden")
  buttonSetting.classList.remove("hidden")
  buttonPlay.classList.remove("hidden")

  minutesDisplay.textContent = "00"
  secondsDisplay.textContent = "00"
})

function updateTimer () {
  let initialMinutes = minutesDisplay.textContent
  let initialSeconds = secondsDisplay.textContent

  if(initialMinutes < 1 && initialSeconds < 1) {
    clearInterval(intervalId)

    buttonStop.classList.add("hidden")
    buttonPause.classList.add("hidden")
    buttonSetting.classList.remove("hidden")
    buttonPlay.classList.remove("hidden")
    
    return
  }

  if(initialSeconds > 0) {
    initialSeconds --
    secondsDisplay.textContent = initialSeconds.toString().padStart(2, "0")
  } else {
    secondsDisplay.textContent = 10
    initialMinutes --
    minutesDisplay.textContent = initialMinutes.toString().padStart(2, "0")
  }
}
