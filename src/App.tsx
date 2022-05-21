import React from "react";
import { SectionCards } from "./Components/SectionCards";
import {isMobile} from "react-device-detect";
import { Header } from "./Components/Header";

function App() {

	return (
		<>
			<Header />
			{isMobile 
				? 
				<SectionCards  device="https://pokeapi.co/api/v2/pokemon?offset=0&limit=1" /> 
				: 
				<SectionCards  device="https://pokeapi.co/api/v2/pokemon?offset=0&limit=9"/>}
			
		</>
	);
}

export default App;
