function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function AnimateLoadup() {
  var NameDisplay = document.getElementById("NameText");
  let CorrectStr = "Hello I am Johannes";
  let CurrentStr = "";

  for (let i = 0; i < CorrectStr.length; i++) {
    for (var j = 0; j != CorrectStr.charCodeAt(i); j++) {
      if (AllowAnimation(j)) {
        let test = createEmptyString(CorrectStr.length - 1 - i);
        await sleep(1);
        NameDisplay.textContent = CurrentStr + String.fromCharCode(j) + test;
      }
    }
    CurrentStr += String.fromCharCode(j);
  }
  NameDisplay.textContent = CurrentStr;
}

function AllowAnimation(index) {
  let AnimateInterval = 5;
  return index % AnimateInterval == 0 && index > 37; //characters 0-37 are whitespaces and get skipped
}

function getLastChar(str) {
  return str.charAt(str.length - 1);
}

function changeLastChar(str, replacement) {
  let index = str.length;
  return (
    str.substring(0, index) +
    replacement +
    str.substring(index + replacement.length)
  );
}

function createEmptyString(length) {
  var emptystring = "";
  for (let i = 0; i < length; i++) {
    emptystring += "\xa0";
  }
  return emptystring;
}
AnimateLoadup();
