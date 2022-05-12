import React from "react";
import { CardContainer, DescriptionContainer, PokemonImg } from "./style";

export function Item() {
	return (
		<>
			<CardContainer>
				<DescriptionContainer></DescriptionContainer>
				<PokemonImg src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" />
			</CardContainer>
		</>
	);
}
