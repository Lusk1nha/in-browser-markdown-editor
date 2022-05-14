import { Fragment } from "react";
import { Nav } from "./components/Nav";
import GlobalStyle from "./styles/globalStyles";

export default function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Nav />
    </Fragment>
  );
}