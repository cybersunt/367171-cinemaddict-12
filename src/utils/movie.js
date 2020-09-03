import {ONE_HOUR} from "../const";
import {getRandomInteger} from "./common";

export const getRandomElement = (array) => array[getRandomInteger(0, array.length - 1)];

export const getArrayRandomLength = (min, max, array) => array.slice(0, (getRandomInteger(min, max)) - array.length);

export const getBooleanValue = () => Boolean(getRandomInteger(0, 1));

export const getStringFromArray = (array, sign) => array.join(`${sign} `).toString();

export const getСapitalizedString = (str) => str.replace(/(^|\s)\S/g, (a) =>a.toUpperCase());

export const getPictureUrl = (dir, picture) => `./images/${dir}/${picture}`;

export const getRuntimeInHours = (runtime) => {
  const hours = Math.floor(runtime / ONE_HOUR);
  const minutes = runtime % ONE_HOUR;

  return `${hours}h ${minutes}m`;
};

export const getReleaseDate = (date) => {
  const year = date.getFullYear();
  const month = date.toLocaleString(`en-US`, {month: `long`});
  const day = date.getDay();

  return `${day} ${month} ${year}`;
};

export const getCommentDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();

  const time = date.toLocaleTimeString([], {hour: `2-digit`, minute: `2-digit`}).replace(`PM`, ``);

  return `${year}/${day}/${month} ${time}`;
};