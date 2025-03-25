import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export default function Container({ children, className } : ContainerProps) {
    return (
        <div className={`max-w-5xl mx-auto bg-transparent flex p-4 sm:px-6 lg:px-8 ${className ? className : ""}`}>

            {children}
        </div>
    );
}