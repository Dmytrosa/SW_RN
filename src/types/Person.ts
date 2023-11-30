import { Film } from "./Film";
import { Planet } from "./Planet";

export interface Person {
  name: string ;
  height: number;
  mass: number;
  birthYear: string;
  homeworld?: Planet;
  filmConnection?: {totalCount: number; films: Film[]} ;
  id: string;
}
