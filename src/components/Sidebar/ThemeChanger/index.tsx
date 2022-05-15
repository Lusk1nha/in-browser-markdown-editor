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
    updateLocalTheme(!props.onWhiteMode);
    props.setOnWhiteMode(!props.onWhiteMode);
  }

  const getLocalTheme = (): string | undefined => {
    const cacheTheme = localStorage.getItem('theme');

    if(cacheTheme !== null) return cacheTheme
    return undefined
  }

  const updateLocalTheme = (value: string | boolean) => {
    const cache = localStorage.getItem('theme');

    if(cache == undefined || cache != value) {
      return localStorage.setItem('theme', value as string);
    }
  }

  return(
    <Container>
      <MoonIcon active={!props.onWhiteMode} />
      <Slider active={props.onWhiteMode} onClick={handleSlider} />
      <SunIcon active={props.onWhiteMode} />
    </Container>
  );
}