import { Link } from "react-router-dom";
import Container from "./../../components/Container/Container";

export function Home() {
  return (
    <Container>
      <Link to="/about">About Page</Link>
    </Container>
  );
}
