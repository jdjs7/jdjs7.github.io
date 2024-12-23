let isAnimationRunning = false;
const NameContainer = document.getElementById("NameContainer");
const TLBorder = document.getElementById("BorderTopLeft");
const BRBorder = document.getElementById("BorderBottomRight");

const keyframes = {
  resize: {
    L: [
      { width: "150px", height: "50px" },
      { width: "0px", height: "100px" },
      { width: "250px", height: "50px", bottom: "0", top: "auto" },
    ],
    R: [
      { width: "150px", height: "50px" },
      { width: "0px", height: "100px" },
      { width: "250px", height: "50px", bottom: "auto", top: "0" },
    ],
  },
  border: {
    L: [
      { borderTopColor: "white", borderBottomColor: "rgba(255, 255, 255, 0)" },
      { borderTopColor: "rgba(255, 255, 255, 0)", borderBottomColor: "white" },
      { borderTopColor: "white", borderBottomColor: "rgba(255, 255, 255, 0)" },
    ],
    R: [
      { borderTopColor: "rgba(255, 255, 255, 0)", borderBottomColor: "white" },
      { borderTopColor: "white", borderBottomColor: "rgba(255, 255, 255, 0)" },
      { borderTopColor: "rgba(255, 255, 255, 0)", borderBottomColor: "white" },
    ],
  },
};

const baseAnimationOptions = {
  duration: 1000,
  direction: "alternate",
  iterations: 2,
};

const animateElement = (element, side) => {
  const Borderoptions = { ...baseAnimationOptions, easing: "steps(2)" };
  const Sizeoptions = { ...baseAnimationOptions, easing: "ease-in-out" };
  element.animate(keyframes["border"][side], Borderoptions);
  element.animate(keyframes["resize"][side], Sizeoptions);
};

NameContainer.addEventListener("mouseover", () => {
  if (!isAnimationRunning) {
    isAnimationRunning = true;

    animateElement(TLBorder, "L");
    animateElement(BRBorder, "R");

    setTimeout(() => {
      isAnimationRunning = false;
    }, baseAnimationOptions.duration * baseAnimationOptions.iterations);
  }
});
