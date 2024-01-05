import PokemonList from "./components/PokemonList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

const App = () => {
  return (
    <div className="App d-flex flex-column m-2 ">
      <h1 className="align-self-center">Hello Pokemon world</h1>
      <PokemonList />
    </div>
  );
};

export default App;
