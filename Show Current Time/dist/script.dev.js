"use strict";

function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23 hours

  var m = date.getMinutes(); // 0 - 59 minutes

  var s = date.getSeconds(); // 0 - 59 seconds

  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  var time = h + ":" + m + "(" + s + ")" + " " + session;
  document.getElementById("MyTime").innerText = time;
  document.getElementById("MyTime").textContent = time;
  setTimeout(showTime, 1000);
}

showTime();