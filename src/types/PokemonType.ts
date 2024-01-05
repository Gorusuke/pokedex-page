export interface ResponseProps {
  count: number;
  next: string;
  previous: unknown;
  results: PokemonsProps[];
}

export interface PokemonsProps {
  name: string;
  url: string;
}

export interface StatsProps {
  base_stat: number;
  effort: number;
  stat: simpleDetail;
}

export interface StatsPropsModified {
  stat: number;
  name: string;
}

export interface PokemonType {
  primaryElement: string;
  secondaryElement: string;
}

interface simpleDetail {
  name: string;
  url: string;
}

interface Abilities {
  ability: simpleDetail;
  is_hidden: boolean;
  slot: number;
}

interface Game_indeces {
  game_index: number;
  version: simpleDetail;
}

interface Version_group_details {
  level_learned_at: number;
  move_learn_method: simpleDetail;
  version_group: simpleDetail;
}

interface Moves {
  move: simpleDetail;
  version_group_details: Version_group_details[];
}

interface Sprites {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
  other: any;
  version: any;
}

interface Types {
  slot: number;
  type: simpleDetail;
}

export interface PokemonProps {
  abilities: Abilities[];
  base_experience: number;
  forms: simpleDetail[];
  game_indices: Game_indeces[];
  height: number;
  held_items: [] | any;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Moves[];
  name: string;
  order: number;
  past_types: [] | any;
  species: simpleDetail;
  sprites: Sprites;
  stats: StatsProps[];
  types: Types[];
  weight: number;
}
