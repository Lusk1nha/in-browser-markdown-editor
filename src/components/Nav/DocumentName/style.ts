import styled from "styled-components";
import { ReactComponent as DocumentIcon } from "../../../assets/images/icon-document.svg";

export const Container = styled.div`
  max-width: 400px;
  width: auto;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start; 
`;

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const DocumentIconWrapper = styled.div`
  width: auto;
  min-width: 45px;

  height: 30px;
  min-height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  
  padding: 0 10px;
  margin-right: 10px;
`;

export const DocumentPlaceholder = styled.h4`
  color: ${props => props.theme.colors.navPlaceholder};
  font-family: ${props => props.theme.font.mono};
  font-weight: ${props => props.theme.font.weight.light};
  line-height: 1.5rem;
`;

export const DocumentTitle = styled.input.attrs(props => ({
  type: 'text'
}))`
  background: transparent;

  caret-color: ${props => props.theme.colors.superText};
  color: ${props => props.theme.colors.navTitle};
  font-size: 0.9rem;
  font-family: ${props => props.theme.font.regular};
  font-weight: ${props => props.theme.font.weight.regular};
  letter-spacing: 0.08rem; 

  border: 0;
  padding-bottom: 0.25rem;

  &:hover, &:focus {
    border-bottom: 1px solid ${props => props.theme.colors.navTitle};
  }
`;