export const calculateStars = (min: number, sec: number) => {
  if (min === 0 && sec <= 30) {
    return 5.0;
  } else if ((min === 0 && sec <= 59 && sec > 30) || (min === 1 && sec === 0)) {
    return 4.0;
  } else if (min === 1 && sec <= 30) {
    return 3.0;
  } else if ((min === 1 && sec <= 59 && sec > 30) || (min === 2 && sec === 0)) {
    return 2.0;
  } else {
    return 1.0;
  }
};
