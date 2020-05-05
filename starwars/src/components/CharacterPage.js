import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterPage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then((response) => {
        console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="character-container">
      {characters.map((character) => {
        return (
          <CharacterCard
            id={character.id}
            name={character.name}
            image={character.image}
            species={character.species}
          />
        );
      })}
      <div></div>
    </div>
  );
}
