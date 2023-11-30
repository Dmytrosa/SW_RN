import { ToastAndroid } from "react-native";
import { ErrorMessage } from "../types/ErrorMessage";
import { Person } from "../types/Person";

export const showToast = (message: ErrorMessage) => {
  ToastAndroid.showWithGravity(message, ToastAndroid.LONG, ToastAndroid.TOP);
};

export const formatDate = (date: string): string => {
  return date.split('-').reverse().join('.');
};


export const filterPeople = (people: Person[], query: string) => {
  return people.filter((person) =>
    person.name.toLowerCase().includes(query.toLowerCase())
  );
};

export const emptyFunction = () => {};
