import axios from "axios";
import { allCategories } from "../data/allCategories";
import { letters } from "../data/lettersArray";
import { shuffle } from "./shuffle";

export const generateCategories = async () => {
  var date = new Date();

  var chckDates = [
    {
      dailyDate: `${
        date.getMonth() + 1
      }/${date.getDate()}/${date.getFullYear()}`,
      inputs: shuffle(allCategories).slice(0, 6),
      letter: shuffle(letters)[0],
      possibleAnswers: [],
    },
  ];

  for (let i = 0; i < 5; i++) {
    date.setDate(date.getDate() + 1);
    chckDates.push({
      dailyDate: `${
        date.getMonth() + 1
      }/${date.getDate()}/${date.getFullYear()}`,
      inputs: shuffle(allCategories).slice(0, 6),
      letter: shuffle(letters)[0],
      possibleAnswers: [],
    });

    for (let inputidx = 0; inputidx < 6; inputidx++) {
      const { data } = await axios.get(
        `http://localhost:3001?query="${chckDates[i].inputs[inputidx].replace(
          /\s+/g,
          "-"
        )}-with-${chckDates[i].letter}"`
      );
      setTimeout(() => {
        chckDates[i].possibleAnswers.push({
          idx: inputidx,
          values: data,
        } as never);
        if (data) {
          console.log(chckDates);
        }
      }, 5000);
    }
  }
  console.log(chckDates);
};
