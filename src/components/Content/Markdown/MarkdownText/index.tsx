import { FormEvent, useState } from "react";
import styled from "styled-components";

const Text = styled.textarea.attrs(props => ({
  resize: false
}))`
  background: transparent;
  width: 100%;
  height: 100%;

  color: ${props => props.theme.colors.text};
  font-size: 14px;
  font-family: ${props => props.theme.font.mono};
  font-weight: ${props => props.theme.font.weight.regular};

  border: 0;
  resize: none;
`;

interface MarkdownTextProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export function MarkdownText(props: MarkdownTextProps) {
  const handleTextChange = (event: FormEvent<HTMLTextAreaElement>) => {
    console.log(event.currentTarget.value)
    props.setValue(event.currentTarget.value);
  }

  return (
    <Text 
      value={props.value} 
      onChange={event => handleTextChange(event)}
      placeholder={"Write the markdown text here..."}
    />
  );
}