import styled from "styled-components";

interface ISuperTitleProps {
  text?: string;
  children?: string;
  disabled?: boolean;
}

interface ISuperTitleStyledProps {
  disabled?: boolean;
}

const Container = styled.div<ISuperTitleStyledProps>`
  width: auto;
  display: ${props => props.disabled ? 'none' : 'block'};
  font-size: 14px;
  font-family: ${props => props.theme.font.slab};
  font-weight: ${props => props.theme.font.weight.bold};
  color: ${props => props.theme.colors.superText};
  margin-bottom: 0.675rem;
`;

export function SuperTitle(props: ISuperTitleProps) {
  return (
    <Container disabled={props.disabled === undefined ? false : props.disabled}>
      {props.children || props.text}
    </Container>
  );
}