import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Conteiner({children, className = ''}: ContainerProps){
    return(
        <div className={`w-full max-w-6xl mx-auto px-4 ${className}`}>
            {children}
        </div>
    );
}