import SVGWrapper from "../../styles/SVGComponent";

interface CloseIconProps {
  fill?: string;
}

export function CloseIcon(props: CloseIconProps) {
  return (
    <SVGWrapper viewBox="0 0 24 24">
      <g fill="#FFF" fill-rule="evenodd">
        <path d="M2.1.686 23.315 21.9l-1.415 1.415L.686 2.1z"/>
        <path d="M.686 21.9 21.9.685l1.415 1.415L2.1 23.314z"/>
      </g>
    </SVGWrapper>
  )
}

