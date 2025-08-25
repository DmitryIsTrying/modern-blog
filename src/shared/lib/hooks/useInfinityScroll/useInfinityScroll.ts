import { MutableRefObject, useEffect, useRef } from 'react';

export interface UseInfinityScrollProps {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export const useInfinityScroll = ({ callback, triggerRef, wrapperRef }: UseInfinityScrollProps) => {
    useEffect(() => {
        if (!callback) return;

        const wrapperElement = wrapperRef.current;
        const triggerElement = triggerRef.current;

        const options: IntersectionObserverInit = {
            root: wrapperElement,
            rootMargin: '0px',
            threshold: 1.0,
        };

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                callback();
            }
        }, options);

        observer.observe(triggerElement);

        // eslint-disable-next-line consistent-return
        return () => {
            if (observer) observer.unobserve(triggerElement);
        };
    }, [triggerRef, wrapperRef, callback]);
};
