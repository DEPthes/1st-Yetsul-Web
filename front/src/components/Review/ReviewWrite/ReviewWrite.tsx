import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getAccessToken } from '../../../services/tokenControl';
import Star from '../../common/Star';
import { DrinkDetailType } from '../../Detail/DrinkDetail';
import ReviewTemplate from '../ReviewTemplate';

const head: React.FC = () => {
    return (
        <Header>
            <h1>리뷰 / 평점</h1>
        </Header>
    );
};

const main: React.FC = () => {
    const [fileList, setFileList] = useState<File[]>();
    const [imgs, setImgs] = useState<Array<string | ArrayBuffer>>([]);
    const [inputValue, setInputValue] = useState<string>('첨부파일');
    const [starCount, setStarCount] = useState<number>(0);
    const [title, setTitle] = useState<string>('');
    const [contents, setContents] = useState<string>('');
    const [isWrite, setIsWrite] = useState<boolean>(false);
    let formData = new FormData();
    const { id } = useParams();

    const titleChange = (e: React.FormEvent<HTMLInputElement>): void => {
        const target = e.target as HTMLTextAreaElement;
        setTitle(target.value);
    };
    const contentsChange = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        const target = e.target as HTMLTextAreaElement;
        setContents(target.value);
    };

    const appendFormData = () => {
        if (fileList) {
            // eslint-disable-next-line array-callback-return
            Array.from(fileList).map((file) => formData.append('file', file));
        }
    };

    const postReview = () => {
        if (title === '' || contents === '' || starCount === 0) {
            // eslint-disable-next-line no-alert
            alert('제목, 별점, 내용을 모두 입력해주세요.');
            return;
        }
        if (formData) {
            formData = new FormData();
        }
        appendFormData();
        formData.append('title', title);
        formData.append('content', contents);
        formData.append('star', starCount.toString());

        axios
            .post(`http://depth-server.herokuapp.com/review/${id}`, formData, {
                headers: { Authorization: `Bearer ${getAccessToken()}` },
            })
            .then(() => {
                // eslint-disable-next-line no-alert
                alert('리뷰작성이 완료되었습니다.');
                window.location.replace(`/list/${id}/spec`);
            });
    };

    const temporarySave = () => {
        if (title === '' || contents === '' || starCount === 0) {
            // eslint-disable-next-line no-alert
            alert('제목, 별점, 내용을 모두 입력해주세요.');
            return;
        }
        if (formData) {
            formData = new FormData();
        }
        appendFormData();
        formData.append('title', title);
        formData.append('content', contents);
        formData.append('star', starCount.toString());

        axios
            .post(
                `http://ec2-13-125-227-68.ap-northeast-2.compute.amazonaws.com:3000/review/${id}/temporary`,
                formData,
                {
                    headers: { Authorization: `Bearer ${getAccessToken()}` },
                },
            )
            .then(() => {
                // eslint-disable-next-line no-alert
                alert('임시저장 되었습니다.');
            });
    };

    useEffect(() => {
        const input = document.querySelector(
            '.upload-name',
        ) as HTMLInputElement;
        input.value = inputValue;
    }, [inputValue]);

    useEffect(() => {
        if (fileList) {
            const fileArr: File[] = fileList;
            const fileURLs: (string | ArrayBuffer)[] = [];
            let file;

            if (fileArr) {
                console.log(fileArr);
                const filesLength = fileArr?.length > 5 ? 5 : fileArr?.length;
                if (filesLength === 0) {
                    setImgs([]);
                    setInputValue('');
                }
                for (let i = 0; i < filesLength; i += 1) {
                    file = fileArr[i];
                    const reader = new FileReader();
                    reader.onload = () => {
                        if (reader.result) {
                            fileURLs[i] = reader.result;
                            setImgs([...fileURLs]);
                        }
                    };
                    reader.readAsDataURL(file);
                    const newArr = Array.from(fileArr)
                        .map((el) => {
                            return el.name;
                        })
                        .join(', ');
                    setInputValue(newArr);
                }
            }
        }
    }, [fileList]);

    const onLoadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.files);
        if (e.target.files) {
            const fileArr: FileList = e.target.files;
            const newArr: File[] = [];

            Array.from(fileArr).forEach((file) => newArr.push(file));

            if (fileList && fileList.concat(newArr).length > 5) {
                // eslint-disable-next-line no-alert
                alert('사진은 최대 5개 까지만 올릴 수 있습니다.');
                return;
            }
            setFileList(fileList ? fileList.concat(newArr) : newArr);
        }
    };

    const setStar = (star: number) => {
        setStarCount(star);
    };

    useEffect(() => {
        if (
            title.length > 0 ||
            contents.length > 0 ||
            fileList ||
            starCount !== 0
        ) {
            setIsWrite(true);
        } else {
            setIsWrite(false);
        }
    }, [title, contents, fileList, starCount]);

    return (
        <Main>
            <MainMain write={isWrite}>
                <MainMainHead write={isWrite}>
                    <div>
                        <InputTextHead write={isWrite}>
                            <h1>제목</h1>
                        </InputTextHead>
                        <InputTextContent>
                            <input
                                type="text"
                                placeholder="제목을 입력해주세요"
                                onChange={titleChange}
                            />
                        </InputTextContent>
                    </div>
                    <div>
                        <InputTextHead write={isWrite}>
                            <h1>별점</h1>
                        </InputTextHead>
                        <InputStar>
                            <Star star={starCount} widthValue={1.8125} />
                            <div>
                                <div onClick={() => setStar(1)} aria-hidden />
                                <div onClick={() => setStar(2)} aria-hidden />
                                <div onClick={() => setStar(3)} aria-hidden />
                                <div onClick={() => setStar(4)} aria-hidden />
                                <div onClick={() => setStar(5)} aria-hidden />
                            </div>
                        </InputStar>
                    </div>
                </MainMainHead>
                <MainContentInput isFile={!!fileList}>
                    {imgs.length > 0 && (
                        <ImageInsert>
                            <ImageInsertInsert>
                                {imgs.map((el, index) => {
                                    return (
                                        <img
                                            // eslint-disable-next-line react/no-array-index-key
                                            key={index}
                                            src={el.toString()}
                                            alt="preview-img"
                                        />
                                    );
                                })}
                            </ImageInsertInsert>
                        </ImageInsert>
                    )}
                    <textarea
                        placeholder="내용을 입력해주세요"
                        onChange={contentsChange}
                    />
                </MainContentInput>
            </MainMain>
            <MainFoot>
                <FootImageInput>
                    <FootImageInputBox>
                        <InputTextFile>
                            <h1>이미지</h1>
                        </InputTextFile>
                        <FilePrint>
                            <input className="upload-name" readOnly />
                        </FilePrint>
                    </FootImageInputBox>
                    <FileUploadBtn htmlFor="file">
                        <h1>찾아보기</h1>

                        <input
                            type="file"
                            id="file"
                            multiple
                            accept="image/jpg,image/png,image/jpeg,image/gif"
                            onChange={onLoadFile}
                        />
                    </FileUploadBtn>
                </FootImageInput>
                <ImageWrap>
                    {imgs.map((el, index) => {
                        return (
                            // eslint-disable-next-line react/no-array-index-key
                            <ImageBox key={index}>
                                <CloseBtn>
                                    <svg
                                        width="38"
                                        height="39"
                                        viewBox="0 0 38 39"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        onClick={() => {
                                            if (fileList) {
                                                const newArr: File[] = [];
                                                Array.from(fileList)
                                                    .filter(
                                                        (_file, idx) =>
                                                            idx !== index,
                                                    )
                                                    .forEach((file) =>
                                                        newArr.push(file),
                                                    );
                                                setFileList(newArr);
                                            }
                                        }}
                                    >
                                        <path
                                            d="M11.1003 26.6909L25.9046 11.8866"
                                            stroke="black"
                                            strokeWidth="1.3"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M11.1003 11.8862L25.9046 26.6905"
                                            stroke="black"
                                            strokeWidth="1.3"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </CloseBtn>
                                <ImageInner
                                    src={el.toString()}
                                    alt="preview-img"
                                />
                            </ImageBox>
                        );
                    })}
                    {imgs.length < 5 && <ImageBox>+</ImageBox>}
                </ImageWrap>
            </MainFoot>
            <Foot>
                <button type="button" onClick={postReview}>
                    <p>등록하기</p>
                </button>
                <button type="button" onClick={temporarySave}>
                    <p>임시저장</p>
                </button>
            </Foot>
        </Main>
    );
};

