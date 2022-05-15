import { Fragment } from "react";
import styled from "styled-components";
import { DocumentName } from "../DocumentName";

const Container = styled.div`
  width: 100%;
  height: 72px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 0 2.5rem;
  transition: 200ms;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.navTitle};
  font-size: 1rem;
  font-family: ${props => props.theme.font.slab};
  font-weight: ${props => props.theme.font.weight.regular};
  letter-spacing: 0.4rem;
  text-transform: uppercase;

  transition: 200ms;
`;

const TitleDivisor = styled.span`
  background: ${props => props.theme.colors.navPlaceholder};
  width: 1px;
  height: 30px;
  margin: 0 40px;
`;

interface DocumentContainerProps {
  navOn: boolean;
}

export function DocumentContainer(props: DocumentContainerProps) {

  return (
    <Container>
      <Fragment>
        <Title>
          Markdown
        </Title>
        <TitleDivisor />
      </Fragment>
      <DocumentName />
    </Container>
  );
}