import React, { useEffect, useState } from "react";
import axios from "axios";
import {
	CardContainer, 
	DescriptionContainer, 
	PokemonImg, 
	PokemonName, 
	CardPText, 
	CardH3Text, 
	PokemonStatsSection, 
	PokemonStatBox,
	PokemonTypeBox
} from "./style";

/* const baseUrl = "https://pokeapi.co/api/v2/pokemon/"; */

interface IPokemon {
	name: string;
	url: string;
}

export function Card() {

	/* useEffect(() => {
		axios.get(baseUrl)
			.then(resposta => console.log(resposta))
			.catch(error => console.log(error));
	}, []); */


	return (
		<>
			<CardContainer>
				<DescriptionContainer>
					<PokemonName>Charmander</PokemonName>
					<CardPText>Nº004 </CardPText>

					<PokemonStatsSection>
						<PokemonStatBox>
							<CardH3Text>Height</CardH3Text>
							<CardPText>0.6m</CardPText>
						</PokemonStatBox>
						<PokemonStatBox>
							<CardH3Text>Weight</CardH3Text>
							<CardPText>8.5kg</CardPText>
						</PokemonStatBox>
					</PokemonStatsSection>
					<PokemonStatBox>
						<CardH3Text>Type</CardH3Text>
						<PokemonTypeBox>Fire</PokemonTypeBox>
					</PokemonStatBox>
				</DescriptionContainer>
				<PokemonImg src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" />
			</CardContainer>
		</>
	);
}