type writeType = {
    write: boolean;
};

const CloseBtn = styled.div`
    position: absolute;
    cursor: pointer;
    top: 0.188em;
    right: 0.188em;
    > svg {
        width: 1.75em;
        height: 1.75em;
        > path {
            stroke: #fff;
            stroke-width: 2.3;
        }
    }
`;

const Foot = styled.div`
    margin-top: 10.563em;
    margin-bottom: 10em;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    > button:first-of-type {
        width: 9.938em;
        height: 3.188em;
        background: #8b7e6a;
        border: 1px solid #8b7e6a;
        border-radius: 1.125em;
        margin-right: 1.188em;
        cursor: pointer;
        > p {
            font-family: 'GmarketSansLight';
            font-style: normal;
            font-weight: 400;
            font-size: 1.125em;
            line-height: 1em;
            letter-spacing: -0.01em;
            color: #ffffff;
        }
    }
    > button:nth-of-type(2) {
        width: 9.938em;
        height: 3.188em;
        border: 1px solid #8b7e6a;
        border-radius: 1.125em;
        cursor: pointer;
        > p {
            font-family: 'GmarketSansLight';
            font-style: normal;
            font-weight: 400;
            font-size: 1.125em;
            line-height: 1em;
            letter-spacing: -0.01em;
            color: #675b4f;
        }
    }
    @media (max-width: 767px) {
        margin-top: 2.563em;
        margin-bottom: 4.125em;
        > button {
            width: 5.409em !important;
            height: 2.063em !important;
            border-radius: 0.625em !important;
            > p {
                font-size: 0.813em !important;
                line-height: 1em !important;
            }
        }
        > button:first-of-type {
            margin-right: 0.668em !important;
        }
    }
`;

