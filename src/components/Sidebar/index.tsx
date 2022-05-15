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
import { ThemeChanger } from "./ThemeChanger";

interface SidebarProps {
  onSideBar: boolean;
  onWhiteMode: boolean;
  setOnWhiteMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Sidebar(props: SidebarProps) {
  return(
    <Fragment>
      {props.onSideBar && (
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

            <ThemeChanger onWhiteMode={props.onWhiteMode} setOnWhiteMode={props.setOnWhiteMode} />
          </SidebarMainWrapper>
        </Container>
      )}
    </Fragment>
  );
}