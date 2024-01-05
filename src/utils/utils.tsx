import {
  grass,
  poison,
  water,
  fairy,
  fighting,
  fire,
  flying,
  steel,
  bug,
  dark,
  dragon,
  electric,
  ghost,
  ground,
  ice,
  normal,
  psichic,
  rock,
} from "./images";

import { PokemonType } from "../types";

export const firstLetterUpperCase = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1);

export const getWeakness = (pokemonTypes: PokemonType) => {
  if (Object.keys(pokemonTypes).length === 1) {
    return getCaseOneElement(pokemonTypes.primaryElement);
  } else {
    const weaknessArrayPrimary = getCaseOneElement(pokemonTypes.primaryElement);
    const weaknessArraySecondary = getCaseOneElement(
      pokemonTypes.secondaryElement
    );
    const weaknessArray = weaknessArrayPrimary?.concat(
      weaknessArraySecondary || []
    );
    return weaknessArray;
  }
};

export const getCaseOneElement = (type: string) => {
  switch (type) {
    case "grass":
      return [fire, ice, poison, flying, bug];
    case "poison":
      return [ground, psichic];
    case "normal":
      return [fighting];
    case "water":
      return [electric, grass];
    case "fairy":
      return [poison, steel];
    case "fighting":
      return [flying, psichic, fairy];
    case "fire":
      return [water, ground, rock];
    case "flying":
      return [electric, ice, rock];
    case "steel":
      return [fire, fighting, ground];
    case "bug":
      return [fire, flying, rock];
    case "dark":
      return [fighting, bug, fairy];
    case "dragon":
      return [dragon, ice, fairy];
    case "electric":
      return [ground];
    case "ghost":
      return [ghost, dark];
    case "ground":
      return [water, grass, ice];
    case "ice":
      return [fire, fighting, rock, steel];
    case "psichic":
      return [bug, ghost, dark];
    case "rock":
      return [water, grass, fighting, ground, steel];
    default:
      break;
  }
};

export const elementType = (elementType: string) => {
  switch (elementType) {
    case "grass":
      return grass;
    case "poison":
      return poison;
    case "normal":
      return normal;
    case "water":
      return water;
    case "fairy":
      return fairy;
    case "fighting":
      return fighting;
    case "fire":
      return fire;
    case "flying":
      return flying;
    case "steel":
      return steel;
    case "bug":
      return bug;
    case "dark":
      return dark;
    case "dragon":
      return dragon;
    case "electric":
      return electric;
    case "ghost":
      return ghost;
    case "ground":
      return ground;
    case "ice":
      return ice;
    case "psichic":
      return psichic;
    case "rock":
      return rock;
    default:
      break;
  }
};
