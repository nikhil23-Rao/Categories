export const startTimer = () => {
  let hr: string | number = 0;
  let min: string | number = 0;
  let sec: string | number = 0;
  let stoptime = true;

  sec = sec + 1;

  if (sec == 60) {
    min = min + 1;
    sec = 0;
  }
  if (min == 60) {
    hr = hr + 1;
    min = 0;
    sec = 0;
  }

  if (sec < 10 || sec == 0) {
    sec = "0" + sec;
  }
  if (min < 10 || min == 0) {
    min = "0" + min;
  }
  if (hr < 10 || hr == 0) {
    hr = "0" + hr;
  }

  return `${hr}:${min}:${sec}`;
};
