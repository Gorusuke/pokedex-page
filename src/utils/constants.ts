export const API_CALL = "https://pokeapi.co/api/v2/pokemon?limit=649&offset=0";

export const INDIVIDUAL_CALL = (path: string) =>
  `https://pokeapi.co/api/v2/pokemon/${path}/`;
