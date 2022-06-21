import { Fragment } from "react";
import { DocumentsSidebar } from "./DocumentsSidebar";
import {
  Container,
  Header,
  HeaderTitle,
  ButtonCreateDocumentWrapper,
  ButtonCreateDocument,
  SidebarMainWrapper,
  SidebarContentWrapper,
  ContainerPlaceholder
} from "./style";
import { ThemeChanger } from "./ThemeChanger";

interface SidebarProps {
  onSideBar: boolean;
  onWhiteMode: boolean;
  setOnWhiteMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Sidebar(props: SidebarProps) {
  return (
    <Fragment>
      <Container isDisabled={props.onSideBar}>
       <ContainerPlaceholder isDisabled={props.onSideBar}>
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
       </ContainerPlaceholder>
      </Container>
    </Fragment>
  );
}