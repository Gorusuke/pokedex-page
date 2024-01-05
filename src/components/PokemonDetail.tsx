import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { elementType, firstLetterUpperCase, getWeakness } from "../utils/utils";
import StatsChart from "./StatsChart";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { PokemonProps, StatsProps, StatsPropsModified } from "../types";
import { INDIVIDUAL_CALL } from "../utils/constants";

const PokemonDetail = () => {
  const { number } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [pokemonDetail, setPokemonsDetail] = useState<
    PokemonProps | undefined
  >();
  const [images, setImages] = useState<{
    frontImage: string;
    frontShiny: string;
  }>({ frontImage: "", frontShiny: "" });
  const [showImage, setShowImage] = useState<boolean>(true);
  const [pokemonStats, setPokemonsStats] = useState<StatsPropsModified[]>([]);
  const [pokemonTypes, setPokemonsTypes] = useState<any>();
  const [pokemonTypesWeakness, setPokemonsTypesWeakness] = useState<any>();

  const getStatsAndDetails = (pokemon: PokemonProps) => {
    const stats = pokemon?.stats?.reduce(
      (acc: StatsPropsModified[], cur: StatsProps) => {
        acc.push({ stat: cur.base_stat, name: cur.stat.name });
        return acc;
      },
      []
    );
    const frontImage =
      pokemon?.sprites?.other["official-artwork"].front_default;
    const frontShiny = pokemon?.sprites?.other["official-artwork"].front_shiny;

    setImages({ frontImage, frontShiny });
    setPokemonsStats(stats);
  };

  const getTypes = (pokemon: PokemonProps) => {
    const { types } = pokemon;
    let elements = [];
    if (types.length === 2) {
      const resulTypes = {
        primaryElement: types[0].type.name,
        secondaryElement: types[1].type.name,
      };
      elements.push(elementType(resulTypes.primaryElement));
      elements.push(elementType(resulTypes.secondaryElement));
      const weakness = getWeakness(resulTypes);
      setPokemonsTypesWeakness(weakness);
    } else {
      const resulTypes = {
        primaryElement: types[0].type.name,
        secondaryElement: "",
      };
      elements.push(elementType(resulTypes.primaryElement));
      const weakness = getWeakness(resulTypes);
      setPokemonsTypesWeakness(weakness);
    }
    setPokemonsTypes(elements);
  };

  const getPokemonDetail = async (path: string) => {
    const res = await axios.get(INDIVIDUAL_CALL(path));
    const { data } = res;
    getPokemonInfo(data);
  };

  const getPokemonInfo = (pokemon: PokemonProps) => {
    setPokemonsDetail(pokemon);
    getStatsAndDetails(pokemon);
    getTypes(pokemon);
  };

  useEffect(() => {
    console.log(number)
    getPokemonDetail(number!);
  }, []);
  return (
    <>
      {pokemonDetail?.name && (
        <section className="detail-container">
          <h1>{firstLetterUpperCase(pokemonDetail?.name)}</h1>
          <section className="detail-container detail-inner">
            <img src={showImage ? images.frontImage : images.frontShiny} className="pokemon-image" />
            {pokemonStats?.length > 0 && (
              <StatsChart pokemonStats={pokemonStats} />
            )}
          </section>
          <section>
            <div className="type">
              <label>Type</label>

              {pokemonTypes.map((pokemonType: string) => (
                <img src={pokemonType} width={30} alt={pokemonType} />
              ))}
            </div>

            <div className="type">
              <label>Weakness</label>
              {pokemonTypesWeakness &&
                pokemonTypesWeakness?.map((pokemonWeakness: string) => (
                  <img src={pokemonWeakness} width={30} alt={pokemonWeakness} />
                ))}
            </div>
          </section>
          <Button
            variant="link"
            className="shiny-button"
            onClick={() => setShowImage(!showImage)}
          >
            <FontAwesomeIcon icon={faStar} />
          </Button>
          <Button variant="outline-info" onClick={() => navigate("/")}>
            {number ? "Back" : "Home"}
          </Button>
        </section>
      )}
    </>
  );
};

export default PokemonDetail;
