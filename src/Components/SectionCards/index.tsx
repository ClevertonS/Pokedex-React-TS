import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "../Card";
import { CardsSection } from "./styles";
import { IPokemons } from "../../Interface/IPokemons";
import { IPaginacaoPokemons } from "../../Interface/IPaginacaoPokemons";
import { PageButton } from "../PageButton";

interface IDevice {
	device: string
}

export function SectionCards(props: IDevice) {
	const [nextPage, setNextPage] = useState("");
	const [previousPage, setPreviousPage] = useState<string>("null");
	const [listPokemon, setListPokemon] = useState<IPokemons[]>([]);


	useEffect(() => {
		axios.get<IPaginacaoPokemons<IPokemons>>(props.device)
			.then((resposta) => {
				setListPokemon(resposta.data.results);
				setNextPage(resposta.data.next);
				setPreviousPage(resposta.data.previous);
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
