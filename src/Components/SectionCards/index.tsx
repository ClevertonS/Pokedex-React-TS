import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "../Card";
import { CardsSection } from "./styles";
import { IPokemons } from "../../Interface/IPokemons";
import { IPaginacaoPokemons } from "../../Interface/IPaginacaoPokemons";

export const baseUrl = "https://pokeapi.co/api/v2/";



export function SectionCards(props: IPokemons) {
	const [nextPage, setNextPage] = useState("");
	const [listPokemon, setListPokemon] = useState<IPokemons[]>([]);

	useEffect(() => {
		axios.get<IPaginacaoPokemons<IPokemons>>(baseUrl + "pokemon/?offset=0&limit=9")
			.then((resposta) => {
				setListPokemon(resposta.data.results);
			}).catch((error) => {
				console.log(error);
			});}, []);
	return (
		<CardsSection>
			{listPokemon?.map((item, index) => (
				<Card key={index}/>
			))}
		</CardsSection>
	);
}
