export function getBox(color) {
  return { color: color };
}

export function renderLoaded(boxes) {
  document.getElementById("app").innerHTML =
    '<div style = "display:flex">' +
    getHTMLForBox(boxes[0]) +
    getHTMLForBox(boxes[1]) +
    "</div>";
}

export function getHTMLForBoxes(boxes) {
  var string = "";
  boxes.forEach((box) => {
    string += getHTMLForBox(box);
  });
  return string;
}

export function getHTMLForBox(box) {
  return (
    '<div style="border: solid 3px black;background-color:' +
    box.color +
    '; height:25px; width:25px;">' +
    "</div>"
  );
}
