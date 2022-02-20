import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}
