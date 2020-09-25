import "./styles.css";

export function getBox(color) {
  return { color: color, visible: true };
}

export function renderRow(boxes) {
  document.getElementById("app").innerHTML = getTableWithOneRowHTML(boxes);
}

export function renderMatrix(boxes) {
  document.getElementById("app").innerHTML = getTableHTML(boxes);
}

function getTableWithOneRowHTML(boxes) {
  return '<table class="border table">' + getRowHTML(boxes) + "</table>";
}

function getTableHTML(boxes) {
  var string = '<table class="border table">';
  boxes.forEach(function (boxRow) {
    string += getRowHTML(boxRow);
  });
  string += "</table>";
  return string;
}

function getRowHTML(boxes) {
  return "<tr>" + getHTMLForBoxes(boxes) + "</tr>";
}

function getHTMLForBoxes(boxes) {
  var string = "";
  boxes.forEach((box) => {
    string += getHTMLForBox(box);
  });
  return string;
}

function getHTMLForBox(box) {
  var color = box.visible ? box.color : undefined;
  return '<td class="box border" style="background-color:' + color + '"</td>';
}
