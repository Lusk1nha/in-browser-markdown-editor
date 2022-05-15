import { Header, ButtonNavbar, Container } from "./style";
import { DocumentContainer } from "./DocumentContainer";
import { ButtonsContainer } from "./ButtonsContainer";
import { StyledMenuIcon } from "../Icons/MenuIcon";
import { StyledCloseIcon } from "../Icons/CloseIcon";

interface NavProps {
  on: boolean;
  setOn: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Nav(props: NavProps) {
  const {
    on,
    setOn
  } = props

  const handleButtonNav = () => setOn(!on)

  return (
    <Header>
      <ButtonNavbar onClick={handleButtonNav}>
        { !on ? <StyledMenuIcon /> : <StyledCloseIcon />}
      </ButtonNavbar>

      <Container>
        <DocumentContainer navOn={on} />
        <ButtonsContainer />
      </Container>
    </Header>
  );
}