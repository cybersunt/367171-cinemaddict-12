import {ONE_HOUR} from "./const";

export const getRandomFractionalNumber = (a = 1, b = 0) => {
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  return lower + Math.random() * (upper - lower);
};

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;

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
