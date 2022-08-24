import React from 'react';

const Clock: React.FC = () => {
    const today = new Date();
    return (
        <div>
            {today.getFullYear()}/
            {today.getMonth() < 10
                ? `0${today.getMonth() + 1}`
                : today.getMonth()}
            /{today.getDate() < 10 ? `0${today.getDate()}` : today.getDate()}
        </div>
    );
};
export default Clock;
