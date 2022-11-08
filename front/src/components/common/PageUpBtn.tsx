import React from 'react';
import styled from 'styled-components';

const PageUpBtn: React.FC = () => {
    return (
        <PageUpButton>
            <div
                onClick={() =>
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    })
                }
                aria-hidden
            >
                <svg
                    width="61"
                    height="64"
                    viewBox="0 0 61 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0.999083 31.678C0.999082 48.6209 14.1496 62.3559 30.3716 62.3559C46.5936 62.3559 59.7441 48.6209 59.7441 31.678C59.7441 14.735 46.5936 0.999999 30.3716 0.999999C14.1496 0.999998 0.999084 14.735 0.999083 31.678Z"
                        fill="#675B4F"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                    />
                    <path
                        d="M9.27478 30.0593L30.6589 10.474L52.043 30.0593"
                        fill="#675B4F"
                    />
                    <path
                        d="M9.27478 30.0593L30.6589 10.474L52.043 30.0593"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                    />
                    <path
                        d="M30.6592 10.474L30.6592 53.8216"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                    />
                </svg>
            </div>
        </PageUpButton>
    );
};

export default PageUpBtn;

const PageUpButton = styled.div`
    display: none;

    svg {
        cursor: pointer;
    }
    @media (max-width: 767px) {
        position: fixed;
        right: 1.563em;
        display: block;
        //display: flex;
        // justify-content: flex-end;
        // margin-bottom: 3.228em;
        bottom: 3.188em;
    }
`;
