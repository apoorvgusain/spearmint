document.addEventListener("DOMContentLoaded", function() {
  var logo = document.getElementById("logo");

  document.addEventListener("click", function(e) {
    var newX = e.clientX - logo.offsetWidth / 2;
    var newY = e.clientY - logo.offsetHeight / 2;

    logo.style.left = newX + "px";
    logo.style.top = newY + "px";
  });
});