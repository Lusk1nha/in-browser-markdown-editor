import styled from "styled-components";

export const Container = styled.aside`
  background: ${props => props.theme.colors.nav};
  max-width: 600px;
  width: 100%;
  height: 100%;

  transition: 300ms;
`;