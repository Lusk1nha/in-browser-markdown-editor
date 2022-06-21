import styled from "styled-components";

interface ITitleProps {
  text: string;
  disabled?: boolean;
}

interface ITitleStyledProps {
  disabled?: boolean;
}

const Container = styled.div<ITitleStyledProps>`
  width: auto;
  display: ${props => props.disabled ? 'none' : 'block'};
  font-size: 32px;
  font-family: ${props => props.theme.font.slab};
  font-weight: ${props => props.theme.font.weight.bold};
  color: ${props => props.theme.colors.title};
  margin-bottom: 0.875rem;
`;

export function Title(props: ITitleProps) {

  return(
    <Container disabled={props.disabled === undefined ? false : props.disabled}>
      {props.text}
    </Container>
  );
}