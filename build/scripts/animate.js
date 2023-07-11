export function startAppAnimate() {
  gsap.timeline()
    .set('.table', { visibility: "hidden" })
    .set('.add', { visibility: "hidden" })
    .from('.header', { y: -250, delay: 1, duration: 0.6, ease: "sine" })
    .from('.clients__header', { opacity: 0, duration: 0.6 }, "-=0.2")
    .set('.table', { visibility: "visible" })
    .from('.table', { opacity: 0, duration: 0.6 })
    .set('.add', { visibility: "visible" })
    .from('.add', { opacity: 0, })
}

export function modalAnimate(direction = true) {
  if (direction) {
    gsap.timeline()
      .set('.modal', { display: "flex" })
      .fromTo('.modal__card', { y: -500 }, { y: 0, duration: 0.6, ease: "sine" })
      .to('.modal', { opacity: 1, duration: 0.6 }, "<")
  } else {
    gsap.timeline()
      .to('.modal__card', { y: -500, duration: 0.6, ease: "sine" })
      .to('.modal', { opacity: 0, duration: 0.6 }, "<")
      .set('.modal', { display: "none" })
  }
}