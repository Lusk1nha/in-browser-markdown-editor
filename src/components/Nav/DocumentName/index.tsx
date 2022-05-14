import { FormEvent, useState } from "react";
import styled from "styled-components";
import { Icon } from "../../../styles/Icon";

const Container = styled.div`
  max-width: 400px;
  width: auto;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start; 
`;

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const StyledDocumentIcon = styled(Icon).attrs(props => ({
  viewBox: '0 0 20 18'
}))`
  min-width: 45px;
  width: auto;
  min-height: 30px;
  height: 30px;
  padding: 0 10px;
  margin-right: 10px;
`;

const DocumentPlaceholder = styled.h4`
  color: ${props => props.theme.colors.navPlaceholder};
  font-family: ${props => props.theme.font.mono};
  font-weight: ${props => props.theme.font.weight.light};
  line-height: 1.5rem;
`;

const DocumentTitle = styled.input.attrs(props => ({
  type: 'text'
}))`
  background: transparent;

  caret-color: ${props => props.theme.colors.superText};
  color: ${props => props.theme.colors.navTitle};
  font-size: 0.9rem;
  font-family: ${props => props.theme.font.regular};
  font-weight: ${props => props.theme.font.weight.regular};
  letter-spacing: 0.08rem; 

  border: 0;
  padding-bottom: 0.25rem;

  &:hover, &:focus {
    border-bottom: 1px solid ${props => props.theme.colors.navTitle};
  }
`;

interface DocumentNameProps {
  name?: string;
}

export function DocumentName(props: DocumentNameProps) {
  const [documentName, setDocumentName] = useState<any>('Undefined Name')

  const handleDocumentNameChange = (event: FormEvent<HTMLInputElement>) => {
    setDocumentName(event.currentTarget.value);
  }

  return (
    <Container>
      <StyledDocumentIcon>
        <path d="M13.107 3.393c.167.167.31.393.429.678.119.286.178.548.178.786v10.286c0 .238-.083.44-.25.607a.827.827 0 0 1-.607.25h-12a.827.827 0 0 1-.607-.25.827.827 0 0 1-.25-.607V.857C0 .62.083.417.25.25A.827.827 0 0 1 .857 0h8c.238 0 .5.06.786.179.286.119.512.261.678.428l2.786 2.786ZM9.143 1.214v3.357H12.5c-.06-.172-.125-.294-.196-.366L9.509 1.411c-.072-.072-.194-.137-.366-.197Zm3.428 13.643V5.714H8.857a.827.827 0 0 1-.607-.25.827.827 0 0 1-.25-.607V1.143H1.143v13.714H12.57Z" fill="#FFF"/>
      </StyledDocumentIcon>

      <Wrapper>
        <DocumentPlaceholder>Document Name</DocumentPlaceholder>
        <DocumentTitle value={documentName} onChange={event => handleDocumentNameChange(event)} />
      </Wrapper>
    </Container>
  );
};