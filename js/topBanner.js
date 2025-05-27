const carousel = document.querySelector(".carousel");

const carouselKeyframes = {
  transform: ["translateX(0px)", "translateX(-100px)"],
};
const carouselOption = {
  duration: 15000,
  iterations: Infinity,
};

let animations = [];

carousel.forEach((carousel) => {
  let animation = carousel.animate(carouselKeyframes, carouselOption);
  animations.push(animation);
});

carouselWrap.addEventLister("mouseover", () => {
  animations.forEach((animation) => animation.pause());
});
carouselWrap.addEventLister("mouseout", () => {
  animations.forEach((animation) => animation.play());
});
