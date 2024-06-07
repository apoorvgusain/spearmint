document.addEventListener("DOMContentLoaded", function() {
  var logo = document.getElementById("logo");

  document.addEventListener("click", function(e) {
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(logo.offsetWidth);
    console.log(logo.offsetHeight);
    
    if (e.clientX > logo.offsetLeft + logo.offsetWidth / 2) {
          logo.style.transform = "scaleX(-1)";
        } else {
          logo.style.transform = "scaleX(1)";
        }
    
    var newX = e.clientX - logo.offsetWidth / 2;
    var newY = e.clientY - logo.offsetHeight / 2;

    logo.style.left = newX + "px";
    logo.style.top = newY + "px";
  });
});
