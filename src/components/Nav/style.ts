import styled from "styled-components";
import  SVGComponent from "../../styles/SVGComponent";

export const Header = styled.header`
  background: ${(props) => props.theme.colors.header};
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ButtonNavbar = styled.button.attrs(props => ({
  type: 'button',
  size: '1rem'
  }))`
  background: ${props => props.theme.colors.navBtn};
  max-width: 90px;
  min-width: 80px;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  outline: 0;

  transition: background 200ms;

  cursor: pointer;
  &:hover {
    background: ${props => props.theme.colors.superText};
  }
`;

export const StyledMenuIcon = styled(SVGComponent).attrs(props => ({
  viewBox: '0 0 24 24'
}))`
  width: 35px;
  height: 30px;
  transition: 200ms;
`;

export const Container = styled.section`
  width: 100%;
  min-height: 72px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;