const ReviewWrite: React.FC = () => {
    const { id } = useParams();
    const [drinks, setDrinks] = useState<DrinkDetailType>(Object); // 술 상세 정보
    const [reviewCount, setReviewCount] = useState<number>(0);

    useEffect(() => {
        axios
            .get(
                `http://ec2-13-125-227-68.ap-northeast-2.compute.amazonaws.com:3000/review/${id}/spec`,
            )
            .then((res) => {
                setDrinks(res.data.alcohol);
                setReviewCount(res.data.reviewsWithUserInfo.length);
            })

            .catch((err) => console.log(err));
    }, []);
    return (
        <ReviewTemplate
            Head={head}
            Main={main}
            drinkInfo={drinks}
            reviewCount={reviewCount}
        />
    );
};

export default ReviewWrite;

const Header = styled.div`
    width: 100%;
    border-bottom: 1px solid #bbb6a8;
    margin-bottom: 1.938em;
    > h1 {
        font-size: 1.563em;
        line-height: 1em;
        letter-spacing: -0.01em;
        color: #675b4f;
        margin-bottom: 1em;
    }
    @media (max-width: 767px) {
        > h1 {
            font-size: 0.938em;
            margin-bottom: 1em;
            line-height: 1em;
        }
        margin-bottom: 0.813em;
    }
`;

const Main = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 1.938em;
    font-family: 'GmarketSansMedium';
    @media (max-width: 767px) {
        margin-top: 0.938em;
    }
`;

const MainMain = styled.div<writeType>`
    width: 100%;
    height: 70.875em;
    border: ${(props) =>
        props.write ? '1px solid #675B4F' : '1px solid #bbb6a8'};
    border-radius: 1.125em;
    display: flex;
    flex-direction: column;
    @media (max-width: 767px) {
        height: 28.188em;
        border-radius: 0.75em;
    }
