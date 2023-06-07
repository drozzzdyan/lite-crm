import {
  startApp
} from './animate.js';
import {
  setTableHeight
} from './render.js'

setTableHeight();
startApp();

window.addEventListener('resize', () => {
  setTableHeight();
})