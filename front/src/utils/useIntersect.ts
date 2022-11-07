/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useCallback } from 'react';
//  옵션 값을 지정한다.
type defaultOption = {
    root?: any;
    threshold?: number;
    rootMargin?: string;
};
const defaultOption = {
    root: null,
    threshold: 0.5,
    rootMargin: '0px',
};
//  커스텀 훅 부분
// 관찰 대상을 지정할 수 있도록 ref값을 useState 훅을 이용해 state로 관리해준다.
// 관찰자를 만들어준다.
// eslint-disable-next-line @typescript-eslint/ban-types
const useIntersect = (
    onIntersect: (entry: any, observer: any) => void,
    option?: defaultOption,
) => {
    const [ref, setRef] = useState<HTMLElement | null>(null);
    const checkIntersect = useCallback(([entry]: any, observer: any) => {
        if (entry.isIntersecting) {
            onIntersect(entry, observer);
        }
    }, []);
    // 관찰자가 언제 관찰하는지, 관찰을 종료하는지에 대해 로직을 구현해준다.
    useEffect(() => {
        let observer: IntersectionObserver;
        if (ref) {
            observer = new IntersectionObserver(checkIntersect, {
                ...defaultOption,
                ...option,
            });
            observer.observe(ref);
        }
        return () => observer && observer.disconnect();
    }, [
        ref,
        defaultOption.root,
        defaultOption.threshold,
        defaultOption.rootMargin,
        checkIntersect,
    ]);
    return [ref, setRef];
};

export default useIntersect;
