import React from "react";
import styled from "styled-components";
import colors from "../../Styles/colors";

export const CardContainer = styled.div`
  align-items: center;
  background: linear-gradient(60.48deg, #ffc08d -3.49%, #b1c9fb 120.66%);
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  height: 28.125rem;
  margin: 20px auto;
  position: relative;
  width: 21.825rem;
`;

export const PokemonImg = styled.img`
  bottom: 13.75rem;
  height: 250px;
  width: 250px;
  position: absolute;
  background-color: inherit;
`;

export const DescriptionContainer = styled.div`
  background-color: ${colors.surfaceColor};
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 17.5rem;
  border-radius: inherit;
`;
