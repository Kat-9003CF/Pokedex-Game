import React from "react";
import styled from "styled-components";

export default function PokeballCard({text}:{text:string}) {
  
  return (
    <CardWrapperOuter>
        <CardWrapperInner><h2>{text}</h2>
    </CardWrapperInner></CardWrapperOuter>
  );
}

const CardWrapperOuter = styled.div`
display: flex;
height: 175px;
width: 175px;
background-color: ${({ theme }) => theme.colours.cardBg};
  border: 1px solid ${({ theme }) => theme.colours.borderGrey};
  border-radius: 40px;
  box-shadow: 7px 10px 12px -5px rgba(0, 0, 0, 0.56);
`;


const CardWrapperInner = styled.div`
  h2 {
    font-size: 150%;
    text-align: center;
  }
`;
