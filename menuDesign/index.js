const wrapper = document.getElementById("wrapper");
const shapes = document.getElementsByClassName("shape");
const backs = document.getElementsByClassName("back");
let open = false;

for (let i = 0; i < backs.length; i++) {
  backs[i].onclick = () => {
    open = true;
    shapes[i].classList.remove("active");
    shapes[i].firstElementChild.style.display = "none";
    shapes[i].firstElementChild.animate(
      { opacity: "0" },
      { duration: 300, fill: "forwards" }
    );
    wrapper.animate(
      {
        width: "90vmin",
        height: "auto",
      },
      { duration: 500, fill: "forwards" }
    );
    for (const shape2 of shapes) {
      shape2.animate(
        { opacity: "1" },
        { duration: 800, fill: "forwards", easing: "ease-in" }
      );
      shape2.style.display = "block";
    }
  };
}

for (const shape of shapes) {
  shape.onclick = () => {
    if (!open) {
      open = true;
      shape.classList.add("active");
      wrapper.animate(
        {
          width: "100vw",
          height: "100vh",
        },
        { duration: 800, fill: "forwards" }
      );
      for (const shape2 of shapes) {
        if (!shape2.classList.contains("active")) {
          shape2.animate({ opacity: "0" }, { duration: 500, fill: "forwards" });
          setTimeout(function () {
            shape2.style.display = "none";
          }, 1200);
        }
      }
      shape.firstElementChild.style.display = "block";
      shape.firstElementChild.animate(
        { opacity: "1" },
        { duration: 1000, fill: "forwards", easing: "ease-in" }
      );
    } else {
      open = false;
    }
  };
}

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
