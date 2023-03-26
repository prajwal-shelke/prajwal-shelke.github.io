const track = document.getElementById("image-track");

window.onmousedown = (e) => {
  track.dataset.mouseDownAt = e.clientX;
};

window.onmousemove = (e) => {
  if (track.dataset.mouseDownAt === "0") return;
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
  const maxDelta = window.innerWidth / 2;
  const percentage = (mouseDelta / maxDelta) * -100;
  let newPercentage = percentage + parseFloat(track.dataset.prevPercentage);

  newPercentage = Math.max(Math.min(newPercentage, 0), -100);

  track.dataset.percentage = newPercentage;
  track.animate(
    {
      transform: `translate(${newPercentage}%, -50%)`,
    },
    { duration: 1300, fill: "forwards" }
  );
  for (const image of track.getElementsByClassName("image")) {
    image.animate(
      {
        objectPosition: `${newPercentage + 100}% 50%`,
      },
      { duration: 1200, fill: "forwards" }
    );
  }
};

window.onmouseup = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
};

// for mobile devices

if (window.outerWidth < 800) {
  window.ontouchstart = (e) => {
    track.dataset.mouseDownAt = e.touches[0].clientX;
  };

  window.ontouchmove = (e) => {
    if (track.dataset.mouseDownAt === "0") return;
    const mouseDelta =
      parseFloat(track.dataset.mouseDownAt) - e.touches[0].clientX;
    const maxDelta = window.innerWidth / 2;
    const percentage = (mouseDelta / maxDelta) * -100;
    let newPercentage = percentage + parseFloat(track.dataset.prevPercentage);

    newPercentage = Math.max(Math.min(newPercentage, 0), -100);

    track.dataset.percentage = newPercentage;
    track.animate(
      {
        transform: `translate(${newPercentage}%, -50%)`,
      },
      { duration: 1300, fill: "forwards", easing: "linear" }
    );
    for (const image of track.getElementsByClassName("image")) {
      image.animate(
        {
          objectPosition: `${newPercentage + 100}% 50%`,
        },
        { duration: 1200, fill: "forwards", easing: "linear" }
      );
    }
    console.log(newPercentage + 100);
  };

  window.ontouchend = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
  };
}
