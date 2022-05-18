import React from "react";
import { SectionCards } from "./Components/SectionCards";
import {isMobile} from "react-device-detect";

function App() {
	return (
		<>
			{isMobile? <SectionCards device="https://pokeapi.co/api/v2/pokemon?offset=0&limit=1" /> : <SectionCards device="https://pokeapi.co/api/v2/pokemon?offset=0&limit=9"/>}
			
		</>
	);
}

export default App;
