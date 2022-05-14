import styled from "styled-components"

const Container = styled.main`
  background: ${(props) => props.theme.colors.background};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  padding: 1rem;
  transition: background 100ms linear;
`;

export function Content() {
  return (
    <Container>
      
    </Container>
  )
}