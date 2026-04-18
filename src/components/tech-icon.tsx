const FALLBACK = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'%3E%3Crect width='24' height='24' rx='4' fill='%23444'/%3E%3C/svg%3E"

type TechIconProps = {
    alt: string
    src: string
    size?: number
}

export default function TechIcon({ alt, size = 32, src }: TechIconProps) {
    return (
        <img
            alt={`Logo ${alt}`}
            height={size}
            loading="lazy"
            onError={(e) => {
                e.currentTarget.src = FALLBACK
            }}
            src={src}
            width={size}
        />
    )
}