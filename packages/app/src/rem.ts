import { throttle } from "./utils";


const baseSize = 10;

function setRem() {
  let clientWidth = document.documentElement.clientWidth
  if (clientWidth <= 1366) {
    clientWidth = 1366
  }
  const scale = clientWidth / 1920;
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
}

setRem();

window.addEventListener('resize', throttle(setRem, 500));