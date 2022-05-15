import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Slider = styled.span<{ active: boolean }>`
  background: ${props => props.theme.colors.navPlaceholder};
  max-width: 60px;
  width: 100%;
  height: 30px;

  margin: 0 1rem;
  border-radius: 1rem;

  position: relative;

  cursor: pointer;

  &::before {
    content: '';
    background: white;
    width: 20px;
    height: 20px;
    position: absolute;
    ${props => !props.active ? 'left: 6px;' : 'right: 6px;'}
    margin-bottom: auto;
    margin-top: auto;
    top: 0;
    bottom: 0;
    text-align: center;
    border-radius: 50%;

    transition: 200ms;
  }
`;