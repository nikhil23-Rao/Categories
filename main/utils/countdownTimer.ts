export const startTimer = (duration: any, display: any) => {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt((timer / 60) as any, 10);
    seconds = parseInt((timer % 60) as any, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
};

window.onload = function () {
  var thirtySeconds = 60 * 0.5,
    display = document.querySelector("#time");
  startTimer(thirtySeconds, display);
};
