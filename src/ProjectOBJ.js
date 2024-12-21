class Project {
  ProjectContainer = document.createElement("div");
  ProjectHeader = document.createElement("div");
  ProjectBody = document.createElement("div");
  ProjectRightBody = document.createElement("div");
  ProjectImageContainer = document.createElement("div");
  ProjectImageHead = document.createElement("div");
  ProjectTextContainer = document.createElement("div");
  ProjectTextField = document.createElement("div");
  ProjectAboutLink = document.createElement("div");

  constructor(Name, Text, Image, More) {
    this.createElements();
    this.addClasses();
    this.addAdditionals(Image);
    this.addParameters(Name, Text, Image, More);
  }
  createElements() {
    this.ProjectContainer.append(this.ProjectHeader);
    this.ProjectContainer.append(this.ProjectBody);
    this.ProjectRightBody.append(this.ProjectImageHead);
    this.ProjectRightBody.append(this.ProjectImageContainer);
    this.ProjectRightBody.append(this.ProjectAboutLink);
    this.ProjectBody.append(this.ProjectTextContainer);
    this.ProjectBody.append(this.ProjectRightBody);
    this.ProjectTextContainer.append(this.ProjectTextField);
  }
  addClasses() {
    this.ProjectContainer.classList.add("Project");
    this.ProjectHeader.classList.add("ProjectHeader");
    this.ProjectBody.classList.add("ProjectBody");
    this.ProjectImageContainer.classList.add("imageContainer");
    this.ProjectTextContainer.classList.add("TextContainer");
    this.ProjectTextField.classList.add("ProjectDescription");
    this.ProjectAboutLink.classList.add("AboutLink");
    this.ProjectRightBody.classList.add("ProjectRightSide");
    this.ProjectImageHead.classList.add("ImageHead");
  }
  addAdditionals(Image) {
    //2.
    this.ProjectImageHead.textContent = ParsePathToFileName(Image.src);
    this.ProjectAboutLink.textContent = "More to this Project >> Logo";
  }
  addParameters(Name, Text, Image, More) {
    Image.classList.add("ProjectImage");
    this.ProjectHeader.textContent = Name;
    this.ProjectImageContainer.append(Image);
    this.ProjectTextField.textContent = Text;
    //1.
  }
  getObject() {
    return this.ProjectContainer;
  }
}

function ParsePathToFileName(path) {
  var start = getindexOfChar("/", path);
  var end = getindexOfChar(".", path);
  return path.substring(start + 1, end);
}

function getindexOfChar(c, s) {
  for (var i = s.length - 1; i >= 0; i--) {
    if (s.at(i) == c) {
      return i;
    }
  }
}

//Todo
//1. add url link to git
//2. add img with git Logo
