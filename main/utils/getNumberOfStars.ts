export const getNumberOfStars = (stars: number) => {
  const starsInArray = [];
  for (let i = 0; i < stars; i++) {
    starsInArray.push("⭐");
  }
  return starsInArray.join("");
};
