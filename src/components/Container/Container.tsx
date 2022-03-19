import { ReactNode } from "react";
import { ContentContainer } from "./Container.styles";

export type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <ContentContainer>{children}</ContentContainer>;
};

export default Container;
