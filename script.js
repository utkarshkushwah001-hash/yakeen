let steps = 0;
let lastX = 0;
let threshold = 12;

document.getElementById("startBtn").addEventListener("click", () => {

  alert("Tracking started");

  if (typeof DeviceMotionEvent !== "undefined") {

    window.addEventListener("devicemotion", (event) => {
      let x = event.accelerationIncludingGravity.x;

      if (Math.abs(x - lastX) > threshold) {
        steps++;

        let calories = steps * 0.04;
        let distance = steps * 0.75;

        document.getElementById("steps").innerText = steps;
        document.getElementById("calories").innerText =
          calories.toFixed(2);
        document.getElementById("distance").innerText =
          distance.toFixed(2);
      }

      lastX = x;
    });

  } else {
    alert("Motion sensor not supported");
  }
});
