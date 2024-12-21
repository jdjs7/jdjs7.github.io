const Arrows = document.getElementsByClassName("HInstance");
window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY || document.documentElement.scrollTop;
  if (200 < document.getElementById("1stHead").getBoundingClientRect().top) {
    changeArrowColor(Arrows[0], "#8b3efe");
    changeArrowColor(Arrows[1], "#cb325b");
    changeArrowColor(Arrows[2], "#cb325b");
    changeArrowColor(Arrows[3], "#cb325b");
  } else {
    if (200 < document.getElementById("2ndHead").getBoundingClientRect().top) {
      changeArrowColor(Arrows[0], "#cb325b");
      changeArrowColor(Arrows[1], "#8b3efe");
      changeArrowColor(Arrows[2], "#cb325b");
      changeArrowColor(Arrows[3], "#cb325b");
    } else if (
      200 < document.getElementById("3rdHead").getBoundingClientRect().top
    ) {
      this.document.getElementById("ProjectTypeSelector").style.position =
        "sticky";
      changeArrowColor(Arrows[0], "#cb325b");
      changeArrowColor(Arrows[1], "#cb325b");
      changeArrowColor(Arrows[2], "#8b3efe");
      changeArrowColor(Arrows[3], "#cb325b");
    } else {
      this.document.getElementById("ProjectTypeSelector").style.position =
        "static";

      changeArrowColor(Arrows[0], "#cb325b");
      changeArrowColor(Arrows[1], "#cb325b");
      changeArrowColor(Arrows[2], "#cb325b");
      changeArrowColor(Arrows[3], "#8b3efe");
    }
  }
});
