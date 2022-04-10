export const calculateAverageTime = (seconds: Array<number>) => {
  if (seconds.length > 0) {
    const avgSec = Math.round(
      seconds.reduce((a: number, b: number) => a + b) / seconds.length
    );
    if (avgSec >= 60) {
      const avgMin = Math.floor(avgSec / 60);
      const avgSec2 = Math.round(avgSec % 60);
      return `${
        avgMin > 0 && avgSec2 === 0
          ? `${avgMin}:00`
          : avgMin > 0 && avgSec2 < 10 && avgSec2 > 0
          ? `${avgMin}:0${avgSec2}`
          : `${avgMin}:${avgSec2}`
      }`;
    } else {
      return `${
        Math.round(avgSec) < 10
          ? `0:0${Math.round(avgSec)}`
          : `0:${Math.round(avgSec)}`
      }`;
    }
  } else {
    const avgSec = seconds[0];
    if (avgSec >= 60) {
      const avgMin = Math.floor(avgSec / 60);
      const avgSec2 = avgSec % 60;
      return `${
        avgMin > 0 && avgSec2 === 0
          ? `${avgMin}:00`
          : avgMin > 0 && avgSec2 < 10 && avgSec2 > 0
          ? `${avgMin}:0${avgSec2}`
          : `${avgMin}:${avgSec2}`
      }`;
    } else {
      return `${
        Math.round(avgSec) < 10
          ? `0:0${Math.round(avgSec)}`
          : `0:${Math.round(avgSec)}`
      }`;
    }
  }
};
