class HSubInstance {
  constructor(Name) {
    this.Name = Name;
  }
}

class HInstance {
  constructor(Name) {
    this.Name = Name;
    this.SubInstance = [];
    this.init();
  }

  init() {
    this.element = document.createElement("div");
    this.element.addEventListener("mouseover", function (e) {
      MouseIn(e);
    });
    this.element.addEventListener("mouseleave", function (e) {
      MouseOut(e);
    });
    this.element.classList.add("HInstance");
    this.element.classList.add("Arrow");
    MakeArrow(this.element, this.Name);
    document.getElementById("headline").append(this.element);
  }

  newSub(name) {
    let e = new HSubInstance(name);
    this.SubInstance.push(e);
    return e;
  }

  get SubInstanceAmount() {
    return this.SubInstance.length;
  }
}

function MouseIn(element) {
  for (const child of element.target.children) {
    if (child.classList.contains("ArrowBody")) {
      child.style.backgroundColor = "#8b223e";
    } else {
      child.style.borderLeft = "35px solid #8b223e";
    }
  }
}

function MouseOut(element) {
  for (const child of element.target.children) {
    if (child.classList.contains("ArrowBody")) {
      child.style.backgroundColor = "#cb325b";
    } else {
      child.style.borderLeft = "35px solid #cb325b";
    }
  }
}

function MakeArrow(parent, Text) {
  var ArrowHead = document.createElement("div");
  var ArrowBody = document.createElement("div");
  var ArrowTailTop = document.createElement("div");
  var ArrowTailBot = document.createElement("div");
  ArrowBody.style.borderLeft;
  ArrowHead.classList.add("ArrowHead");
  ArrowBody.classList.add("ArrowBody");
  ArrowTailTop.classList.add("ArrowTailTop");
  ArrowTailBot.classList.add("ArrowTailBot");

  ArrowBody.textContent = Text;

  parent.classList.add("ArrowContainer");
  parent.append(ArrowHead);
  parent.append(ArrowBody);
  parent.append(ArrowTailTop);
  parent.append(ArrowTailBot);
}

let test1 = new HInstance("Home");
let test2 = new HInstance("Info");
let test3 = new HInstance("Projects");
let test4 = new HInstance("Contact");

test4.element.style.right = "30";
test3.element.style.right = "230px";
test2.element.style.right = "430px";
test1.element.style.right = "630px";

/*
let league = new HInstance();
league.newPlayer("Mark");
league.newPlayer("Roger");

console.log(league.SubInstanceAmount, "Players");
console.log(league.SubInstance);
*/
