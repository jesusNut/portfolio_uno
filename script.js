function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Get the ticker text element
const tickerText = document.querySelector(".ticker-text");

// Pause the ticker animation on hover
tickerText.addEventListener("mouseenter", () => {
  tickerText.style.animationPlayState = "paused";
});

// Resume the ticker animation on mouse leave
tickerText.addEventListener("mouseleave", () => {
  tickerText.style.animationPlayState = "running";
});
