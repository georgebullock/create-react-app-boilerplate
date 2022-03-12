import React from "react";
import { StyledContainer } from "./Container.styles";

export type IContainerProps = {
  children: React.ReactNode | React.ReactNode[];
};

const Container = ({ children }: IContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
