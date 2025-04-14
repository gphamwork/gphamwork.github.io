// Animation on page 1 -- exterior of elevator
const letsRideButton = document.getElementById("lets-ride");
const elevatorWebsiteName = document.getElementById("elevator-website-name");
const elevatorSound = document.getElementById("elevatorSound");
const leftDoor = document.getElementById("left-door");
const rightDoor = document.getElementById("right-door");
elevatorSound.playbackRate = 1.5;

elevatorWebsiteName.addEventListener("click", function () {
  leftDoor.classList.add("animate");
  rightDoor.classList.add("animate");
  elevatorSound.play();

  setTimeout(() => {
    letsRideButton.style.zIndex = 3;
  }, 1000);
});

// Animation on switching from page 1 to page 2
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const jazzLounge = document.getElementById("jazzLounge");

letsRideButton.addEventListener("click", () => {
  anime({
    targets: screen1,
    scale: [1, 2],
    opacity: [1, 0],
    easing: "easeInQuad",
    duration: 1200,
    begin: () => {
      screen1.style.zIndex = 10;
    },
    complete: () => {
      screen1.style.display = "none";
      screen2.style.display = "block";

      anime({
        targets: screen2,
        scale: [1.2, 1],
        opacity: [0, 1],
        easing: "easeOutQuad",
        duration: 600,
      });
    },
  });

  setTimeout(() => {
    jazzLounge.play();
  }, 600);
});

// Animation for scrolls from page 2 to 5
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.id !== "screen1") {
          for (i = 2; i < 6; i++) {
            const e = document.getElementById("screen" + i);
            e.classList.remove("hidden");
          }
        }
      }
    });
  },
  { threshold: 0.6 } // Adjust for when it's considered "in view"
);

document.querySelectorAll(".screen").forEach((screen) => {
  observer.observe(screen);
});

const musicSymbol = document.getElementById("music-symbol");
musicSymbol.addEventListener("click", () => {
  if (jazzLounge.paused) {
    jazzLounge.play();
    musicSymbol.style.color = "white";
  } else {
    jazzLounge.pause();
    musicSymbol.style.color = "#E3DAD5";
  }
});

const scrollPage2To3Btn = document.getElementById("scroll-page-2-to-3");
const screen3 = document.getElementById("screen3");

scrollPage2To3Btn.addEventListener("click", () => {
  const targetY = screen3.offsetTop;

  anime({
    targets: [document.documentElement, document.body],
    scrollTop: targetY,
    duration: 1000,
    easing: "easeInOutQuad",
  });
});

const scrollPage3To4Btn = document.getElementById("scroll-page-3-to-4");
const screen4 = document.getElementById("screen4");

scrollPage3To4Btn.addEventListener("click", () => {
  const targetY = screen4.offsetTop;

  anime({
    targets: [document.documentElement, document.body],
    scrollTop: targetY,
    duration: 1000,
    easing: "easeInOutQuad",
  });
});

const scrollPage4To5Btn = document.getElementById("scroll-page-4-to-5");

scrollPage4To5Btn.addEventListener("click", () => {
  const targetY = screen5.offsetTop;

  anime({
    targets: [document.documentElement, document.body],
    scrollTop: targetY,
    duration: 1000,
    easing: "easeInOutQuad",
  });
});
