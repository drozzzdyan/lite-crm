import { modalAnimate } from "./animate.js";

export function startModal() {
  const addBtn = document.querySelector('.add__btn');
  const closeBtn = document.querySelector('.close');
  addBtn.addEventListener('click', () => {
    modalAnimate()
  })
  closeBtn.addEventListener('click', () => {
    modalAnimate(false)
  })

}