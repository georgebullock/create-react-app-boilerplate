import { ReactNode } from "react";
import { Home } from "./../pages/Home/Home";
import { About } from "./../pages/About/About";

type Route = {
  path: string;
  key: string;
  component: ReactNode;
};

export const ROUTES: Route[] = [
  {
    path: "/",
    key: "ROOT",
    component: <Home />,
  },
  {
    path: "about",
    key: "ABOUT",
    component: <About />,
  },
];
