import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import { firstLetterUpperCase } from "../utils/utils";
import { useNavigate } from "react-router-dom";
import { PokemonsProps, PokemonProps } from "../types";

const Pokemon = ({ pokemon }: { pokemon: PokemonsProps }) => {
  const [onePokemon, setOnePokemon] = useState<PokemonProps | undefined>();
  const { url } = pokemon;
  const navigate = useNavigate();
  const getPokemon = async (url: string) => {
    const res = await axios.get(url);
    const { data } = res;
    setOnePokemon(data);
  };

  useEffect(() => {
    try {
      getPokemon(url);
    } catch (error) {
      console.log(error);
    }
  }, [pokemon]);

  const goToDetail = (onePokemon: PokemonProps) => {
    navigate(`/pokemon-detail/${onePokemon.order}`, { state: onePokemon });
  };
  return (
    <>
      {onePokemon?.name && (
        <Button
          variant="outline-info"
          onClick={() => goToDetail(onePokemon)}
          className="button"
        >
          <Card style={{ width: "18rem" }} className="m-3 card wrapper">
            {/* // m4 big screen */}
            <Card.Img
              variant="top"
              src={onePokemon?.sprites?.other["official-artwork"].front_default}
              className="main-image"
            />

            <img
              src={onePokemon?.sprites?.other?.dream_world?.front_default}
              className="second-img"
            ></img>
            <Card.Title className="pokemon-name">
              {firstLetterUpperCase(onePokemon?.name)}
            </Card.Title>
          </Card>
        </Button>
      )}
    </>
  );
};

export default Pokemon;
