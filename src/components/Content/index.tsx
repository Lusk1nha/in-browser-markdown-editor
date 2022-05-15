import { useState } from "react";

import styled from "styled-components"
import { Markdown } from "./Markdown";
import { Preview } from "./Preview";

const Container = styled.main`
  background: ${(props) => props.theme.colors.background};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  transition: all 100ms ease-out;
`;

export function Content() {
  const [value, setValue] = useState<string>('')
  const [onlyPreview, setOnlyPreview] = useState<boolean>(false);

  return (
    <Container>
      {!onlyPreview && <Markdown value={value} setValue={setValue} />}
      <Preview 
        onlyPreview={onlyPreview} 
        setOnlyPreview={setOnlyPreview}
        value={value}
        setValue={setValue}
      />
    </Container>
  )
}