import React from 'react';
import styled from 'styled-components';

type PageType = {
    total: number; // 전체 게시물 수
    limit: number; // 페이지 당 보여줄 게시물 수
    page: number; // 현재 페이지
    setPage: (page: number) => void;
    marginValue: number;
};

const MyPagination = ({
    total,
    limit,
    page,
    setPage,
    marginValue,
}: PageType) => {
    const numPages = Math.ceil(total / limit); // paginator 수

    return (
        <>
            <Nav marginValue={marginValue}>
                {Array(numPages)
                    .fill(undefined)
                    .map((v, i) => (
                        <Button
                            // eslint-disable-next-line react/no-array-index-key
                            key={i + 1}
                            onClick={() => setPage(i + 1)}
                            aria-current={page === i + 1 ? 'page' : undefined}
                        >
                            {i + 1}
                        </Button>
                    ))}
            </Nav>
        </>
    );
};

const Nav = styled.nav<{ marginValue: number }>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-top: ${(props) => props.marginValue}px;
`;

const Button = styled.button`
    border: none;
    background-color: transparent;
    margin: 0;
    color: #8b7e6a;
    font-size: 18px;
    &:hover {
        cursor: pointer;
    }
    &[aria-current] {
        background: #8b7e6a;
        width: 27px;
        height: 27px;
        border-radius: 50%;
        color: #fff;
    }
`;

export default MyPagination;
