var plate1 = document.getElementById("plate1");
var plate2 = document.getElementById("plate2");
var plate3 = document.getElementById("plate3");

function animatePlates() {
  plate1.style.left = "200px";
  plate1.style.top = "250px";

  plate2.style.left = "500px";
  plate2.style.top = "200px";

  plate3.style.left = "700px";
  plate3.style.top = "350px";
}

setInterval(animatePlates, 2000);
