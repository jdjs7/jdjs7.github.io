const Type = {
  Blender: "Blender",
  html: "html",
  Java: "Java",
  CPP: "CPP",
  CSS: "CSS",
  SQL: "SQL",
  JS: "JS",
};
var Container = document.getElementById("ProjectsDisplay");
var SelectedType = null;

function showProjects(type) {
  if (SelectedType != type) {
    SelectedType = type;
    clearProjects();
    appendProjects();
  }
}

function clearProjects() {
  Container.childNodes.forEach((child) => {
    child.remove();
  });
}

function appendProjects() {
  var Names = [];
  var Texts = [];
  var Images = [];
  var More = [];
  var Languages = [];

  switch (SelectedType) {
    case Type.Blender:
      var image_one = new Image();
      image_one.src = "images/placeholder.png";
      Images[0] = image_one;
      Names[0] = "PlaceHolder Name";
      Texts[0] =
        "Lororem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.em ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
      More[0] = null;
      Languages[0] = "/images/blender.png";
      break;

    default:
      break;
  }
  CreateProjectObjects(Names, Texts, Images, More, Languages);
}

function CreateProjectObjects(Names, Texts, Images, More) {
  var size = Names.length;
  for (let i = 0; i < size; i++) {
    var element = new Project(Names[i], Texts[i], Images[i], More[i]);
    console.log(element);
    Container.append(element.getObject());
  }
}
