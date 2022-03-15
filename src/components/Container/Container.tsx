import { ReactNode } from "react";
import { StyledContainer } from "./Container.styles";

export type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
