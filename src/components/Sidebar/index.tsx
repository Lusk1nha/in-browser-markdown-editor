import { Fragment } from "react";
import { DocumentsSidebar } from "./DocumentsSidebar";
import { 
  Container, 
  Header,
  HeaderTitle,
  ButtonCreateDocumentWrapper, 
  ButtonCreateDocument,
  SidebarMainWrapper,
  SidebarContentWrapper
} from "./style";

interface SidebarProps {
  on: boolean;
}
export function Sidebar(props: SidebarProps) {
  return(
    <Fragment>
      {props.on && (
        <Container>
          <Header>
            <HeaderTitle>My Documents</HeaderTitle>
          </Header>
          <SidebarMainWrapper>
            <SidebarContentWrapper>
              <ButtonCreateDocumentWrapper>
                <ButtonCreateDocument>
                  + New Document
                </ButtonCreateDocument>
              </ButtonCreateDocumentWrapper>
                
              <DocumentsSidebar />
            </SidebarContentWrapper>

            Hello
          </SidebarMainWrapper>
        </Container>
      )}
    </Fragment>
  );
}