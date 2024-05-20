const sliderFill = document.querySelector(".fill");
const timeLeftText = document.querySelector("#time-left");
const startCount = 60;
let timeLeft = startCount;

const timerId = setInterval(() => {
  console.log(timeLeft);
  timeLeft--;
  timeLeftText.textContent = timeLeft;
  sliderFill.style.width = (timeLeft / startCount) * 100 + "%";
  if (timeLeft <= 0) {
    clearInterval(timerId);
    timeLeftText.textContent = "CONGRATS!!!";
    suprise();
  }
}, 1000);

function suprise() {
  const color = [
    "rgba(255,105,97,0.5)",
    "rgba(97,169,255,0.5)",
    "rgba(247,255,97,0.5)",
    "rgba(97,255,184,0.5)",
    "rgba(255,255,255,0.5)",
  ];

  for (let i = 0; i < 500; i++) {
    setTimeout(() => {
      const circleElement = document.createElement("div");
      circleElement.classList.add("circle");
      circleElement.style.left = Math.floor(Math.random() * 100) + "%";
      circleElement.style.top = Math.floor(Math.random() * 100) + "%";
      circleElement.style.backgroundColor =
        color[Math.floor(Math.random() * color.length)];
      timeLeftText.append(circleElement);
    }, i * 5);
  }
}
