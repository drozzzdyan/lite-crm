import { startAppAnimate } from './animate.js';
import { startModal } from './modal.js';
import { setTableHeight } from './render.js'

setTableHeight();
startAppAnimate();
startModal();

window.addEventListener('resize', () => {
  setTableHeight();
})