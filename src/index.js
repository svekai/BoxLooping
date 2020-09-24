import "./styles.css";

var box =
  '<div style="border: solid 3px black; background-color:blue; height:25px; width:25px;"></div>';

window.setTimeout(function () {
  document.getElementById("app").innerHTML = box + box;
}, 1000);
