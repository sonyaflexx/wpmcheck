import React from 'react';

interface ToggleButtonProps {
    isActive: boolean;
    onClick: () => void;
    children: React.ReactNode;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ isActive, onClick, children }) => {
    const activeClass = isActive ? 'text-main-color' : 'text-sub-alt-color';
    const baseClass = 'hover:text-white transition-colors active:text-sub-alt-color';

    return (
        <button onClick={onClick} className={`${activeClass} ${baseClass}`}>
            {children}
        </button>
    );
};

export default ToggleButton;