var audio = new Audio("/src/audio/AboutToRocK.mp3");
var logo = document.querySelectorAll("#logo-header");

logo.forEach(logo => {
  logo.addEventListener("mouseover", () => {
    audio.play();
  });
});