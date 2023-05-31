import React from "react";
import styled from "styled-components";

function Orb() {
  const OrbStyled = styled.div`
    width: 70vh;
    height: 70vh;
    position: absolute;
    border-radius: 50%;
    margin-left: -37vh;
    margin-top: -37vh;
    background: linear-gradient(180deg, #f56692 0%, #f2994a 100%);
    filter: blur(100px);
  `;

  return <OrbStyled></OrbStyled>;
}

export default Orb;
