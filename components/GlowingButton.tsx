import type { CSSProperties } from "react"

type GlowingButtonProps = {
  label?: string
  href?: string
  className?: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
}

export default function GlowingButton({
  label = "Book A Demo",
  href,
  className,
  onClick,
  type = "button",
}: GlowingButtonProps) {
  const letters = Array.from(label)
  const rootClassName = `glow-cta${className ? ` ${className}` : ""}`
  const content = (
    <>
      <div className="glow-cta-outer">
        <div className="glow-cta-shadow" />
        <div className="glow-cta-base" />
      </div>
      <div className="glow-cta-inner">
        <div className="glow-cta-content">
          <div className="glow-cta-pulse" />
          <p className="glow-cta-text" aria-hidden="true">
            {letters.map((letter, index) => (
              <span
                key={`${letter}-${index}`}
                className="glow-cta-letter"
                style={{ "--i": index } as CSSProperties}
              >
                {letter}
              </span>
            ))}
          </p>
        </div>
      </div>
    </>
  )

  if (href) {
    return (
      <a className={rootClassName} href={href} aria-label={label}>
        {content}
      </a>
    )
  }

  return (
    <button className={rootClassName} type={type} onClick={onClick} aria-label={label}>
      {content}
    </button>
  )
}
