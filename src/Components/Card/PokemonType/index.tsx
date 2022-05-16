import React from "react";
import { ITypesPokemon } from "../../../Interface/ITypesPokemon";
import { PokemonTypeBox } from "./style";


interface IPokemonType {
    pokemonType: ITypesPokemon
}



export function PokemonType(props: IPokemonType){
	return (
		<PokemonTypeBox 
			color={props.pokemonType.type.name} 
		>
			{props.pokemonType.type.name}
		</PokemonTypeBox>);
}