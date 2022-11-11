import React from 'react';

const TodayDate: React.FC = () => {
    const today = new Date();
    return (
        <div>
            {today.getFullYear()}/
            {today.getMonth() < 9
                ? `0${today.getMonth() + 1}`
                : `${today.getMonth() + 1}`}
            /{today.getDate() < 10 ? `0${today.getDate()}` : today.getDate()}
        </div>
    );
};
export default TodayDate;
