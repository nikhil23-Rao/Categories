export const calculateBestTime = (seconds: Array<number>) => {
  const minTime = Math.min(...seconds);
  if (minTime >= 60) {
    const min = Math.floor(minTime / 60);
    const sec = Math.round(minTime % 60);
    return `${
      min > 0 && sec === 0
        ? `${min}:00`
        : min > 0 && sec < 10 && sec > 0
        ? `${min}:0${sec}`
        : `${min}:${sec}`
    }`;
  } else {
    return `${
      Math.round(minTime) < 10
        ? `0:0${Math.round(minTime)}`
        : `0:${Math.round(minTime)}`
    }`;
  }
};
