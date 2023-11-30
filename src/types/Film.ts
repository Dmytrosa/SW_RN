
export interface Film {
  id: string
  title: string;
  openingCrawl: string;
  releaseDate: string,
  speciesConnection: {
    totalCount: number
  },
  vehicleConnection: {
    totalCount: number
  },
  planetConnection: {
    totalCount: number
  },
  characterConnection: {
    characters: {
      id: string,
      name: string,
      birthYear: string,
      height: number,
      mass: number,
      homeworld :{
          name: string
      }
  },
  planetConnection: {
    totalCount: number
}
}
}
