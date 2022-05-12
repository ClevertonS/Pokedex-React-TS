
import styled from "styled-components";
import colors from "../../Styles/colors";


const FontStyleCard = styled.p`
  background-color: inherit;
  background: -webkit-linear-gradient(60.48deg, #ffc08d -3.49%, #b1c9fb 120.66%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(255,255,255,0.5);
  -webkit-background-clip: text;
     -moz-background-clip: text;
          background-clip: text;
`;

const SubFontStyleCard = styled.p`
  background-color: inherit;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.25);
  -webkit-background-clip: text;
     -moz-background-clip: text;
          background-clip: text;
  color: ${colors.secundaryColorFont};
  font-size: 1rem;
  font-weight: 400;
`;

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
  background-color: inherit;
  bottom: 13.75rem;
  height: 250px;
  position: absolute;
  width: 250px;
`;

export const DescriptionContainer = styled.div`
  align-items: center;
  background-color: ${colors.surfaceColor};
  border-radius: inherit;
  bottom: 0;
  box-shadow: 0px -4px 25px 2px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  height: 17.5rem;
  position: absolute;
  width: 100%;
`;

//Estilos das Fontes.
export const PokemonName = styled(FontStyleCard).attrs({as: "h2"})`
  font-size: 3rem;
  font-weight: 800;
  line-height: 50px;
  margin-top: 2.25rem;
`;

export const CardH3Text = styled(FontStyleCard).attrs({as: "h3"})`
  font-size: 1.25rem;
  font-weight: 500;
`;

export const CardPText = styled(SubFontStyleCard)`
  margin-top: 0;
`;

//Secção de Weight e Height
export const PokemonStatsSection = styled.div`
  margin-top: 0.5rem;
  background-color: inherit;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 70px;
`;

export const PokemonStatBox = styled.div`
  background-color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PokemonTypeBox = styled.div`
  background-color: ${colors.fire};
  width: 100px;
  margin-top: 0.5rem;
  padding: 4px 0;
  border-radius: 5px;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.25);
  text-align: center;
  color: ${colors.surfaceColor};
`;

