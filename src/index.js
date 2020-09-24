import "./styles.css";
import { getBox, renderLoaded } from "./box.js";

var boxObject1 = getBox("blue");
var boxObject2 = getBox("purple");
var boxes = [];

boxes.push(boxObject1);
boxes.push(boxObject2);

function makeBoxRed(box) {
  box.color = "red";
}

renderLoaded(boxes);

window.setTimeout(function () {
  makeBoxRed(boxes[0]);
  renderLoaded(boxes);
}, 2000);
