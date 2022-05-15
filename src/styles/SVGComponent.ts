import { ReactNode } from "react";
import styled from "styled-components";

const SVGSchema = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg', 
  xmlnsXlink: 'http://www.w3.org/1999/xlink'
})``

const SVGWrapper = styled(SVGSchema)`
  width: ${props => props.width || '18px'};
  height: ${props => props.height || '20px'};
`;

interface SVGComponentProps {
  children: ReactNode;
  viewBox: any;
}


export default SVGWrapper;