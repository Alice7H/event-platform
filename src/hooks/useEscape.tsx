import { useEffect } from 'react';

export default function useEscape(onEscape : () => void): void{
  useEffect(() => {
      const handleEsc = (event: KeyboardEvent) => {
        if (event.key === "Escape") 
            onEscape();
      };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);
    return;
}
