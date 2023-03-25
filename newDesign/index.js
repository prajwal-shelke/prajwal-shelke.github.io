const wrapper = document.getElementById("wrapper");

setInterval(() => {
  wrapper.dataset.configuration = Math.floor(Math.random() * 3) + 1;
  wrapper.dataset.roundness = Math.floor(Math.random() * 3) + 1;
}, 2000);
