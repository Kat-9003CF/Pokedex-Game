import React from "react";
import styled from "styled-components";

const ContainerOuter = styled.div`
width: 100vw;
height: 100vh;
background-color: ${({ theme }) => theme.colours.background};
display: flex;
justify-content: center;
text-align: center;
`

const ContainerInner = styled.div`
width: 100%;
max-width: 1195px;

`


export default function Container({ children }) {
  return (
    <ContainerOuter>
      <ContainerInner>{children}</ContainerInner>
    </ContainerOuter>
  );
}
