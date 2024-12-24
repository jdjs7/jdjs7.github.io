const Arrows = document.getElementsByClassName("HInstance");
window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY || document.documentElement.scrollTop;
  if (200 < document.getElementById("1stHead").getBoundingClientRect().top) {
    changeArrowColor(Arrows[0], SecColo);
    changeArrowColor(Arrows[1], PrimColor);
    changeArrowColor(Arrows[2], PrimColor);
    changeArrowColor(Arrows[3], PrimColor);
  } else {
    if (200 < document.getElementById("2ndHead").getBoundingClientRect().top) {
      changeArrowColor(Arrows[0], PrimColor);
      changeArrowColor(Arrows[1], SecColo);
      changeArrowColor(Arrows[2], PrimColor);
      changeArrowColor(Arrows[3], PrimColor);
    } else if (
      850 < document.getElementById("3rdHead").getBoundingClientRect().top
    ) {
      this.document.getElementById("ProjectTypeSelector").style.position =
        "sticky";
      changeArrowColor(Arrows[0], PrimColor);
      changeArrowColor(Arrows[1], PrimColor);
      changeArrowColor(Arrows[2], SecColo);
      changeArrowColor(Arrows[3], PrimColor);
    } else {
      this.document.getElementById("ProjectTypeSelector").style.position =
        "static";

      changeArrowColor(Arrows[0], PrimColor);
      changeArrowColor(Arrows[1], PrimColor);
      changeArrowColor(Arrows[2], PrimColor);
      changeArrowColor(Arrows[3], SecColo);
    }
  }
});
