import { useState, useEffect, useRef, RefObject } from "react";

export function useClipPosition<T extends HTMLElement>(): {
    ref: RefObject<T>;
    cssVars: { [key: string]: string };
} {
    const ref = useRef<T>(null);
    const [clipPos, setClipPos] = useState({ x: -100, y: -100 });

    useEffect(() => {
        // Updates the clip position based on the given coordinates
        const updatePosition = (clientX: number, clientY: number) => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const relX = clientX - rect.left;
            const relY = clientY - rect.top;
            setClipPos({ x: relX, y: relY });
        };

        // Mouse movement event handler (desktop)
        const handleMouseMove = (e: MouseEvent) => {
            updatePosition(e.clientX, e.clientY);
        };

        // Touch movement event handler (mobile)
        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                const touch = e.touches[0];
                updatePosition(touch.clientX, touch.clientY);
            }
        };

        // On touch end → move the clip out of view to hide the effect
        const handleTouchEnd = () => {
            setClipPos({ x: -100, y: -100 });
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("touchmove", handleTouchMove);
        window.addEventListener("touchend", handleTouchEnd);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, []);

    const cssVars = {
        "--clipX": `${clipPos.x}px`,
        "--clipY": `${clipPos.y}px`,
    };

    return { ref, cssVars };
}
