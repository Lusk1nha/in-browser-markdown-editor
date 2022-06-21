import styled from "styled-components";

export const Content = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  transition: all 100ms linear;
`;

export const Header = styled.div`
  background: ${props => props.theme.colors.markdown};
  width: 100%;
  min-height: 42px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.font.regular};
  font-weight: ${props => props.theme.font.weight.medium};
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  transition: all 100ms linear;
`;

interface TextContainerProps {
  onCenter?: boolean;
}

export const TextContainer = styled.article<TextContainerProps>`
  background: transparent;
  max-width: unset;
  width: 100%;
  height: 100%;

  color: ${props => props.theme.colors.text};
  font-size: 14px;
  font-family: ${props => props.theme.font.slab};
  font-weight: ${props => props.theme.font.weight.regular};

  display: flex;
  flex-flow: column;
  flex-grow: 1;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 1.5rem ${props => props.onCenter ? '20%' : '2rem'} 2rem;

  margin-bottom: 4rem;

  overflow: auto;

  transition: 500ms linear;

  &::-webkit-scrollbar {
    background: transparent;
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.header};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.markdown}; 
  }
`;