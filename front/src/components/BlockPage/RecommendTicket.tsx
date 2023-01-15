import React, { useEffect } from 'react';

import BackgroundTemplate from '../common/BackgroundTemplate';
import SecondMain from '../Main/SecondMain';

const RecommendTicket = () => {
    useEffect(() => {
        $('#ticket').css('transform', 'translateY(0%)');
        return () => {
            $('#ticket').css('transform', 'translateY(90%)');
        };
    }, []);
    return (
        <BackgroundTemplate heightValue="100%">
            <SecondMain />
        </BackgroundTemplate>
    );
};

export default RecommendTicket;
