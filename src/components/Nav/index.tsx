import { Header, ButtonNavbar, StyledMenuIcon, Container } from "./style";
import { DocumentContainer } from "./DocumentContainer";
import { ButtonsContainer } from "./ButtonsContainer";

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
        <StyledMenuIcon>
          { !on ? (
            <g fill="#FFF" fill-rule="evenodd">
              <path d="M0 0h30v2H0zM0 8h30v2H0zM0 16h30v2H0z"/>
            </g>
          ) : (
            <g fill="#FFF" fill-rule="evenodd">
              <path d="M2.1.686 23.315 21.9l-1.415 1.415L.686 2.1z"/>
              <path d="M.686 21.9 21.9.685l1.415 1.415L2.1 23.314z"/>
            </g>
          )}
        </StyledMenuIcon>
      </ButtonNavbar>

      <Container>
        {/* <DocumentContainer navOn={on} /> */}
        <ButtonsContainer />
      </Container>
    </Header>
  );
}