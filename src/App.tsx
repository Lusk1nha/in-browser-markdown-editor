import { Fragment, useEffect, useState } from "react";
import GlobalStyle from "./styles/globalStyles";

import { lightTheme, darkTheme } from './styles/theme'
import { ThemeProvider } from "styled-components";

import { WrapperColumn, WrapperRow } from "./components/Wrapper";
import { Nav } from "./components/Nav";
import { Content } from "./components/Content";
import { Sidebar } from "./components/Sidebar";

interface CachedLocal {
  cacheTheme: string | null;
  cachePreview: string | null;
}

export default function App() {
  const [isWhiteTheme, setIsWhiteTheme] = useState<boolean>(true);
  const [isOpenedNav, setIsOpenedNav] = useState<boolean>(false);
  const [currentDocument, setCurrentDocument] = useState<any>({})

  const getLocalCache = (): CachedLocal => {
    const cacheTheme = localStorage.getItem('theme');
    const cachePreview = localStorage.getItem('onPreview');

    return {
      cacheTheme,
      cachePreview
    }
  }

  useEffect(() => {
    const {
      cacheTheme,
      cachePreview
    }: CachedLocal = getLocalCache();

    if (cacheTheme !== undefined && cacheTheme != "true") {
      setIsWhiteTheme(cacheTheme == "true");
    };
  }, [])

  
  return (
    <Fragment>
      <ThemeProvider theme={isWhiteTheme ? lightTheme : darkTheme}>
        <GlobalStyle />
        <WrapperRow>
          <Sidebar onSideBar={isOpenedNav} onWhiteMode={isWhiteTheme} setOnWhiteMode={setIsWhiteTheme} />
          <WrapperColumn>
            <Nav on={isOpenedNav} setOn={setIsOpenedNav} />
            <Content />
          </WrapperColumn>
        </WrapperRow>
      </ThemeProvider>
    </Fragment>
  );
}