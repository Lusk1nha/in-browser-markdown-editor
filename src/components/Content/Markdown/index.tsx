import styled from "styled-components";
import { Content, Header, TextContainer } from "../style"
import { MarkdownText } from "./MarkdownText";

const StyledContent = styled(Content)`
  border-right: 1px solid ${props => props.theme.colors.scope};
`;

interface MarkdownProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}


export function Markdown(props: MarkdownProps) {
  return (
    <StyledContent>
      <Header>
        Markdown
      </Header>
      <TextContainer>
        <MarkdownText value={props.value} setValue={props.setValue} />
      </TextContainer>
    </StyledContent>
  )
}