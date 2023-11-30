import axios from "axios";
import { Planet } from "../types/Planet";
import { Person } from "../types/Person";
import { requestResult } from "../types/RequestResult";
// import { Specie } from "../types/Specie";
import { Film } from "../types/Film";

const BASE_URL = "https://swapi.dev/api";

const get = async <T>(path: string): Promise<T> => {
  const { data } = await axios.get<T>(path);
  return data;
};

export const getPeople = (page: number, query = "") => {
  return get<requestResult<Person>>(
    
    `${BASE_URL}/people?search=${query}&page=${page}`
  );
};

// export const getFullInfoPeople = async (people: Person[]) => {
//   const fullInfo = await Promise.all(
//     people.map(async (person) => {
//       const planet = await getPlanet(person.homeworld);
//       const species = await getSpeciesNames(person.species as string[]);
  
//       return {
//         ...person,
//         homeworld_full: planet,
//         species_names: species,
//       };
//     })
//   );

//   return fullInfo;
// }







export const getPlanet = (url: string) => {
  return get<Planet>(url);
};

// export const getSpecie = (url: string) => {
//   return get<Specie>(url);
// };

// export const getSpeciesNames = async (urls: string[]) => {
//   return Promise.all(
//     urls.map(async (url) => {
//       const specie = await getSpecie(url);

//       return specie.name;
//     })
//   );
// };







export const getFilm = async (url: string) => {
  return get<Film>(url);
};

export const getFilms = async (urls: string[]) => {
  const films = await Promise.all(
    urls.map((url) => getFilm(url))
  );

  return films.map(film => ({...film, name: film.title}));
};

export const getPerson = async (url: string) => {
  return get<Person>(url);
};

export const getPersons = async (ids: string[]) => {
  const people = await Promise.all(
    ids.map((id) => getPerson(id))
  );

  // const fullPeople = await getFullInfoPeople(people);

  // return fullPeople;
};

export const getPlanets = async (urls: string[]) => {
  const planets = await Promise.all(
    urls.map((url) => getPlanet(url))
  );

  return planets;
};

