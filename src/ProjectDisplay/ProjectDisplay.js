const Types = document.getElementsByClassName("ProjectType");
var Container = document.getElementById("ProjectsDisplay");
var SelectedType = null;
const Type = {
  Blender: "Blender",
  html: "html",
  Java: "Java",
  CPP: "CPP",
  CSS: "CSS",
  SQL: "SQL",
  JS: "JS",
};

function showProjects(type) {
  if (SelectedType != type) {
    SelectedType = type;
    window.scrollTo(0, 2000);
    clearProjects();
    appendProjects();
  }
}

function clearProjects() {
  while (Container.firstChild) {
    Container.removeChild(Container.firstChild);
  }
}

function appendProjects() {
  var elements = [];
  switch (SelectedType) {
    case Type.Blender:
      highlightType(2);
      elements = Projects[0];
      break;
    case Type.html:
      highlightType(4);
      elements = Projects[1];
      break;
    case Type.Java:
      highlightType(0);
      elements = Projects[2];
      break;
    case Type.CPP:
      highlightType(1);
      elements = Projects[3];
      break;
    case Type.CSS:
      highlightType(6);
      elements = Projects[4];
      break;
    case Type.SQL:
      highlightType(3);
      elements = Projects[5];
      break;
    case Type.JS:
      highlightType(5);
      elements = Projects[6];
      break;
    default:
      break;
  }
  appendProjectObjects(elements);
}

function appendProjectObjects(elements) {
  elements.forEach((element) => {
    Container.append(element);
  });
}

function highlightType(index) {
  for (let i = 0; i < Types.length; i++) {
    if (i == index) {
      var erm = document.getElementById("s");
      Types[i].style.backgroundColor = "rgb(56, 56, 56)";
    } else {
      Types[i].style.backgroundColor = "rgb(20, 20, 20)";
    }
  }
}
