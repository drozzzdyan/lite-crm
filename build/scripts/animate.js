export function startApp() {
  let tl = gsap.timeline()

  tl.set('.table', {
      visibility: "hidden",
    })
    .set('.add', {
      visibility: "hidden",
    })
    .from('.header', {
      y: -150,
      duration: 0.8,
      ease: "sine",
    })
    .from('.clients__header', {
      opacity: 0,
      duration: 0.8
    }, "-=0.2")
    .set('.table', {
      visibility: "visible",
    })
    .from('.table', {
      height: 0,
      duration: 1.2,
    })
    .set('.add', {
      visibility: "visible",
    })
    .from('.add', {
      y: 200,
    })
}