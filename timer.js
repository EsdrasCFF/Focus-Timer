
export function updateTimer () {
  let initialMinutes = minutesDisplay.textContent
  let initialSeconds = secondsDisplay.textContent

  if(initialMinutes < 1 && initialSeconds < 1) {
    clearInterval(intervalId)

    buttonStop.classList.add("hidden")
    buttonPause.classList.add("hidden")
    buttonSetting.classList.remove("hidden")
    buttonPlay.classList.remove("hidden")
    
    soundStop.play()
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


