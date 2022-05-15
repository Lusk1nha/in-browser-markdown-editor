import { Fragment, useEffect, useState } from "react";
import { StyledDocumentIcon } from "../../Icons/DocumentIcon";
import { 
  Container, 
  Document,
  StyledDocumentIconWrapper,
  DocumentWrapper, 
  CreatedDate, 
  DocumentTitle 
} from "./style";

export function DocumentsSidebar() {
  const [documents, setDocuments] = useState<Array<any>>([])

  useEffect(() => {
    const getDocuments = async () => {
      const response = await fetch('data.json');
      const result = await response.json();
      return setDocuments(result)
    }
  }, [])

  return (
    <Container>
      {documents.map((doc, index) => {
        return (
          <Document key={index}>
            <StyledDocumentIconWrapper>
              <StyledDocumentIcon />
            </StyledDocumentIconWrapper>
            <DocumentWrapper>
              <CreatedDate>
                {doc.createdAt}
              </CreatedDate>
              <DocumentTitle>
                {doc.name}
              </DocumentTitle>
            </DocumentWrapper>
          </Document>
        )
      })}
    </Container>
  );
}