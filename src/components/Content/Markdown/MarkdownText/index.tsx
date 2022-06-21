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

  padding: 1.5rem 2rem 3rem;

  border: 0;
  resize: none;

  overflow: auto;

  transition: 400ms linear;

  &::-webkit-scrollbar {
    background: transparent;
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.header}; 
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.markdown}; 
  }
`;

interface IMarkdownTextProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export function MarkdownText(props: IMarkdownTextProps) {
  const handleTextChange = (event: FormEvent<HTMLTextAreaElement>) => {
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