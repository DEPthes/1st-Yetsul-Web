import React, { useEffect } from 'react';
import ShareKakao from './ShareKakao';

const ShareKakaoBtn: React.FC = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return <ShareKakao />;
};

export default ShareKakaoBtn;
