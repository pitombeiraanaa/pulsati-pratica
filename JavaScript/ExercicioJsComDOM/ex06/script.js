function changeColor() {
    var select = document.getElementById("colorSelect");
    var div = document.getElementById("colorDiv");
    var color = select.value;
    div.style.backgroundColor = color;
  }