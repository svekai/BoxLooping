import "./styles.css";
import { getBox } from "./box.js";

var box =
  '<div style="border: solid 3px black; background-color:' +
  getBox("blue").color +
  '; height:25px; width:25px;">' +
  "</div>";

document.getElementById("app").innerHTML = box + box;
