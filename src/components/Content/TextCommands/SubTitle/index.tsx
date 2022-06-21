import styled from "styled-components";

interface ISubTitleProps {
  text?: string;
  children?: string;
  disabled?: boolean;
}

interface ISubTitleStyledProps {
  disabled?: boolean;
}

const Container = styled.div<ISubTitleStyledProps>`
  width: auto;
  display: ${props => props.disabled ? 'none' : 'block'};
  font-size: 28px;
  font-family: ${props => props.theme.font.slab};
  font-weight: ${props => props.theme.font.weight.light};
  color: ${props => props.theme.colors.title};
  margin-bottom: 0.675rem;
`;

export function SubTitle(props: ISubTitleProps) {
  return (
    <Container disabled={props.disabled === undefined ? false : props.disabled}>
      {props.children || props.text}
    </Container>
  );
}