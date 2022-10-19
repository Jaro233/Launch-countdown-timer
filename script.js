var countDownDate = new Date("Jan 5, 2023 05:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".days_number").innerHTML = days;
  document.querySelector(".hours_number").innerHTML = hours;
  document.querySelector(".minutes_number").innerHTML = minutes;
  document.querySelector(".seconds_number").innerHTML = seconds;   
  
  if(document.querySelector(".days_number").innerHTML < 10) {
    document.querySelector(".days_number").innerHTML = `0${days}`
  }
  
  if(document.querySelector(".hours_number").innerHTML < 10) {
    document.querySelector(".hours_number").innerHTML = `0${hours}`
  }

  if(document.querySelector(".minutes_number").innerHTML < 10) {
    document.querySelector(".minutes_number").innerHTML = `0${minutes}`
  }

  if(document.querySelector(".seconds_number").innerHTML < 10) {
    document.querySelector(".seconds_number").innerHTML = `0${days}`
  }
  
  const rotate = (id) => {
    document.getElementById(id).style.transform = "rotateX(90deg)";
  };
  
  const rotateDefault = (id) => {
    document.getElementById(id).style.transform = "rotateX(360deg)";
  };
  
  rotate("seconds_id");
  const delay = setTimeout(() => {
    rotateDefault("seconds_id");
  }, 200);

  //minutes
  if (seconds % 60 == 0) {
    rotate("minutes_id");
    const delay = setTimeout(() => {
      rotateDefault("minutes_id");
    }, 200);
    if (distance <= 0) {
      clearTimeout(delay);
    }
  }
  //hours
  if (seconds % (60 * 60) == 0) {
    rotate("hours_id");
    const delay = setTimeout(() => {
      rotateDefault("hours_id");
    }, 200);
    if (distance <= 0) {
      clearTimeout(delay);
    }
  }
  //days
  if (seconds % (60 * 60 * 24) == 0) {
    rotate("days_id");
    const delay = setTimeout(() => {
      rotateDefault("days_id");
    }, 200);
    if (distance <= 0) {
      clearTimeout(delay);
    }
  }

  seconds++;
  distance -= 1000;
  if (distance <= 0) {
    clearInterval(interval);
    clearTimeout(delay);
  }
}, 1000);