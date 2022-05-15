import { useEffect, useState } from "react";
import { DocumentIcon } from "../../Icons/DocumentIcon";
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

    getDocuments();
  }, [])

  return (
    <Container>
      {documents.map((doc, index) => {
        return (
          <Document key={index}>
            <StyledDocumentIconWrapper>
              <DocumentIcon />
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