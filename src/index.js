import "./styles.css";

var boxJson = {
  color: "blue",
  visible: true
};
var box =
  '<div style="border: solid 3px black; background-color:' +
  boxJson.color +
  '; height:25px; width:25px;"></div>';

document.getElementById("app").innerHTML = box + box;
