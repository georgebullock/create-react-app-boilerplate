import React from "react";
import { Link } from "react-router-dom";
import { StyledContainer } from "./../../components/Container/Container.styles";

export function Home() {
  return (
    <StyledContainer>
      <Link to="/about">About Page</Link>
    </StyledContainer>
  );
}
