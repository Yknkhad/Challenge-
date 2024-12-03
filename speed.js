function detectSpeed () {
  const speed = prompt("speed of the vehical")
  const limit = 70;
  const kmPerPoint = 5;

  if (speed <= limit) {
  alert("Ok");
  } else {
  const points = Math.floor((speed - limit) / kmPerPoint);
  if (points > 12) {
  alert("suspend license");
  } else {
  alert(`Points: ${points}`);
  }
  }
  
}
 detectSpeed();