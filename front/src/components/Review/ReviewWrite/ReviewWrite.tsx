import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
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
    const [fileList, setFileList] = useState<FileList>();
    const [imgs, setImgs] = useState<Array<string | ArrayBuffer>>();
    const [inputValue, setInputValue] = useState<string>('첨부파일');

    useEffect(() => {
        const input = document.querySelector(
            '.upload-name',
        ) as HTMLInputElement;
        input.value = inputValue;
    }, [inputValue]);

    const onLoadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const fileArr: FileList = e.target.files;
            setFileList(fileArr);
            if (fileArr) {
                const newArr = Array.from(fileArr)
                    .map((el) => {
                        return el.name;
                    })
                    .join(', ');
                setInputValue(newArr);
                console.log(inputValue);
            }
        }

        if (fileList) {
            const fileArr: FileList = fileList;
            const fileURLs: (string | ArrayBuffer)[] = [];
            let file;
            if (fileArr) {
                const filesLength = fileArr?.length > 5 ? 5 : fileArr?.length;
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
                }
            }
        }
    };

    return (
        <Main>
            <MainMain>
                <MainMainHead>
                    <div>
                        <InputTextHead>
                            <h1>제목</h1>
                        </InputTextHead>
                        <InputTextContent>
                            <input
                                type="text"
                                placeholder="제목을 입력해주세요"
                            />
                        </InputTextContent>
                    </div>
                    <div>
                        <InputTextHead>
                            <h1>별점</h1>
                        </InputTextHead>
                        <InputTextContent>
                            <Star star={0} widthValue={29} heightValue={27} />
                        </InputTextContent>
                    </div>
                </MainMainHead>
                <MainContentInput>
                    {imgs && (
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
                    <textarea placeholder="내용을 입력해주세요" />
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
                        찾아보기
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
                    {imgs?.map((el, index) => {
                        return (
                            // eslint-disable-next-line react/no-array-index-key
                            <ImageBox key={index}>
                                <ImageInner
                                    src={el.toString()}
                                    alt="preview-img"
                                />
                            </ImageBox>
                        );
                    })}
                    <ImageBox>+</ImageBox>
                </ImageWrap>
            </MainFoot>
        </Main>
    );
};

const foot: React.FC = () => {
    return (
        <Header>
            <h1>리뷰 / 평점</h1>
        </Header>
    );
};

const ReviewWrite: React.FC = () => {
    const { id } = useParams();
    const [drinks, setDrinks] = useState<DrinkDetailType>(Object); // 술 상세 정보

    useEffect(() => {
        axios
            .get(
                `http://ec2-13-125-227-68.ap-northeast-2.compute.amazonaws.com:3000/review/${id}/spec`,
            )
            .then((res) => {
                setDrinks(res.data.alcohol);
            })

            .catch((err) => console.log(err));
    }, []);
    return (
        <ReviewTemplate
            Head={head}
            Main={main}
            Foot={foot}
            drinkInfo={drinks}
        />
    );
};

export default ReviewWrite;

const Header = styled.div`
    width: 100%;
    border-bottom: 1px solid #bbb6a8;
    > h1 {
        font-size: 30px;
        line-height: 30px;
        letter-spacing: -0.01em;
        color: #675b4f;
        margin-bottom: 40px;
    }
`;

const Main = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 31px;
    font-family: 'GmarketSansMedium';
`;

const MainMain = styled.div`
    width: 100%;
    height: 1134px;
    border: 1px solid #bbb6a8;
    border-radius: 18px;
    display: flex;
    flex-direction: column;
`;

const MainMainHead = styled.div`
    width: 100%;
    height: 197px;
    display: flex;
    flex-direction: column;
    > div {
        width: 100%;
        height: 97px;
        border-bottom: 1px solid #bbb6a8;
        display: flex;
        flex-direction: row;
        align-items: center;
        > div {
            font-weight: 400;
            font-size: 25px;
            line-height: 25px;
            letter-spacing: -0.01em;
            color: #675b4f;
        }
    }
`;

const InputTextHead = styled.div`
    width: 283px;
    height: 66px;
    border-right: 1px solid #bbb6a8;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InputTextContent = styled.div`
    margin-left: 43px;
    width: 776px;
    input {
        width: 776px;
        margin: 0;
        padding: 0;
        border: none;
        background: rgba(0, 0, 0, 0);
        font-weight: 400;
        font-size: 25px;
        line-height: 25px;
        letter-spacing: -0.01em;
        color: #675b4f;
        &:focus {
            outline: 0;
        }
        &::placeholder {
            color: #bbb6a8;
        }
    }
`;

const MainContentInput = styled.div`
    height: calc(100% - 197px);
    padding: 33px 42px;
    > textarea {
        width: 100%;
        height: 100%;
        font-weight: 400;
        font-size: 25px;
        line-height: 25px;
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
`;

const MainFoot = styled.div`
    margin-top: 37px;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const FootImageInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const FootImageInputBox = styled.div`
    width: 788px;
    height: 51px;
    border-radius: 18px;
    border: 1px solid #aaa19d;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 24px;
`;

const InputTextFile = styled.div`
    width: 263px;
    height: 33px;
    border-right: 1px solid #bbb6a8;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 25px;
    line-height: 25px;
    letter-spacing: -0.01em;
    color: #675b4f;
`;

const FileUploadBtn = styled.label`
    background: #8b7e6a;
    border: 1px solid #8b7e6a;
    border-radius: 18px;
    width: 159px;
    height: 51px;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #ffffff;
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
    &:nth-of-type(2) {
        margin-left: 15px;
        color: #8b7e6a;
        background: rgba(0, 0, 0, 0);
        border: 1px solid #8b7e6a;
    }
`;

const FilePrint = styled.div`
    margin-left: 43px;
    width: calc(100% - 263px);
    > input {
        width: calc(100% - 43px);
        border: none;
        background: rgba(0, 0, 0, 0);
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
        letter-spacing: -0.01em;
        color: #bbb6a8;
        font-family: 'GmarketSansLight';
    }
`;

const ImageWrap = styled.div`
    margin-top: 36px;
    display: flex;
    flex-direction: row;
    > div {
        box-sizing: border-box;
        width: 162px;
        height: 155px;
        border: 1px solid #aaa19d;
        border-radius: 18px;
        font-weight: 400;
        font-size: 50px;
        line-height: 50px;
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
`;

const ImageBox = styled.div`
    box-sizing: border-box;
    width: 162px;
    height: 155px;
    border: 1px solid #aaa19d;
    border-radius: 18px;
    font-weight: 400;
    font-size: 50px;
    line-height: 50px;
    letter-spacing: -0.01em;
    color: #bbb6a8;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    &:not(:last-of-type) {
        margin-right: 17px;
    }
`;

const ImageInner = styled.img`
    height: 100%;
    object-fit: cover;
`;

const ImageInsert = styled.div`
    height: 526px;
`;

const ImageInsertInsert = styled.div`
    > img {
        height: calc(100% - 36px);
    }
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    overflow-x: scroll;
    &::-webkit-scrollbar {
        width: 6px; /* 스크롤바의 너비 */
        height: 6px;
    }
    &::-webkit-scrollbar-thumb {
        height: 6px;
        background: #675b4f; /* 스크롤바의 색상 */

        border-radius: 10px;
    }
`;
