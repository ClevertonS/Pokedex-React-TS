import React, { useState } from "react";
import { HeaderSection, PokedexTitle, SearchBar, SearchBarButton, SearchBarTextarea } from "./style";
import { MagnifyingGlass } from "phosphor-react";
import { colors } from "../../Styles/colors";
import { useDispatch } from "react-redux";


const baseUrlSearchPokemon = "https://pokeapi.co/api/v2/pokemon/";


export function Header() {

	const [onChangedTextarea, setOnChangedTextarea] = useState("");

	const dispatch = useDispatch();

	

	return (
		<HeaderSection>
			<PokedexTitle>Pokedex</PokedexTitle>
		</HeaderSection>
	);
}
