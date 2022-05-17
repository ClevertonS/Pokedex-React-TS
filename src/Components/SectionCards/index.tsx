import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "../Card";
import { CardsSection } from "./styles";
import { IPokemons } from "../../Interface/IPokemons";
import { IPaginacaoPokemons } from "../../Interface/IPaginacaoPokemons";
import { PageButton } from "../PageButton";

export const baseUrl = "https://pokeapi.co/api/v2/";



export function SectionCards() {
	const [nextPage, setNextPage] = useState("");
	const [previousPage, setPreviousPage] = useState<string>("null");
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
			setPreviousPage(resposta.data.previous);
		}).catch((error) => {console.log(error);});
	}


	function Previous(){
		axios.get<IPaginacaoPokemons<IPokemons>>(previousPage).then((resposta) => {
			setListPokemon(resposta.data.results);
			setNextPage(resposta.data.next);
			setPreviousPage(resposta.data.previous);
		}).catch((error) => {console.log(error);});
		return previousPage;
	}

 
	return (
		<>
			<CardsSection>
				{listPokemon?.map((item) => (
					<Card pokemon={item} key={item.url.split("/")[6]}/>
				))}
			</CardsSection >
			<PageButton nextPage={Next} previousPage={previousPage} changeToPreviousPage={Previous}/>
		</>
	);
}
