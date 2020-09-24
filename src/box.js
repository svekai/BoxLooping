import "./styles.css";

export function getBox(color) {
  return { color: color };
}

export function renderLoaded(boxes) {
  document.getElementById("app").innerHTML =
    '<div class="box-wrapper">' +
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
  return '<div class="box" style="background-color:' + box.color + '"</div>';
}
