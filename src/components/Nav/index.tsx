import { Header, ButtonNavbar, Container } from "./style";
import { DocumentContainer } from "./DocumentContainer";
import { ButtonsContainer } from "./ButtonsContainer";
import { MenuIcon } from "../Icons/MenuIcon";
import { CloseIcon } from "../Icons/CloseIcon";

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
        {on ? <MenuIcon /> : <CloseIcon />}
      </ButtonNavbar>

      <Container>
        <DocumentContainer navOn={on} />
        {on && <ButtonsContainer />}
      </Container>
    </Header>
  );
}