`;

const MainMainHead = styled.div<writeType>`
    width: 100%;
    height: 10.125em;
    display: flex;
    flex-direction: column;
    > div {
        width: 100%;
        height: 5.25em;
        border-bottom: ${(props) =>
            props.write ? '1px solid #675B4F' : '1px solid #bbb6a8'};
        display: flex;
        flex-direction: row;
        align-items: center;
        > div {
            font-weight: 400;
            font-size: 1.25em;
            line-height: 1em;
            letter-spacing: -0.01em;
            color: #675b4f;
        }
    }
    @media (max-width: 767px) {
        height: 5.78em;
        > div {
            height: 2.905em !important;
            > div {
                font-size: 0.813em !important;
                line-height: 1em !important;
            }
        }
    }
`;

const InputTextHead = styled.div<writeType>`
    width: 13.063em;
    height: 2.75em;
    border-right: ${(props) =>
        props.write ? '1px solid #675B4F' : '1px solid #bbb6a8'};
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 767px) {
        width: 4.938em;
        height: 1.875em;
    }
`;

const InputStar = styled.div`
    margin-left: 2.625em;
    width: 25.688em;
    position: relative;
    > div:nth-of-type(2) {
        position: absolute;
        display: flex;
        flex-direction: row;
        top: 0.1em;
        div {
            cursor: pointer;
            width: 1.813em;
            height: 1.813em;
            margin-right: 1.1em;
        }
    }
    @media (max-width: 767px) {
        margin-left: 1.063em;
        width: 14.313em;
        > div {
            > div {
                > svg {
                    width: 1.063em !important;
                }
            }
        }
        > div:nth-of-type(2) {
            top: 0.375em;
            > div {
                width: 1.063em !important;
                height: 1.063em !important;
                margin-right: 0.375em;
            }
        }
    }
`;

const InputTextContent = styled.div`
    margin-left: 2.625em;
    width: 25.688em;
    input {
        position: relative;
        width: 100%;
        margin: 0;
        padding: 0;
        border: none;
        background: rgba(0, 0, 0, 0);
        font-weight: 400;
        font-size: 1.25em;
        line-height: 1em;
        letter-spacing: -0.01em;
        color: #675b4f;
        &:focus {
            outline: 0;
        }
        &::placeholder {
            color: #bbb6a8;
        }
    }
    @media (max-width: 767px) {
        margin-left: 1.125em;
        width: 14.688em;
        input {
            width: 13.438em;
            font-size: 0.813em;
            line-height: 1em;
            overflow-y: hidden;
        }
    }
`;

const MainContentInput = styled.div<{ isFile: boolean }>`
    height: calc(100% - 10.125em);
    padding: 2.688em 1.5em;
    > textarea {
        width: 100%;

        height: ${(props) => (props.isFile ? `calc(100% - 224px)` : `100%`)};
        font-weight: 400;
        font-size: 1.85em;
        line-height: 1em;
        letter-spacing: -0.01em;
        color: #675b4f;
        margin: 0;
        padding: 0;
        border: none;
        background: rgba(0, 0, 0, 0);
        resize: none;
        &:focus {
            outline: 0;
        }
        &::placeholder {
            color: #bbb6a8;
        }
    }
    @media (max-width: 767px) {
        height: calc(100% - 5.25em);
        padding: 1.25em 0.97em;
        > textarea {
            font-size: 0.938em;
        }
    }
`;

const MainFoot = styled.div`
    margin-top: 2.313em;
    display: flex;
    flex-direction: column;
    width: 100%;
    @media (max-width: 767px) {
        margin-top: 0.688em;
    }
`;

const FootImageInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const FootImageInputBox = styled.div`
    width: calc(100% - 9.938em - 1em);
    height: 3.188em;
    border-radius: 1.125em;
    border: 1px solid #aaa19d;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 0.875em;
    @media (max-width: 767px) {
        height: 2.313em;
        width: calc(100% - 4.625em - 1em);
        border-radius: 0.625em;
        margin-right: 0;
    }
`;

const InputTextFile = styled.div`
    width: 12.438em;
    height: 2.063em;
    border-right: 1px solid #bbb6a8;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        font-weight: 400;
        font-size: 1.125em;
        line-height: 1em;
        letter-spacing: -0.01em;
        color: #bbb6a8;
    }

    @media (max-width: 767px) {
        h1 {
            font-size: 0.75em;
            line-height: 1em;
        }

        width: 4.688em;
        height: 1.375em;
    }
