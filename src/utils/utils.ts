import { Theme } from "../types/types";

export const saveData = <T>(key: string, value: T) =>
  localStorage.setItem(key, JSON.stringify(value));

export const loadData = (key: string): keyof Theme => {
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  } else return "light";
};
