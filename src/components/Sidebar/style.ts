import styled from "styled-components";

export const Container = styled.aside`
  background: ${props => props.theme.colors.nav};
  max-width: 400px;
  width: 100%;
  height: 100%;

  padding: 0 1.5rem;

  transition: 300ms;
`;

export const Header = styled.nav`
  background: transparent;
  width: 100%;
  height: 72px;
  padding: 1rem 0;

  display: flex;
  align-items: center;
`;

export const HeaderTitle = styled.h2`
  color: ${props => props.theme.colors.navPlaceholder}; 
  font-size: 1.05rem;
  font-family: ${props => props.theme.font.regular};
  font-weight: ${props => props.theme.font.weight.regular};
  text-transform: uppercase;
  letter-spacing: 0.12rem;
`;

export const SidebarMainWrapper = styled.main`
  width: 100%;
  height: 90%;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
`;

export const SidebarContentWrapper = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const ButtonCreateDocumentWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 1.65rem;
`;

export const ButtonCreateDocument = styled.button.attrs(props => ({
  type: 'button'
}))`
  background: ${props => props.theme.colors.superText};
  width: 100%;
  height: 100%;

  color: ${props => props.theme.colors.navTitle}; 
  font-size: 0.95rem;
  font-family: ${props => props.theme.font.regular};
  font-weight: ${props => props.theme.font.weight.light};

  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  cursor: pointer;

  transition: background 200ms ease;

  &:hover, &:focus {
    background: ${props => props.theme.colors.superTextHover};
  }
`;