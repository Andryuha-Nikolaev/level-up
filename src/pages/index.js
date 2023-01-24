function mycountre(countdownId, countdownSeconds, countdownLooping) {
  var countre = document.getElementById(countdownId);
  if (!countre) {
    return;
  }

  var target = new Date().getTime() + 1000 * countdownSeconds;
  var intervalId;

  function updatecountre() {
    var time = Math.floor((target - new Date().getTime()) / 1000);
    if (time < 0) {
      if (countdownLooping) {
        target += 1000 * countdownSeconds;
        time = Math.floor((target - new Date().getTime()) / 1000);
      } else {
        clearInterval(intervalId);
        time = 0;
      }
    }

    var seconds = '0' + (time % 60);
    time = (time - seconds) / 60;
    var minutes = '0' + (time % 60);
    time = (time - minutes) / 60;
    var hours = '0' + time;

    var str =
      hours.substring(hours.length - 2) +
      ':' +
      minutes.substring(minutes.length - 2) +
      ':' +
      seconds.substring(seconds.length - 2);
    countre.innerHTML = str;
  }

  intervalId = setInterval(updatecountre, 200);
}

mycountre('timer', 30 * 60, true);
