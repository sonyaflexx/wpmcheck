import React from 'react';

interface ToggleButtonProps {
    isActive: boolean;
    onClick: () => void;
    children: React.ReactNode;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ isActive, onClick, children }) => {
    return (
        <button
            onClick={onClick}
            className={`${isActive ? 'text-main-color' : 'text-sub-alt-color'} hover:text-white transition-colors active:text-sub-alt-color`}
        >
            {children}
        </button>
    );
};

export default ToggleButton;
