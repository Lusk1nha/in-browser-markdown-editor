import styled from "styled-components";

interface ITextProps {
  text?: string;
  children?: string;
  disabled?: boolean;
}

interface ITextStyledProps {
  disabled?: boolean;
}

const Container = styled.div<ITextStyledProps>`
  width: auto;
  display: ${props => props.disabled ? 'none' : 'block'};
  font-size: 14px;
  font-family: ${props => props.theme.font.slab};
  font-weight: ${props => props.theme.font.weight.regular};
  color: ${props => props.theme.colors.text};
`;

export function Text(props: ITextProps) {
  return (
    <Container disabled={props.disabled === undefined ? false : props.disabled}>
      {props.children || props.text}
    </Container>
  );
}