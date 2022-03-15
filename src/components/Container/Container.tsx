import React from "react";
import { StyledContainer } from "./Container.styles";

export type ContainerProps = {
  children: React.ReactNode | React.ReactNode[];
};

const Container = ({ children }: ContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
