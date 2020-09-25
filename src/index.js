import { getBox, renderRow, renderMatrix } from "./box.js";

var boxObject1 = getBox("blue");
var boxObject2 = getBox("purple");
makeBoxInVisible(boxObject2);
var boxes = [];

boxes.push(boxObject1);
boxes.push(boxObject2);
boxes.push(getBox("green"));

var boxes2D = [];
boxes2D.push(boxes);
boxes2D.push(boxes);

function changeColorOfBox(box, color) {
  box.color = color;
}

function boxIsOfColor(box, color) {
  return box.color === color;
}

function makeBoxVisible(box) {
  box.visible = true;
}

function makeBoxInVisible(box) {
  box.visible = false;
}

renderMatrix(boxes2D);
//renderRow(boxes);
//callMethodInOneSecond(myFunction);

function myFunction() {
  changeColorOfBox(boxes[0], "red");
  renderRow(boxes);
}

function callMethodInOneSecond(myAwesomeFunction) {
  window.setTimeout(myFunction(), 1000);
}
