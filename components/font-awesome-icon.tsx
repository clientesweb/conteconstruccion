import Script from "next/script"

interface FontAwesomeIconProps {
  icon: string // Format: "fas fa-home", "far fa-user", etc.
  className?: string
  size?: "xs" | "sm" | "lg" | "xl" | "2x" | "3x" | "4x" | "5x" | "6x" | "7x" | "8x" | "9x" | "10x"
  fixedWidth?: boolean
  spin?: boolean
  pulse?: boolean
  border?: boolean
  inverse?: boolean
  flip?: "horizontal" | "vertical" | "both"
  rotation?: 90 | 180 | 270
  pull?: "left" | "right"
}

export default function FontAwesomeIcon({
  icon,
  className = "",
  size,
  fixedWidth = false,
  spin = false,
  pulse = false,
  border = false,
  inverse = false,
  flip,
  rotation,
  pull,
}: FontAwesomeIconProps) {
  // Build the classes
  let classes = icon + " " + className

  if (size) classes += ` fa-${size}`
  if (fixedWidth) classes += " fa-fw"
  if (spin) classes += " fa-spin"
  if (pulse) classes += " fa-pulse"
  if (border) classes += " fa-border"
  if (inverse) classes += " fa-inverse"
  if (flip) classes += ` fa-flip-${flip}`
  if (rotation) classes += ` fa-rotate-${rotation}`
  if (pull) classes += ` fa-pull-${pull}`

  return (
    <>
      <Script src="https://kit.fontawesome.com/your-kit-code.js" crossOrigin="anonymous" strategy="afterInteractive" />
      <i className={classes} aria-hidden="true"></i>
    </>
  )
}
