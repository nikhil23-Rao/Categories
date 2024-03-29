export const getLabelData = (
  timerIsActive: boolean,
  currSec: number,
  currMin: number,
  submitted: boolean
) => {
  if (submitted) {
    return "Submitted";
  } else if (timerIsActive === false && (currSec > 0 || currMin > 0)) {
    return "Continue";
  } else if (timerIsActive === true) {
    return "Pause";
  } else if (timerIsActive === false && currSec === 0 && currMin === 0) {
    return "Start";
  }
};
