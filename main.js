import { updateTimer } from "./timer"

const buttonPlay = document.querySelector(".buttonPlay")
const buttonPause = document.querySelector(".buttonPause")
const buttonSetting = document.querySelector(".buttonSetting")
const buttonStop = document.querySelector(".buttonStop")
const buttonSendMinutes = document.querySelector(".buttonSend")

const buttonSoundOn = document.querySelector(".buttonSoundOn")
const buttonSoundOff = document.querySelector(".buttonSoundOff")

const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
const alertPromptDisplay = document.querySelector(".alert-prompt")
const alertErrorDisplay = document.getElementById("alert-error")



let soundConcetration = new Audio("https://www.zapsplat.com/wp-content/uploads/2015/music-one/music_zapsplat_quiz_bed_concentration.mp3")
let soundPlay = new Audio("https://cdn.freesound.org/previews/686/686557_14734264-lq.mp3")
let soundStop = new Audio("https://cdn.freesound.org/previews/337/337168_3624044-lq.mp3")
let inputMinutes;
let intervalId;



buttonPlay.addEventListener('click', () => {
  intervalId = setInterval(updateTimer, 1000)

  buttonPause.classList.remove("hidden")
  buttonPlay.classList.add("hidden")
  buttonSetting.classList.add("hidden")
  buttonStop.classList.remove("hidden")

  alertPromptDisplay.classList.remove("open")
  alertErrorDisplay.classList.add("hidden")

  soundPlay.play()


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

  alertPromptDisplay.classList.remove("open")
  alertErrorDisplay.classList.add("hidden")

  soundStop.play()
})

buttonSetting.addEventListener('click', () => {
  alertPromptDisplay.classList.toggle('open')
})

buttonSendMinutes.addEventListener('click', () => {
  inputMinutes = document.querySelector("#userMinutes").value
  let checkinInputValue = isNumber(inputMinutes)
  let minutes = document.getElementById("minutes")
  if (checkinInputValue == false) {
    alertErrorDisplay.querySelector(".text-error").textContent = 'Enter numbers only.'
    alertErrorDisplay.classList.remove("hidden")
    document.getElementById("userMinutes").value = ""
    return

  } else if (inputMinutes < 1) {
    alertErrorDisplay.classList.remove("hidden")
    alertErrorDisplay.querySelector(".text-error").textContent = 'The value cannot be less than 0.'
    document.getElementById("userMinutes").value = ""
    return

  } else if (inputMinutes > 999) {
    alertErrorDisplay.classList.remove("hidden")
    alertErrorDisplay.querySelector(".text-error").textContent = 'The value cannot be great than 999.'
    document.getElementById("userMinutes").value = ""
    return
  } else {
    alertErrorDisplay.classList.add("hidden")
    alertPromptDisplay.classList.remove("open")
    minutes.textContent = twoDigits(inputMinutes)
  }

})

buttonSoundOn.addEventListener('click', () => {
  soundConcetration.pause()
  
  buttonSoundOn.classList.add("hidden")
  buttonSoundOff.classList.remove("hidden")

})

buttonSoundOff.addEventListener('click', () => {
  soundConcetration.play()
  
  buttonSoundOn.classList.remove("hidden")
  buttonSoundOff.classList.add("hidden")
})




function isNumber(char) {
  return !isNaN(parseFloat(char)) && isFinite(char);
}

function twoDigits(num) {
  let number = num.toString().padStart(2, "0")
  return number
}
