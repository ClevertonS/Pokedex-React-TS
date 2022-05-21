import axios from "axios";
import React, { useEffect } from "react";
import { Card } from "../Card";
import { CardsSection } from "./styles";
import { IPokemons } from "../../Interface/IPokemons";
import { IPaginacaoPokemons } from "../../Interface/IPaginacaoPokemons";
import { PageButton } from "../PageButton";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ListPokemon, NextPagePokemon, PreviousPagePokemon } from "../../Store/userSlice";
import { RootState } from "../../Store/store";

interface IDevice {
	device: string
}

export function SectionCards(props: IDevice) {

	const dispatch = useDispatch();
	const { results } = useSelector((state: RootState) => state.Pokemons);

	useEffect(() => {
		axios.get<IPaginacaoPokemons<IPokemons>>(props.device)
			.then((resposta) => {
				dispatch(ListPokemon(resposta.data.results));
				dispatch(NextPagePokemon(resposta.data.next));
				dispatch(PreviousPagePokemon(resposta.data.previous));
			}).catch((error) => {
				console.log(error);
			});}, []);

	return (
		<>	
		
			<CardsSection>
				{results?.map((item) => (
					<Card pokemon={item} key={item.url.split("/")[6]}/>
				))}
			</CardsSection >
			<PageButton />
		</>
	);
}
