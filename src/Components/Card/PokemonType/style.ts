import styled from "styled-components";
import { colors }  from "../../../Styles/colors";

type ColorsType = keyof typeof colors;

export interface IColorsType {
    color: ColorsType 
    color2?: ColorsType
    espaco?: number
}


export const PokemonTypeBox = styled.div<IColorsType>`
    background-color: ${props => colors[(props.color)]};
    width: 100px;
    margin: 0.5rem 1rem;
    padding: 4px 0;
    border-radius: 5px;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.25);
    text-align: center;
    color: ${colors.surfaceColor};
    ::first-letter{
        text-transform: capitalize;
    }
`;