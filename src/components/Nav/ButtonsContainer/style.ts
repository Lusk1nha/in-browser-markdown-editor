import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 0 2rem 0 0.5rem;
`;

export const ButtonDeleteDocument = styled.button.attrs(props => ({
  type: 'button'
}))`
  background-color: ${props => props.theme.colors.header};
  max-width: 60px;
  min-width: 45px;
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