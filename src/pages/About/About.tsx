import React from "react";
import { Link } from "react-router-dom";
import { StyledContainer } from "./../../components/Container/Container.styles";

export function About() {
  return (
    <StyledContainer>
      <Link to="/about">About</Link>
    </StyledContainer>
  );
}
