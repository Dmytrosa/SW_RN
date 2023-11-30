import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_FILM, GET_FILMS, GET_PEOPLE_WITH_INFO, GET_PERSON } from "./gqls";

const client = new ApolloClient({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  cache: new InMemoryCache(),
});


export const getPeople = async () => {
  try {
    const { data } = await client.query({
      query: GET_PEOPLE_WITH_INFO,
    });
    return data;
  } catch (error) {
    console.error("Error fetching people with info:", error);
    throw error;
  }
};
export const getPerson = async (id: string) => {
  try {
    const { data } = await client.query({
      query: GET_PERSON(id)
    });
    return data.person;
  } catch (error) {
    console.error("Error fetching people with info:", error);
    throw error;
  }
};

export const getFilms = async () => {
  try {
    const { data } = await client.query({
      query: GET_FILMS,
    });
    return data;
  } catch (error) {
    console.error("Error fetching people with info:", error);
    throw error;
  }
};
export const getFilm = async (id: string) => {
  try {
    const { data } = await client.query({
      query: GET_FILM(id)
    });
    return data.film;
  } catch (error) {
    console.error("Error fetching people with info:", error);
    throw error;
  }
};
