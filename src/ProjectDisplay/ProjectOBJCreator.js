var Projects = [[], [], [], [], [], [], []];

function createProjectElements() {
  //blender
  new ProjectContent(
    [
      [
        createimg("images/Cartoon_Turtel.gif"),
        createimg("images/Grass_Shading.png"),
        createimg("images/Fishskeleton_Animation.png"),
        createimg("images/Viewport_Display.png"),
      ],
    ],
    [[createimg("images/blender.png")]],
    ["Cartoon Turtle"],
    [
      "Lororem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.em ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    [null],
    [0]
  );
  //Java
  new ProjectContent(
    [
      [createimg("images/CalenderApp.png")],
      [createimg("images/Konsole_Vorschau.png")],
    ],
    [
      [createimg("images/Java.png"), createimg("images/SQLite.png")],
      [createimg("images/Java.png"), createimg("images/SQLite.png")],
    ],
    ["Java Kalender App", "Java Konsole Kalender"],
    [
      "Lororem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.em ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Lororem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.em ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    [null],
    [2, 5]
  );
}

class ProjectContent {
  constructor(Images, Languages, Names, Texts, More, index) {
    for (let i = 0; i < Images.length; i++) {
      var element = new Project(
        Names[i],
        Texts[i],
        Images[i],
        More[i],
        Languages[i]
      );
      for (let i = 0; i < index.length; i++) {
        Projects[index[i]].push(element.getObject());
      }
    }
  }
}

function createimg(path) {
  var img = new Image();
  img.src = path;
  return img;
}
createProjectElements();
