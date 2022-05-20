import { url } from "inspector";
import styled from "styled-components";
import createGlobalStyle from "styled-components"
import PokemonClassic from "../src/fonts/PokemonSolidNormal.ttf"

export const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Pokemon Classic';
  src: url(${PokemonClassic}) format('truetype'),
}
`;

export const H1 = styled.h1`
  font-family: "Inter", sans-serif;
  text-align: center;
  margin: 10px;
  /* font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  margin: 0;
  margin-bottom: 10px;
  text-align: center;
  color: ${({ theme }) => theme.headerText};
  transition: 0.2s ease-in-out; */
`;

export const H2 = styled.h2`
  font-family: "Inter", sans-serif;
  text-align: center;
  margin: 10px;
`

export const Paragraph = styled.p`
  font-family: "Inter", sans-serif;
  /* font-size: ${({ size }: { size: string }) => size}; */
  /* font-weight: 400;
  line-height: 160%;
  margin: 0;
  text-align: center;
  color: ${({ theme }) => theme.text};
  transition: 0.2s ease-in-out; */
`;
