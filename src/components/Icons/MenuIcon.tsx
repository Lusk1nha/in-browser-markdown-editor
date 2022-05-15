import SVGWrapper from "../../styles/SVGComponent";

interface MenuIconProps {
  fill?: string;
}

export function StyledMenuIcon(props: MenuIconProps) {
  return (
    <SVGWrapper viewBox="0 0 25 20">
      <g fill="#FFF" fill-rule="evenodd">
        <path d="M0 0h30v2H0zM0 8h30v2H0zM0 16h30v2H0z"/>
      </g>
    </SVGWrapper>
  )
}

