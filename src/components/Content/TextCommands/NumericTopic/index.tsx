import styled from "styled-components";

interface INumericTopicProps {
  numeric?: string,
  text: string;
  disabled?: boolean;
}

interface INumericTopicStyledProps {
  disabled?: boolean;
}

const Container = styled.div<INumericTopicStyledProps>`
  width: auto;
  display: ${props => props.disabled ? 'none' : 'block'};
  font-size: 14px;
  font-family: ${props => props.theme.font.regular};
  font-weight: ${props => props.theme.font.weight.regular};
  color: ${props => props.theme.colors.text};
  padding-left: 1.265rem;
  margin-bottom: 0.685rem;
`;

const NumericContainer = styled.span`
  width: auto;
  margin-right: 0.875rem;
  letter-spacing: -2px;
`;

export function NumericTopic(props: INumericTopicProps) {
  return(
    <Container disabled={props.disabled === undefined ? false : props.disabled}>
      <NumericContainer>{props.numeric + '.'}</NumericContainer>
      {props.text}
    </Container>
  );
};