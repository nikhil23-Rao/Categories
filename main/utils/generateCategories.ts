import { allCategories } from "../data/allCategories";
import { letters } from "../data/lettersArray";
import { shuffle } from "./shuffle";

export const generateCategories = () => {
  var date = new Date();
  var chckDates = [
    {
      dailyDate: `${
        date.getMonth() + 1
      }/${date.getDate()}/${date.getFullYear()}`,
      inputs: shuffle(allCategories).slice(0, 6),
      letter: shuffle(letters)[0],
    },
  ];
  for (let i = 0; i < 500; i++) {
    date.setDate(date.getDate() + 1);
    chckDates.push({
      dailyDate: `${
        date.getMonth() + 1
      }/${date.getDate()}/${date.getFullYear()}`,
      inputs: shuffle(allCategories).slice(0, 6),
      letter: shuffle(letters)[0],
    });
  }
  return chckDates;
};
