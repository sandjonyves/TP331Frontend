import React from 'react';

const   Button = ({ variant = 'primary', isLoading = false, children,className, ...props }) => {
    const baseStyles = 'px-4 py-2 font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50';
    const variantStyles = {
        primary: '  text-white shadow-xl py-3 px-14 text-sm font-semibold rounded-full  hover:bg-blue-800 focus:outline-none',
        secondary: 'bg-gray-300 text-gray-800 hover:bg-gray-400 focus:ring-gray-300',
    };

    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${className} ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isLoading} // Désactive le bouton pendant le chargement
            {...props}
        >
            {isLoading ? (
                <span className="flex items-center justify-center">
                    <svg
                        className="w-5 h-5 mr-2 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <circle className="opacity-25" cx="12" cy="12" r="10" strokeWidth="4" />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 0116 0 8 8 0 01-16 0z"
                        />
                    </svg>
                    Loading...
                </span>
            ) : (
                children
            )}
        </button>
    );
};

export default Button;