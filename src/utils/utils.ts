import { Theme } from "../types/types";
import { EventsFields } from "../types/types";
export const saveData = <T>(key: string, value: T) =>
  localStorage.setItem(key, JSON.stringify(value));

export const loadData = (key: string): keyof Theme => {
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  } else return "light";
};

export function sortEventsByCategory(events: EventsFields[]) {
  const categoryOrder = { upcoming: 1, ongoing: 2, completed: 3 };

  events.sort((a, b) => {
    const categoryA = categoryOrder[a.eventCategory];
    const categoryB = categoryOrder[b.eventCategory];

    return categoryA - categoryB;
  });

  return events;
}
