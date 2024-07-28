import { Timestamp } from "firebase/firestore";
import { constants } from "zlib";

const gsDayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export const getDate = (timeStamp: string) => {
  return new Date(timeStamp).toLocaleDateString("en-ca");
};

export const getWeekDay = () => {
  var d = new Date();
  var dayName = gsDayNames[d.getDay()];
  return dayName;
};
