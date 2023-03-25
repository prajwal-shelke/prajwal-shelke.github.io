const wrapper = document.getElementById("wrapper");

const configArr = [
  [1, 1],
  [1, 2],
  [1, 3],
  [2, 1],
  [2, 2],
  [2, 3],
  [3, 1],
];

setInterval(() => {
  const randomConfig = configArr[Math.floor(Math.random() * 7)];
  wrapper.dataset.configuration = randomConfig[0];
  wrapper.dataset.roundness = randomConfig[1];
}, 2500);
