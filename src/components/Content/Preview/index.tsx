import { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { PreviewIcon } from "../../Icons/PreviewIcon";
import { Content, Header, TextContainer } from "../style"

const ButtonPreviewMode = styled.button`
  background-color: transparent;
  max-width: 50px;
  width: 100%;
  height: 100%;
  border: 0;
  outline: 0;

  cursor: pointer;
`;


interface PreviewProps {
  onlyPreview: boolean;
  setOnlyPreview: React.Dispatch<React.SetStateAction<boolean>>;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export function Preview(props: PreviewProps) {
  const [convertedValue, setConvertedValue] = useState<string[]>([]);

  const {
    onlyPreview,
    setOnlyPreview
  } = props

  const handlePreviewMode = () => {
    setOnlyPreview(!onlyPreview)
  }

  useEffect(() => {
  }, [props.value])

  return (
    <Content>
      <Header>
        Preview
        
        <ButtonPreviewMode onClick={handlePreviewMode}>
          <PreviewIcon />
        </ButtonPreviewMode>
      </Header>
      <TextContainer onCenter={onlyPreview}>
        {
        }
      </TextContainer>
    </Content>
  )
}