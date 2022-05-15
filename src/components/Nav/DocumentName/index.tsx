import { FormEvent, useState } from "react";
import { DocumentIcon } from "../../Icons/DocumentIcon";
import { Container, DocumentIconWrapper, DocumentPlaceholder, DocumentTitle, Wrapper } from "./style";

interface DocumentNameProps {
  name?: string;
}

export function DocumentName(props: DocumentNameProps) {
  const [documentName, setDocumentName] = useState<any>('untitled-document')

  const handleDocumentNameChange = (event: FormEvent<HTMLInputElement>) => {
    setDocumentName(event.currentTarget.value);
  }

  return (
    <Container>
      <DocumentIconWrapper>
        <DocumentIcon />
      </DocumentIconWrapper>

      <Wrapper>
        <DocumentPlaceholder>Document Name</DocumentPlaceholder>
        <DocumentTitle value={documentName} onChange={event => handleDocumentNameChange(event)} />
      </Wrapper>
    </Container>
  );
};