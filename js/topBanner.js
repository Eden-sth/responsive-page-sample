const carousel = document.querySelectorAll(".carousel");
const carouselWrap = document.querySelector(".carousel-wrap"); // 요소 선택 추가

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

carouselWrap.addEventListener("mouseover", () => {
  animations.forEach((animation) => animation.pause());
});
carouselWrap.addEventListener("mouseout", () => {
  animations.forEach((animation) => animation.play());
});
