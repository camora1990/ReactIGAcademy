import React from "react";
import ReactDOM from "react-dom";

import "./Styles/Styles.css";
import Title from "./Imagenes/rick.png";

function Card(props) {
  const { items } = props;

  return (
    <div className="CharacterCard">
      <div className="CharacterCard__name-container text-truncate">
        Nombre: {items.name}
        <br></br> specie: {items.species}
        <br></br> Status: {items.status}
      </div>
      <div>
        <img src={items.image} ></img>
      </div>
    </div>
  );
}

class Practica extends React.Component {
  state = {
    loading: true,
    error: null,
    data: {
      info: {},
      results: []
    },
    nextPage: 1
  };

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    this.setState({ loading: true, error: null });

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=20`
      );
      const data = await response.json();
      this.setState({
        loading: false,
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results)
        },
        nextPage: this.state.nextPage + 1
      });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.error) {
      return "Error Al cargar la Api!";
    }

    return (
      <div className="container">
        <div className="Practica">
          <img className="Title" src={Title} />
          <ul className="row">
            {this.state.data.results.map(items => (
              <li className="col-6 col-md-4" key={items.name}>
                <Card items={items} />
              </li>
            ))}
          </ul>
          )}
        </div>
      </div>
    );
  }
}

export default Practica;
