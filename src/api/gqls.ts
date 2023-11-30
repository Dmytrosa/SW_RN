import { ApolloClient, InMemoryCache, gql } from "@apollo/client";



export const GET_PEOPLE_WITH_INFO = gql`
  query AllPeople {
    allPeople {
        totalCount
        people {
            name
            height
            mass
            birthYear
            homeworld {
                name
                id
            }
            species {
                name
            }
            starshipConnection {
                totalCount
            }
            vehicleConnection {
                totalCount
            }
            filmConnection {
                totalCount
                films {
                    title
                    episodeID
                    openingCrawl
                    releaseDate
                    id
                }
            }
            id
        }
    }
}`
export const GET_PERSON =(id: string)=> {return( gql`
  query Person {
    person(id: "${id}") {
      name
      birthYear
      height
      mass
      id
      homeworld {
          name
      }
      filmConnection {
          films {
              title
              id
          }
          totalCount
      }
  }
}
`)}

export const GET_FILMS = gql` 
query AllFilms {
  allFilms {
      films {
          title
          openingCrawl
          releaseDate
          id
          speciesConnection {
              totalCount
          }
          vehicleConnection {
              totalCount
          }
          planetConnection {
              totalCount
          }
          characterConnection {
            characters {
                name
                id
            }
        }
      }
  }
}`
export const GET_FILM = (id:string)=> {return (gql` 
query Film {
  film(id: "${id}") {
      title
      openingCrawl
      releaseDate
      created
      edited
      id
      speciesConnection {
          totalCount
      }
      vehicleConnection {
          totalCount
      }
      characterConnection {
          totalCount
          characters {
            id
            name
            birthYear
            height
            mass
            homeworld {
                name
            }
        }
      }
      planetConnection {
        totalCount
    }
  }
}`)}