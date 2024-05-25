import { useState, useEffect, RefObject } from 'react';

function useOnScreen(ref: RefObject<HTMLElement>, rootMargin: string = '0px'): boolean {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update our state when observer callback fires
                if (entry.isIntersecting) {
                    setIntersecting(true);
                    observer.unobserve(ref.current!);
                }
            },
            {
                rootMargin
            }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            observer.unobserve(ref.current!);
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount

    return isIntersecting;
}

export default useOnScreen;
