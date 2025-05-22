// 헤더 애니메이션 추가

const header = document.querySelector(".header h1");

const keyframes = {
  // opacity: [0, 1],
  translate: [`0 100px`, 0],
};

const options = {
  duration: 1000,
  easing: "ease-in",
  //   direction: "normal",
  //   iteration: Infinity,
};

header.animate(keyframes, options);
