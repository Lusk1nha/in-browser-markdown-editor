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
  font-size: 24px;
  font-family: ${props => props.theme.font.slab};
  font-weight: ${props => props.theme.font.weight.bold};
  color: ${props => props.theme.colors.title};
  margin-bottom: 0.675rem;
`;

export function SubTitle2(props: ISubTitleProps) {
  return (
    <Container disabled={props.disabled === undefined ? false : props.disabled}>
      {props.children || props.text}
    </Container>
  );
}