import styled from "styled-components";
import { colors } from "../../Styles/colors";

export const HeaderSection = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around; 
    height: 64px;
    padding: 8px;
    background-color: ${colors.tertiaryColorFont};
    width: 100%;
    box-shadow: 5px 0 20px 4px rgba(0, 0, 0, 0.25);
    /* border-radius: 0 0 15px 15px; */


`;

export const PokedexTitle = styled.h1`
    font-size: 2.5rem;
    color: ${colors.surfaceColor}
`;

export const SearchBar = styled.div`
    display: flex; 
    width: 35%;
    max-width: 450px;
    background-color: ${colors.surfaceColor};
    height: 40px;
    border-radius: 25px;
    position: relative;

`;

export const SearchBarButton = styled.button`
    background-color: inherit;
    border: none;
    margin-left: 1rem; 
    padding: 8px 0;
    cursor: pointer;
`;

export const SearchBarTextarea = styled.input`
    background-color: ${colors.surfaceColor};
    border: none;
    outline: none;
    font-size: 1rem;
    width: calc(100% - 50px);
    height: 1rem;
    position: absolute;
    top: calc(50% - 0.5rem);
    margin-left: 8px;
`;

