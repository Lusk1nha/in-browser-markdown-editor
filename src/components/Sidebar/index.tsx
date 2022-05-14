import { Fragment } from "react";
import { Container } from "./style";

interface SidebarProps {
  on: boolean;
}
export function Sidebar(props: SidebarProps) {
  return(
    <Fragment>
      {props.on && (
        <Container>

        </Container>
      )}
    </Fragment>
  );
}