`;

const FileUploadBtn = styled.label`
    background: #8b7e6a;
    border: 1px solid #8b7e6a;
    border-radius: 1.125em;
    h1 {
        font-weight: 400;
        font-size: 0.938em;
        line-height: 1em;
        letter-spacing: -0.01em;
        color: #ffffff;
    }
    width: 9.938em;
    height: 3.188em;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    input[type='file'] {
        position: absolute;
        width: 0;
        height: 0;
        padding: 0;
        overflow: hidden;
        border: 0;
    }
    @media (max-width: 767px) {
        width: 4.625em;
        height: 2.313em;

        border-radius: 0.625em;
        h1 {
            font-size: 0.813em;
            line-height: 1em;
        }
    }
`;

const FilePrint = styled.div`
    margin-left: 2.688em;
    width: calc(100% - 16.438em);
    > input {
        width: calc(100% - 2.389em);
        border: none;
        background: rgba(0, 0, 0, 0);
        font-weight: 400;
        font-size: 1.125em;
        line-height: 100%;
        letter-spacing: -0.01em;
        color: #bbb6a8;
        font-family: 'GmarketSansLight';
    }
    @media (max-width: 767px) {
        margin-left: 1.25em;
        width: calc(100% - 7.5em);
        > input {
            font-size: 0.75em;
            width: calc(100% - 1.667em);
        }
    }
`;

const ImageWrap = styled.div`
    margin-top: 2.25em;
    display: flex;
    flex-direction: row;
    > div {
        box-sizing: border-box;
        width: 3.24em;
        height: 3.1em;
        border: 1px solid #aaa19d;
        border-radius: 0.36em;
        font-weight: 400;
        font-size: 3.125em;
        line-height: 1em;
        letter-spacing: -0.01em;
        color: #bbb6a8;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: default;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    @media (max-width: 767px) {
        margin-top: 0.688em;
        > div {
            border-radius: 0.4em;
            width: 3.08em;
            height: 2.96em;
            font-size: 1.563em;
            line-height: 1em;
        }
    }
`;

const ImageBox = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 3.24em;
    height: 3.1em;
    border: 1px solid #aaa19d;
    border-radius: 0.36em;
    font-weight: 400;
    font-size: 3.125em;
    line-height: 1em;
    letter-spacing: -0.01em;
    color: #bbb6a8;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    &:not(:last-of-type) {
        margin-right: calc((100% - (3.24em * 5)) / 4);
    }
    @media (max-width: 767px) {
        border-radius: 0.4em;
        width: 3.08em;
        height: 2.96em;
        font-size: 1.563em;
        line-height: 1em;
        &:not(:last-of-type) {
            margin-right: calc((100% - (3.08em * 5)) / 4);
        }
    }
`;

const ImageInner = styled.img`
    height: 100%;
    object-fit: cover;
`;

const ImageInsert = styled.div`
    height: 29.063em;
    margin-bottom: 3.938em;
    @media (max-width: 767px) {
        height: 12.5em;
        margin-bottom: 1.5em;
    }
`;

const ImageInsertInsert = styled.div`
    > img {
        height: 100%;
        margin-bottom: 1.125em;
        margin-right: 1.125em;
    }
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    overflow-x: scroll;
    overflow-y: hidden;
    &::-webkit-scrollbar {
        width: 0.375em; /* 스크롤바의 너비 */
        height: 0.375em;
    }
    &::-webkit-scrollbar-thumb {
        height: 0.375em;
        background: #675b4f; /* 스크롤바의 색상 */

        border-radius: 0.625em;
    }
    @media (max-width: 767px) {
        > img {
            margin-bottom: 0.5em;
            margin-right: 0.5em;
        }
        &::-webkit-scrollbar {
            width: 0.125em; /* 스크롤바의 너비 */
            height: 0.125em;
        }
        &::-webkit-scrollbar-thumb {
            height: 0.125em;
            border-radius: 0.313em;
        }
    }
`;
