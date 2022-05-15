import styled from "styled-components"
import { DeleteIcon } from "../../../Icons/DeleteIcon";

const Button = styled.button.attrs(props => ({
  type: 'button'
}))`
  background-color: ${props => props.theme.colors.header};
  max-width: 60px;
  min-width: 45px;
  width: 100%;
  height: 45px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.3rem;
  border: 0;
  outline: 0;

  margin-right: 1rem;

  transition: background 250ms ease;
  cursor: pointer;


  &:hover, &:focus {
    background-color: ${props => props.theme.colors.nav};
  }
`

export function ButtonDeleteDocument() {
  return (
    <Button>
      <DeleteIcon />
    </Button>
  );
}