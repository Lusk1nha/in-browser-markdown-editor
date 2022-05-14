import styled from "styled-components";
import { Icon } from "../../../styles/Icon";

const Container = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 0 2rem 0 0.5rem;
`;

const ButtonDeleteDocument = styled.button.attrs(props => ({
  type: 'button'
}))`
  background-color: ${props => props.theme.colors.header};
  max-width: 50px;
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.3rem;
  border: 0;
  outline: 0;

  transition: background 250ms ease;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.nav};
  }
`

const StyledDeleteIcon = styled(Icon).attrs(props => ({
  viewBox: '0 0 18 20'
}))`
  min-width: 25px;
  width: auto;
  min-height: 10px;
  height: 20px;
  padding: 0 10px;
  margin-right: 10px;
`;


export function ButtonsContainer() {
  return (
    <Container>
      <ButtonDeleteDocument>
        <StyledDeleteIcon>
          <path d="M7 16a1 1 0 0 0 1-1V9a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1ZM17 4h-4V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H1a1 1 0 1 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6h1a1 1 0 0 0 0-2ZM7 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1H7V3Zm7 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6h10v11Zm-3-1a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z" fill="#7C8187"/>
        </StyledDeleteIcon>
      </ButtonDeleteDocument>
    </Container>
  );
}