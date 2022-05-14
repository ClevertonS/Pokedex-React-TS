import React, { useEffect, useState } from "react";
import axios from "axios";
import { IPokemons } from "../../Interface/IPokemons";
import { IPokemon } from "../../Interface/IPokemon";
import { ITypesPokemon } from "../../Interface/ITypes";
import {CardContainer, DescriptionContainer, PokemonImg, PokemonName, CardPText, CardH3Text, PokemonStatsSection, PokemonStatBox, PokemonTypeBox,
} from "./style";

interface PokemonProps {
  pokemon: IPokemons;
}

export function Card({ pokemon }: PokemonProps) {
	const pokemonUrl = pokemon.url;
	
	const [pokemonStats, setPokemonStats] = useState<IPokemon<ITypesPokemon>>();

	useEffect(() => {
		axios
			.get<IPokemon<ITypesPokemon>>(pokemonUrl)
			.then((resposta) => {
				setPokemonStats(resposta.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	function DividirPor10(x: (number | undefined)){
		return (x/10);
	}
	function PokemonImage(id: number){
		return ("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+ id + ".png");
	}
	return (
		<>
			<CardContainer>
				<DescriptionContainer>
					<PokemonName>{pokemon.name}</PokemonName>
					<CardPText>Nº00{pokemonStats?.id} </CardPText>
					<PokemonStatsSection>
						<PokemonStatBox>
							<CardH3Text>Height</CardH3Text>
							<CardPText>{DividirPor10(pokemonStats?.height) + " m"}</CardPText>
						</PokemonStatBox>
						<PokemonStatBox>
							<CardH3Text>Weight</CardH3Text>
							<CardPText>{DividirPor10(pokemonStats?.weight) + " Kg"}</CardPText>
						</PokemonStatBox>
					</PokemonStatsSection>
					<PokemonStatBox>
						<CardH3Text>Type</CardH3Text>
						<PokemonTypeBox>Fire</PokemonTypeBox>
					</PokemonStatBox>
				</DescriptionContainer>
				<PokemonImg src={PokemonImage(pokemonStats?.id)} />
			</CardContainer>
		</>
	);
}
