import { useCallback, useMemo } from 'react';

// --- Type Definitions for ToggleButton ---
type Size = "sm" | "base" | "md";


type Props = {
    isActive: boolean;
    onToggle?: () => void;
    size?: Size;
    label?: string; // Added label for better context
}

// --- Size Configuration Map ---
// Maps the size prop to the specific Tailwind classes needed for dimensions and translation.
const sizeMap = {
    sm: {
        container: 'h-5 w-10', // Small: 1.25rem height, 2.5rem width
        thumb: 'w-4 h-4',       // Thumb: 1rem square
        translate: 'translate-x-5', // Translate to ON position
    },
    base: {
        container: 'h-6 w-12', // Base (Default): 1.5rem height, 3rem width
        thumb: 'w-5 h-5',       // Thumb: 1.25rem square
        translate: 'translate-x-6', // Translate to ON position
    },
    md: {
        container: 'h-8 w-16', // Medium: 2rem height, 4rem width
        thumb: 'w-7 h-7',       // Thumb: 1.75rem square
        translate: 'translate-x-8.5', // Translate to ON position
    }
};

/**
 * A reusable, sized, and controlled toggle switch button.
 * Uses props for state management and click handling.
 */
const ToggleButton = ({ isActive, onToggle, size = "base", label }: Props) => {
    // Determine the size configuration, defaulting to 'base' if the prop is invalid
    const currentSizeConfig = useMemo(() => sizeMap[size] || sizeMap['base'], [size]);

    const handleToggle = useCallback(() => {
        // Execute the callback function if it was provided
        if (onToggle) {
            onToggle();
        }
    }, [onToggle]);

    return (
        // The main button container (Track)
        <button
            onClick={handleToggle}
            // Dynamic classes for size and color
            className={`
                relative inline-flex items-center rounded-full transition-colors duration-200 ease-in-out
                ${currentSizeConfig.container} 
                ${isActive ? 'bg-green-500' : 'bg-gray-300'}
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
            `}
            aria-checked={isActive}
            role="switch"
        >
            {/* The 'switch' or 'thumb' circle */}
            <span
             title={label}
                // Dynamic classes for thumb size and position
                className={`
                    inline-block transform bg-white rounded-full shadow ring-0 transition duration-200 ease-in-out
                    ${currentSizeConfig.thumb} 
                    ${isActive ? currentSizeConfig.translate : 'translate-x-0.5'}
                `}
                aria-hidden="true"
            />
        </button>
    );
};

export default ToggleButton;