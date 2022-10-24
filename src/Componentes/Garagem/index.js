import { useState } from "react";
import { Carro } from "../Carro";
import { Botao, Estacionamento, GaragemContainer } from "./styles";

const initialState = {
  modelo: "Corsa",
  cor: "azul",
  ano: 2022,
  flex: true,
  adicionadoPor: "Charmander",
};

const carro2 = {
  modelo:"Uno",
  cor: "vermelho",
  ano:2021,
  flex:false,
  adicionadoPor:"pikachu"
}




export function Garagem({ nome, setNome }) {
  const [automovel, setAutomovel] = useState(initialState);

  const handleSetNome = () => {
    setNome('Barbosa');
  };
  const handleSetAutomovel = () => {
    setAutomovel(carro2);
  };

  return (
    <GaragemContainer>
      <h1>Garagem da {nome}</h1>
      <Botao onClick={handleSetNome}>Muda nome 1</Botao>
      <Botao onClick={handleSetAutomovel}>Mude nome 2</Botao>
      

      <Estacionamento>
        <Carro
          automovel={automovel}
          // modelo="Corsa"
          // cor="branco"
          // ano={2020}
          // adicionadoPor="Labenu"
          // flex
        />
      </Estacionamento>
    </GaragemContainer>
  );
}
