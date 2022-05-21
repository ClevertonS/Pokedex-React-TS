import { createSlice } from "@reduxjs/toolkit";
import { IPaginacaoPokemons } from "../Interface/IPaginacaoPokemons";
import { IPokemons } from "../Interface/IPokemons";

const initialState: IPaginacaoPokemons<IPokemons> = {
	count: 0,
	next: "",
	previous: "",
	results: [{
		name: "",
		url: "",
	}]

};

export const PaginaçãoPokemons = createSlice({
	name: "POKEMON_DATA",
	initialState,
	reducers: {
		ListPokemon(state, {payload}) {
			return{...state, results: payload};
		},
		NextPagePokemon(state, {payload}) {
			return{...state, next: payload};
		},
		PreviousPagePokemon(state, {payload}) {
			return{...state, previous: payload};
		}
	}
});


export const { ListPokemon, NextPagePokemon, PreviousPagePokemon } = PaginaçãoPokemons.actions;

export const getListPokemon = (state: { results: IPokemons[] }) => state.results;

export default PaginaçãoPokemons.reducer;