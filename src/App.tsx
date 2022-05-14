import { Fragment, useState } from "react";
import GlobalStyle from "./styles/globalStyles";

import { lightTheme, darkTheme } from './styles/theme'
import { ThemeProvider } from "styled-components";

import { WrapperColumn, WrapperRow } from "./components/Wrapper";
import { Nav } from "./components/Nav";
import { Content } from "./components/Content";
import { Sidebar } from "./components/Sidebar";

export default function App() {
  const [isWhiteTheme, setIsWhiteTheme] = useState<boolean>(true);
  const [isOpenedNav, setIsOpenedNav] = useState<boolean>(false);

  return (
    <Fragment>
      <ThemeProvider theme={isWhiteTheme ? lightTheme : darkTheme}>
        <GlobalStyle />
        <WrapperRow>
          <Sidebar on={isOpenedNav} />
          <WrapperColumn>
            <Nav on={isOpenedNav} setOn={setIsOpenedNav} />
            <Content />
          </WrapperColumn>
        </WrapperRow>
      </ThemeProvider>
    </Fragment>
  );
}