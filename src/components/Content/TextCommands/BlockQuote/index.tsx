import styled from "styled-components";

interface IBlockQuoteProps {
  text: string;
  disabled?: boolean;
}

interface IBlockQuoteStyledProps {
  disabled: boolean;
}

const Container = styled.div<IBlockQuoteStyledProps>`
  background: ${props => props.theme.colors.blockQuote};
  width: 100%;
  display: ${props => props.disabled ? 'none' : 'block'};
  font-size: 14px;
  font-family: ${props => props.theme.font.slab};
  font-weight: ${props => props.theme.font.weight.bold};
  color: ${props => props.theme.colors.title};
  border-radius: 0.2rem;
  border-left: 4px solid ${props => props.theme.colors.superText};
  margin-bottom: 0.875rem;
`;

const TextContainer = styled.p`
  width: 100%;
  padding: 1.5rem 1.265rem;
`;

export function BlockQuote(props: IBlockQuoteProps) {
  return(
    <Container disabled={props.disabled === undefined ? false : props.disabled}>
      <TextContainer>
        {props.text}
      </TextContainer>
    </Container>
  );
}