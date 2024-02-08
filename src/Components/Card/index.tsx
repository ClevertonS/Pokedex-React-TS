import React, { useEffect, useState } from "react";
import axios from "axios";
import { IPokemons } from "../../Interface/IPokemons";
import { IPokemon } from "../../Interface/IPokemon";
import { ITypesPokemon } from "../../Interface/ITypesPokemon";
import {
	CardContainer,
	DescriptionContainer,
	PokemonImg,
	PokemonName,
	CardPText,
	CardH3Text,
	PokemonStatsSection,
	PokemonStatBox,
	SectionPokemonTypes,
} from "./style";
import { PokemonType } from "./PokemonType";
import { ColorsType } from "../../Interface/ITypesPokemon";

interface PokemonProps {
  pokemon: IPokemons;
}

export function Card({ pokemon }: PokemonProps) {
	const pokemonUrl = pokemon.url;

	const [pokemonStats, setPokemonStats] = useState<IPokemon<ITypesPokemon>>();
	const [pokemonTypeColor1, setPokemonTypeColor1] = useState<ColorsType>(
		"void"
	);
	const [pokemonTypeColor2, setPokemonTypeColor2] = useState<ColorsType>(
		"void"
	);

	useEffect(() => {
		axios
			.get<IPokemon<ITypesPokemon>>(pokemonUrl)
			.then((resposta) => {
				setPokemonStats(resposta.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [pokemonStats?.id]);

	useEffect(() => {
		pokemonStats?.types.map((data) => {
			data.slot === 1
				? setPokemonTypeColor1(data.type.name)
				: setPokemonTypeColor2(data.type.name);
		});
	}, [pokemonStats?.id]);

	function DividirPor10(x: number | undefined) {
		return (x || 0) / 10;
	}

	return (
		<>
			<CardContainer color1={pokemonTypeColor1} color2={pokemonTypeColor2}>
				<DescriptionContainer>
					<PokemonName color1={pokemonTypeColor1} color2={pokemonTypeColor2}>{pokemon?.name}</PokemonName>
					<CardPText>Nº {pokemonStats?.id} </CardPText>
					<PokemonStatsSection>
						<PokemonStatBox>
							<CardH3Text color1={pokemonTypeColor1} color2={pokemonTypeColor2}>Height</CardH3Text>
							<CardPText>{DividirPor10(pokemonStats?.height) + " m"}</CardPText>
						</PokemonStatBox>
						<PokemonStatBox>
							<CardH3Text color1={pokemonTypeColor1} color2={pokemonTypeColor2}>Weight</CardH3Text>
							<CardPText>
								{DividirPor10(pokemonStats?.weight) + " Kg"}
							</CardPText>
						</PokemonStatBox>
					</PokemonStatsSection>
					<PokemonStatBox>
						<CardH3Text color1={pokemonTypeColor1} color2={pokemonTypeColor2}>Type</CardH3Text>
						<SectionPokemonTypes>
							{pokemonStats?.types?.map((types) => (
								<PokemonType pokemonType={types} key={types.slot} />
							))}
						</SectionPokemonTypes>
					</PokemonStatBox>
				</DescriptionContainer>
				<PokemonImg
					src={pokemonStats?.sprites?.other["official-artwork"]?.front_default}
				/>
			</CardContainer>
		</>
	);
}
