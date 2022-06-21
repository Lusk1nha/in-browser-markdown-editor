import styled from "styled-components";

interface IBulletTopicProps {
  text: string;
  disabled?: boolean;
}

interface IBulletTopicStyledProps {
  disabled?: boolean;
}

const Container = styled.div<IBulletTopicStyledProps>`
  width: auto;
  height: 16px;
  display: ${props => props.disabled ? 'none' : 'flex'};
  align-items: center;
  font-size: 14px;
  font-family: ${props => props.theme.font.regular};
  font-weight: ${props => props.theme.font.weight.regular};
  color: ${props => props.theme.colors.text};
  padding-left: 1.265rem;
  margin-bottom: 0.685rem;
`;

const BulletContainer = styled.span`
  background: ${props => props.theme.colors.superText};
  width: 3px;
  height: 3px;
  margin-right: 0.875rem;
  border-radius: 50%;
`;

export function BulletTopic(props: IBulletTopicProps) {
  return(
    <Container disabled={props.disabled === undefined ? false : props.disabled}>
      <BulletContainer />
      {props.text}
    </Container>
  );
};