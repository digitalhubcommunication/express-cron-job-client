import { useEffect, useState } from "react";

export function useResponsivePageWindow() {
    const [windowSize, setWindowSize] = useState<number>(9);

    useEffect(() => {
        const updateSize = () => {
            const width = window.innerWidth;
            if (width < 540) {
                setWindowSize(4); // xs
            } else if (width < 700) {
                setWindowSize(6); // sm
            } else if (width < 1024) {
                setWindowSize(8); // md
            }
            else {
                setWindowSize(9); // lg+
            }
        };
        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return windowSize;
}
