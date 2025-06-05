import { useClipPosition } from "@/hooks/useClipPosition";

export const ClipText = ({
    children,
    radius = 80,
}: {
    children: React.ReactNode;
    radius?: number;
}) => {
    // Get ref and CSS vars (––clipX, ––clipY) from hook
    const { ref, cssVars } = useClipPosition<HTMLDivElement>();

    return (
        <div
            ref={ref}
            // Attach CSS variables inline so the pseudo-layer can read var(--clipX)/var(--clipY)
            style={cssVars as React.CSSProperties}
            className="inline-block relative cursor-default"
        >
            {/* 1) Base layer: render children without any clipping */}
            <div className="relative">{children}</div>

            {/* 2) Overlay layer: absolute, duplicates children with gradient + clip */}
            <div
                className="absolute top-0 left-0 pointer-events-none overflow-visible"
                style={{
                    // Clip to a circle of radius px at (var(--clipX), var(--clipY))
                    clipPath: `circle(${radius}px at var(--clipX) var(--clipY))`,
                    WebkitClipPath: `circle(${radius}px at var(--clipX) var(--clipY))`,

                    // Apply a text gradient: background-clip: text + transparent fill
                    background: "linear-gradient(90deg, #23b141, #00b58b, #00b3cd, #00abf8, #009aff, #6c8bf9, #9d78e9, #c162d0, #e459a3, #ed627a, #e2765c, #cd8b4d)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                {children}
            </div>
        </div>
    );
}
