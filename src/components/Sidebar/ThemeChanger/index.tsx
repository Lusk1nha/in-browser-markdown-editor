import { useState } from "react";
import { MoonIcon } from "../../Icons/MoonIcon";
import { SunIcon } from "../../Icons/SunIcon";

import { Container, Slider } from "./style";

interface ThemeChangerProps {
  onWhiteMode: boolean;
  setOnWhiteMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ThemeChanger(props: ThemeChangerProps) {
  const handleSlider = () => {
    props.setOnWhiteMode(!props.onWhiteMode);
  }

  return(
    <Container>
      <MoonIcon active={!props.onWhiteMode} />
      <Slider active={props.onWhiteMode} onClick={handleSlider} />
      <SunIcon active={props.onWhiteMode} />
    </Container>
  );
}