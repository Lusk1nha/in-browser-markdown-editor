import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
`;

export const Document = styled.section`
  width: 100%;
  height: 50px;
  margin-bottom: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
`;

export const StyledDocumentIconWrapper = styled.div`
  max-width: 50px;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DocumentWrapper = styled.section`
  width: 100%;
  height: auto;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const CreatedDate = styled.h4`
  width: 100%;
  color: ${props => props.theme.colors.navPlaceholder}; 
  font-size: 0.85rem;
  font-family: ${props => props.theme.font.regular};
  font-weight: ${props => props.theme.font.weight.light};
`;

export const DocumentTitle = styled.h4`
  width: 100%;
  width: 100%;
  color: ${props => props.theme.colors.navTitle}; 
  font-size: 0.9rem;
  font-family: ${props => props.theme.font.regular};
  font-weight: ${props => props.theme.font.weight.light};

  transition: color 200ms;

  ${Document}:hover & {
    color: ${props => props.theme.colors.superText};
  }
`;