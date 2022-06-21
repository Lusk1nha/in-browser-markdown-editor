import { cp } from "fs/promises";
import styled from "styled-components";

interface ICodeBlockProps {
  texts: string[];
  disabled?: boolean;
}

interface ICodeBlockStyledProps {
  disabled: boolean;
}

const Container = styled.div<ICodeBlockStyledProps>`
  background: ${props => props.theme.colors.blockQuote};
  width: 100%;
  display: ${props => props.disabled ? 'none' : 'block'};
  font-size: 14px;
  font-family: ${props => props.theme.font.mono};
  font-weight: ${props => props.theme.font.weight.regular};
  color: ${props => props.theme.colors.title};
  border-radius: 0.2rem;
  margin-bottom: 0.875rem;
`;

const TextContainer = styled.p`
  width: 100%;
  padding: 1.5rem 1.265rem;
  white-space: pre-wrap;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export function CodeBlock(props: ICodeBlockProps) {
  return(
    <Container disabled={props.disabled === undefined ? false : props.disabled}>
      <TextContainer>
        {props.texts.map((text, index) => {
          return <div key={index}>{text}</div>
        })}
      </TextContainer>
    </Container>
  );
}