import React from "react";
import axios from "axios";
import { PaginationBox, PaginationButton } from "./style";
import { CaretLeft, CaretRight } from "phosphor-react";
import { colors } from "../../Styles/colors";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import {
	ListPokemon,
	NextPagePokemon,
	PreviousPagePokemon,
} from "../../Store/userSlice";

export function PageButton() {
	const dispatch = useDispatch();
	const { next, previous } = useSelector((state: RootState) => state.Pokemons);

	async function NextPage() {
		await axios
			.get(next)
			.then((resposta) => {
				dispatch(ListPokemon(resposta.data.results));
				dispatch(NextPagePokemon(resposta.data.next));
				dispatch(PreviousPagePokemon(resposta.data.previous));
			})
			.catch((error) => {
				console.log(error);
			});
	}

	async function PreviousPage() {
		await axios
			.get(previous)
			.then((resposta) => {
				dispatch(ListPokemon(resposta.data.results));
				dispatch(NextPagePokemon(resposta.data.next));
				dispatch(PreviousPagePokemon(resposta.data.previous));
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<PaginationBox>
			<PaginationButton
				onClick={PreviousPage}
				disabled={previous === null ? true : false}
			>
				<CaretLeft fill="regular" size={32} color={colors.tertiaryColorFont} />
			</PaginationButton>
			<PaginationButton onClick={NextPage}>
				<CaretRight fill="regular" size={32} color={colors.tertiaryColorFont} />
			</PaginationButton>
		</PaginationBox>
	);
}
