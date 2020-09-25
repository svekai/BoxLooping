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

renderRow(boxes);
callMethodForEveryBoxOneSecondApart(myFunction, boxes);
//renderRow(boxes);
//callMethodInOneSecond(myFunction);

function myFunction(box) {
  changeColorOfBox(box, "red");
}

function callMethodForEveryBoxOneSecondApart(myAwesomeFunction, boxes) {
  var timer = 1000;
  boxes.forEach((box) => {
    window.setTimeout(function () {
      myAwesomeFunction(box);
      renderRow(boxes);
    }, timer);
    timer += 1000;
  });
}
