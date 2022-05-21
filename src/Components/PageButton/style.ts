import styled from "styled-components";
import { colors } from "../../Styles/colors";



export const PaginationBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`;

export const PaginationButton = styled.button`
    align-items: center;
    background-color: ${colors.surfaceColor};
    border-color: ${colors.surfaceColor};
    border-radius: 15px;
    border-style: solid;
    border-width: 3px;
    display: flex;
    height: 50px;
    justify-content: center;
    margin: 1rem 1rem;
    width: 50px;
    cursor: pointer;

    :hover {
        transition: 250ms;
        background-color: inherit;
    }

    :disabled {
        background-color: ${colors.surfaceColor};
        opacity: 0.5;
        cursor: default;
    }
`;