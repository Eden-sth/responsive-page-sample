const topBanner = document.querySelector(".topBanner ul");

const keyframes = {
  transform: ["translateX(0px)", "translateX(500px)"],
};

const options = {
  duration: 1000,
  easing: "ease-in",
  direction: `normal`,
  iterations: Infinity,
};

topBanner.animate(keyframes, options);
