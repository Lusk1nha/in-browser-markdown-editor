import styled from "styled-components";
import { SaveIcon } from "../../../Icons/SaveIcon";

const Button = styled.button.attrs(props => ({
  type: 'button'
}))`
  background: ${props => props.theme.colors.superText};
  max-width: 200px;
  min-width: 120px;
  width: 100%;
  height: 45px;
  border: 0;
  outline: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.3rem;
  border: 0;
  outline: 0;

  transition: background 250ms ease;
  cursor: pointer;

  &:hover, &:focus {
    background: ${props => props.theme.colors.superTextHover};
  }
`;

const Text = styled.p`
  color: ${props => props.theme.colors.navTitle};
  font-size: clamp(0.9rem, 5vw, 1rem);
  font-family: ${props => props.theme.font.regular};
  font-weight: ${props => props.theme.font.weight.regular};
  margin-left: 0.645rem;
`;

export function ButtonSaveDocument() {
  return (
    <Button>
      <SaveIcon />
      <Text>
        Save Changes
      </Text>
    </Button>
  );  
}