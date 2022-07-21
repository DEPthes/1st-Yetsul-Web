import React from 'react';
import styled from 'styled-components';

const Header: React.FC = () => {
    return (
        <HeaderStyle>
            <LeftHeaed>
                <img
                    className="logo_img"
                    src="https://s3-alpha-sig.figma.com/img/c720/1fc5/65001d3c20ef9c48659dbec5b8379901?Expires=1659312000&Signature=R~EEeDKNfUfk6v~VGGZFXSH-UgtMElsPATKJMWdTZWu3bumd4y3Qmhn8AyGMIOJgMbGoNC3gJVc-u1WEd11Ot9crY9FzD8ncHp7WYSHLPLiiFgYejtH7dwb5jZI~VxyhrWJzVDykmnS4s8apIf65ehjhryLL4urNUCEe~2DzXLj6YZ117bIF4j9cCCIIqDcHmQ0Xp6waz9MVQL2I2-93qKl6anB~kaISgP4OTEh1-h8U9-RsjkOYUVE5JmLM185CYp19buYqTMoCo7HCtIcZwZlcyFoQL~LH6Nmy-IWKPpsOHrthlM11VJC1GBBJvf2QRYI59XZo7gMT23WGnQhrog__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="main logo"
                />
                <img
                    className="logo_text"
                    src="https://s3-alpha-sig.figma.com/img/9585/6086/111126df2f993ddcd0e020839b351d4a?Expires=1659312000&Signature=JhIkb0qQSFyYlpc9sLtbNeq2IvfmAFPZyjVEYdBQvz94dHG3dkSXOr6X9BXpAr3E4cQTMd99R22Bh-GpAJ1xKBic0wvzjt2QZYUVCt6A8X3jbO5dzBmAaWRnc0L6vOAk55I7Ffi0wnk8gkseXe3kqH6KUnUE3kT3td3U6CwPsLIMRXQTW2xD-j~~ciNthX6YMbhftC~SM0uWCfyAmeQJOQOQak6DGaZ-XaeOcdwUKtGzpmtcQuxkDbLgIYE6fb~sn5IBy1HYaJ~bYli6bjmR4k-MiH6QcndY0AKZWiUeOvw4dK6Pysm-MEPBgHu2VKM90-oBk8DtI0o6QcgFLIX92w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="main text"
                />
            </LeftHeaed>
            <HeaderCategory>
                <HeaderUl>
                    <li className="active">홈</li>
                    <li>서비스 소개</li>
                    <li>전통주 추천</li>
                    <li>옛술의 전당</li>
                    <li>이달의 전통주</li>
                    <li>문의사항</li>
                </HeaderUl>
            </HeaderCategory>
            <RightHeaed>
                <p>로그인</p>
                <p>내정보</p>
            </RightHeaed>
        </HeaderStyle>
    );
};

export default Header;

const HeaderStyle = styled.header`
    width: 100%;
    height: auto;
    position: fixed;
    z-index: 999;
`;

const HeaderCategory = styled.div`
    position: absolute;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeaderUl = styled.ul`
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    margin-top: 80px;
    margin-bottom: 49px;
    li {
        margin-right: 80px;
        font-size: 18px;
        line-height: 18px;
        font-family: 'GmarketSansMedium';
        font-weight: 400;
        display: flex;
        align-items: center;
        color: #8e8372;
        cursor: pointer;
    }
    li:last-of-type {
        margin-right: 0;
    }
    li.active {
        color: #454038;
    }
`;

const LeftHeaed = styled.div`
    position: absolute;
    margin-left: 88px;
    margin-top: 77px;
    display: flex;
    flex-direction: column;
    .logo_img {
        width: 112px;
        height: 106px;
        margin-bottom: 15px;
    }
    .logo_text {
        width: 112px;
        height: 27px;
    }
`;

const RightHeaed = styled.div`
    position: absolute;
    right: 0;
    display: flex;
    margin-right: 77px;
    margin-top: 80px;
    p {
        margin: 0;
        font-size: 18px;
        line-height: 18px;
        color: #8e8372;
        cursor: pointer;
    }
    p:first-of-type {
        margin-right: 40px;
    }
`;
