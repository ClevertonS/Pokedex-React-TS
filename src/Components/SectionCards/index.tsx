import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "../Card";
import { ButtonPage, CardsSection } from "./styles";
import { IPokemons } from "../../Interface/IPokemons";
import { IPaginacaoPokemons } from "../../Interface/IPaginacaoPokemons";

export const baseUrl = "https://pokeapi.co/api/v2/";



export function SectionCards() {
	const [nextPage, setNextPage] = useState("");
	const [listPokemon, setListPokemon] = useState<IPokemons[]>([]);

	useEffect(() => {
		axios.get<IPaginacaoPokemons<IPokemons>>("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=9")
			.then((resposta) => {
				setListPokemon(resposta.data.results);
				setNextPage(resposta.data.next);
			}).catch((error) => {
				console.log(error);
			});}, []);

	function Next(){
		axios.get<IPaginacaoPokemons<IPokemons>>(nextPage).then((resposta) => {
			setListPokemon(resposta.data.results);
			setNextPage(resposta.data.next);
		}).catch((error) => {console.log(error);});
	}
 
	return (
		<>
			<CardsSection>
				{listPokemon?.map((item) => (
					<Card pokemon={item} key={item.url.split("/")[6]}/>
				))}
			</CardsSection>
			<ButtonPage onClick={Next} type="button" value={"Aperta aqui"}/>
		</>
	);
}
