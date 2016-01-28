document.body.style.background = "orange";

var randomHex = function() {
  var hexThings = "ABCDEF0123456789";
  var hexReturn = "#";
  for(var i=0; i<6; i++) {
    hexReturn += hexThings.charAt(Math.floor(Math.random() * hexThings.length));
  }
  return hexReturn;
};

setInterval(function() {
  var time = new Date;
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();

  document.getElementById("hours").innerText = hours + ":";
  document.getElementById("minutes").innerText = minutes + ":";
  document.getElementById("seconds").innerText = seconds;

  var color = randomHex();
  document.body.style.background = color;
}, 1000);
