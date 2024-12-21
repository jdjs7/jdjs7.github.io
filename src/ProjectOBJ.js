class Project {
  ProjectContainer = document.createElement("div");
  ProjectHeader = document.createElement("div");
  ProjectBody = document.createElement("div");
  ProjectRightBody = document.createElement("div");
  ProjectImageContainer = document.createElement("div");
  ProjectImageHead = document.createElement("div");
  ProjectTextContainer = document.createElement("div");
  ProjectTextField = document.createElement("div");
  ProjectAboutContainer = document.createElement("div");
  ProjectAboutLink = document.createElement("div");
  ProjectLanguageContainer = document.createElement("div");
  ProjectImageHeadContainer = document.createElement("div");
  ProjectImageHeadArrowRight = document.createElement("div");
  ProjectImageHeadArrowLeft = document.createElement("div");
  ProjectImages = [];
  currentImage = 0;
  constructor(Name, Text, Image, More, Languages) {
    this.ProjectImages = Image;
    this.createElements();
    if (Image.length > 1) {
      this.createArrowButtons();
    }
    this.addClasses();
    this.addAdditionals(Languages);
    this.ImageSelect(this.currentImage);
    this.addParameters(Name, Text, More);
  }
  createElements() {
    this.ProjectContainer.append(this.ProjectHeader);
    this.ProjectContainer.append(this.ProjectBody);
    this.ProjectRightBody.append(this.ProjectImageHeadContainer);
    this.ProjectRightBody.append(this.ProjectImageContainer);
    this.ProjectRightBody.append(this.ProjectAboutContainer);
    this.ProjectBody.append(this.ProjectTextContainer);
    this.ProjectBody.append(this.ProjectRightBody);
    this.ProjectImageHeadContainer.append(this.ProjectImageHeadArrowLeft);
    this.ProjectImageHeadContainer.append(this.ProjectImageHead);
    this.ProjectImageHeadContainer.append(this.ProjectImageHeadArrowRight);
    this.ProjectAboutContainer.append(this.ProjectAboutLink);
    this.ProjectAboutContainer.append(this.ProjectLanguageContainer);
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
    this.ProjectAboutContainer.classList.add("AboutContainer");
    this.ProjectRightBody.classList.add("ProjectRightSide");
    this.ProjectImageHead.classList.add("ImageHead");
    this.ProjectLanguageContainer.classList.add("LanguageContainer");
    this.ProjectImageHeadContainer.classList.add("ImageHeadContainer");
    this.ProjectImages.forEach((img) => {
      img.classList.add("ProjectImage");
    });
  }
  createArrowButtons() {
    this.ProjectImageHeadArrowRight.textContent = "→";
    this.ProjectImageHeadArrowLeft.textContent = "←";
    this.ProjectImageHeadArrowRight.classList.add("ArrowButton");
    this.ProjectImageHeadArrowLeft.classList.add("ArrowButton");
    this.ProjectImageHeadArrowRight.style.marginLeft = "10px";
    this.ProjectImageHeadArrowLeft.style.marginRight = "10px";

    // Use an arrow function to preserve 'this'
    this.ProjectImageHeadArrowLeft.addEventListener(
      "click",
      this.changeCurrentImage.bind(this, -1)
    );
    this.ProjectImageHeadArrowRight.addEventListener(
      "click",
      this.changeCurrentImage.bind(this, 1)
    );
  }

  addAdditionals(Languages) {
    this.ProjectAboutLink.textContent = "More to this Project >> Logo";
    Languages.forEach((img) => {
      img.classList.add("ProjectImage");
      var ProjectLanguage = document.createElement("div");
      ProjectLanguage.classList.add("ProjectLanguage");
      ProjectLanguage.append(img);
      this.ProjectLanguageContainer.append(ProjectLanguage);
    });
  }
  ImageSelect(index) {
    this.ProjectImageHead.textContent = ParsePathToFileName(
      this.ProjectImages[index].src
    );
    while (this.ProjectImageContainer.firstChild) {
      this.ProjectImageContainer.removeChild(
        this.ProjectImageContainer.firstChild
      );
    }
    this.ProjectImageContainer.append(this.ProjectImages[index]);
  }
  addParameters(Name, Text, More) {
    this.ProjectHeader.textContent = Name;
    this.ProjectTextField.textContent = Text;
  }
  changeCurrentImage(amount) {
    if (this.currentImage + amount === -1) {
      this.currentImage = this.ProjectImages.length - 1;
    } else if (this.currentImage + amount === this.ProjectImages.length) {
      this.currentImage = 0;
    } else {
      this.currentImage += amount;
    }
    this.ImageSelect(this.currentImage);
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
