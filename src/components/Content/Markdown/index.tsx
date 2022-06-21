import styled from "styled-components";
import { Content, Header, TextContainer } from "../style"
import { MarkdownText } from "./MarkdownText";

interface IMarkdownProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  disabled: boolean;
}

const StyledContent = styled(Content)<{isDisabled: boolean}>`
  width: ${props => props.isDisabled ? '0px' : '100%'};
  opacity: ${props => props.isDisabled ? '0%' : '100%'};
  border-right: 1px solid ${props => props.theme.colors.scope};
  transition: 500ms;
`;

const StyledTextContainer = styled(TextContainer)`
  padding: 0;
`;

export function Markdown(props: IMarkdownProps) {
  return (
    <StyledContent isDisabled={props.disabled}>
      <Header>
        Markdown
      </Header>
      <StyledTextContainer>
        <MarkdownText value={props.value} setValue={props.setValue} />
      </StyledTextContainer>
    </StyledContent>
  )
}