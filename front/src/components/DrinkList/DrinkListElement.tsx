import React from 'react';
import styled from 'styled-components';

const DrinkListElement: React.FC = () => {
    return (
        <DrinkElementWrap>
            <ImageWrap>
                <img
                    src="https://s3-alpha-sig.figma.com/img/a2d7/f1fd/68c9f1e40c24846da055eebadf32c769?Expires=1659916800&Signature=L9Qn~O9D03tSsA-ln1QjZCeh16NQL-DJCjMuxdrcvyNFoFqU-XY5RmN28BxajeZgQMK7ZRO4G1kODeoLnc2-yRhIhRM12H00L5Wuvvt~nEGPNhcyacVd5f8nFDPkpczdXxrTBcuuNVZxxbcJSrmf4vOU10CGrv543QxIkS~ywjIb4CDRbjIO67icRDKaBvwlXrSovu9Ave1ZZid7-3ShN~oz5AhTwzDawiPzEHWqkwsfQilkLkK4acJ6sWaGIk1SSbZ-Z2yDNCQysoVQfyuZijUMtlclG~08nNaJZmfeX~4PMpvtnmum3YCd8DMgawqwl4mPKXJKAdp4qgtRF1In~w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="drink_image"
                />
            </ImageWrap>
            <Info>
                <InfoHead>
                    <h1>담은</h1>
                    <h2>6.5%</h2>
                </InfoHead>
                <InfoFoot>
                    <h1>$ 11000원대</h1>
                </InfoFoot>
            </Info>
        </DrinkElementWrap>
    );
};

export default DrinkListElement;

const DrinkElementWrap = styled.div`
    width: 300px;
    height: 454px;
    padding: 29px;
    &:hover {
        background: rgba(217, 217, 217, 0.4);
        border-radius: 18px;
    }
    cursor: pointer;
`;

const ImageWrap = styled.div`
    height: 323px;
    width: 100%;
    margin-bottom: 52px;
    img {
        height: 323px;
        width: 100%;
    }
`;

const Info = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const InfoHead = styled.div`
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #bbb6a8;
    display: flex;
    justify-content: space-between;
    margin-bottom: 21px;
    color: #8b7e6a;
    font-size: 20px;
`;

const InfoFoot = styled.div`
    font-family: 'GmarketSansLight';
    color: #8b7e6a;
    font-size: 18px;
`;
