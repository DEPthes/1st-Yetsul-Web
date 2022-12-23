import React from 'react';
import styled from 'styled-components';

type SourceType = {
    title: string;
};

const Source: React.FC<SourceType> = ({ title }) => {
    const SourceHref = () => {
        switch (title) {
            case '운수 좋은 날':
                return (
                    <AHref
                        href="http://www.yes24.com/Product/Goods/244611"
                        target="_blank"
                        rel="noreferrer"
                    >
                        &lt;운수 좋은 날, 2001, 꿈소담이&gt;
                    </AHref>
                );
            case '홍길동전':
                return (
                    <AHref
                        href="http://www.yes24.com/Product/Goods/356559"
                        target="_blank"
                        rel="noreferrer"
                    >
                        &lt;홍길동전, 2003, 창비&gt;
                    </AHref>
                );
            case '구운몽':
                return (
                    <AHref
                        href="http://www.yes24.com/Product/Goods/3593274"
                        target="_blank"
                        rel="noreferrer"
                    >
                        &lt;구운몽, 2009, 파란자전거&gt;
                    </AHref>
                );
            case '관동별곡':
                return (
                    <AHref
                        href="http://www.yes24.com/Product/Goods/8772688"
                        target="_blank"
                        rel="noreferrer"
                    >
                        &lt;관동별곡 8백리, 2013, 청동거울&gt;
                    </AHref>
                );
            case '난쟁이가 쏘아올린 작은 공':
                return (
                    <AHref
                        href="http://www.yes24.com/Product/Goods/141729"
                        target="_blank"
                        rel="noreferrer"
                    >
                        &lt;난장이가 쏘아올린 작은 공, 2000, 이성과 힘&gt;
                    </AHref>
                );
            case '심청전':
                return (
                    <AHref
                        href="http://www.yes24.com/Product/Goods/356553"
                        target="_blank"
                        rel="noreferrer"
                    >
                        &lt;심청전, 2003, 창비&gt;
                    </AHref>
                );
            case '흥부전':
                return (
                    <AHref
                        href="http://www.yes24.com/Product/Search?domain=ALL&query=%EC%9B%85%EC%A7%84%EC%A3%BC%EB%8B%88%EC%96%B4%20%ED%9D%A5%EB%B6%80%EC%A0%84"
                        target="_blank"
                        rel="noreferrer"
                    >
                        &lt;흥부전, 2016, 웅진주니어&gt;
                    </AHref>
                );
            case '장화홍련전':
                return (
                    <AHref
                        href="http://www.yes24.com/Product/Goods/11933075"
                        target="_blank"
                        rel="noreferrer"
                    >
                        &lt;장화홍련전, 2013, 웅진주니어&gt;
                    </AHref>
                );
            case '극한직업':
                return (
                    <AHref
                        href="https://movie.naver.com/movie/bi/mi/basic.naver?code=167651"
                        target="_blank"
                        rel="noreferrer"
                    >
                        &lt;극한직업, 2018, 어바웃필름&gt;
                    </AHref>
                );
            case '써니':
                return (
                    <AHref
                        href="https://movie.naver.com/movie/bi/mi/basic.naver?code=76016"
                        target="_blank"
                        rel="noreferrer"
                    >
                        &lt;써니, 2011, 알로하픽쳐스, 토일렛픽쳐스&gt;
                    </AHref>
                );
            case '단군신화':
                return (
                    <AHref
                        href="http://www.yes24.com/Product/Goods/57953173"
                        target="_blank"
                        rel="noreferrer"
                    >
                        &lt;단군신화, 2009, 현암사&gt;
                    </AHref>
                );
            case '사랑손님과 어머니':
                return (
                    <AHref
                        href="https://movie.naver.com/movie/bi/mi/basic.naver?code=13801"
                        target="_blank"
                        rel="noreferrer"
                    >
                        &lt;사랑방 손님과 어머니, 1961, 신필름&gt;
                    </AHref>
                );
            case '명량':
                return (
                    <AHref
                        href="https://movie.naver.com/movie/bi/mi/basic.naver?code=93756"
                        target="_blank"
                        rel="noreferrer"
                    >
                        &lt;명량, 2014, 빅스톤픽쳐스&gt;
                    </AHref>
                );
            case '리틀 포레스트':
                return (
                    <AHref
                        href="https://movie.naver.com/movie/bi/mi/basic.naver?code=154449"
                        target="_blank"
                        rel="noreferrer"
                    >
                        &lt;리틀 포레스트, 2018, 영화사 수박&gt;
                    </AHref>
                );
            case '기생충':
                return (
                    <AHref
                        href="https://movie.naver.com/movie/search/result.naver?query=%EA%B8%B0%EC%83%9D%EC%B6%A9&section=all&ie=utf8"
                        target="_blank"
                        rel="noreferrer"
                    >
                        &lt;기생충, 2019, 바른손E&amp;A&gt;
                    </AHref>
                );
            case '아가씨':
                return (
                    <AHref
                        href="https://movie.naver.com/movie/bi/mi/basic.naver?code=123519"
                        target="_blank"
                        rel="noreferrer"
                    >
                        &lt;아가씨, 2016, 모호필름, 용필름&gt;
                    </AHref>
                );
            case '호두까기 인형':
                return (
                    <AHref
                        href="https://www.sejongpac.or.kr/portal/performance/performance/view.do?performIdx=31549&menuNo=200004"
                        target="_blank"
                        rel="noreferrer"
                    >
                        &lt;호두까기 인형, 2021, E.T.A Hoffmann&gt;
                    </AHref>
                );
            case '위대한 개츠비':
                return (
                    <AHrefLong
                        href="https://movie.naver.com/movie/bi/mi/basic.naver?code=88461"
                        target="_blank"
                        rel="noreferrer"
                    >
                        &lt;The Great Gatsby, 2013, Warner Bros., Village
                        Roadshow Pictures&gt;
                    </AHrefLong>
                );
            case '타이타닉':
                return (
                    <AHref
                        href="https://movie.naver.com/movie/bi/mi/basic.naver?code=18847"
                        target="_blank"
                        rel="noreferrer"
                    >
                        &lt;Titanic, 1997, Lightstorm Entertainment&gt;
                    </AHref>
                );
            case '레 미제라블':
                return (
                    <AHref
                        href="https://movie.naver.com/movie/bi/mi/basic.naver?code=89755"
                        target="_blank"
                        rel="noreferrer"
                    >
                        &lt;Les Miserables, 2012, Working Title Films,
                        Relativity Media&gt;
                    </AHref>
                );
            case '지킬 앤 하이드':
                return (
                    <AHref
                        href="http://ticket.yes24.com/Perf/39997"
                        target="_blank"
                        rel="noreferrer"
                    >
                        &lt;지킬 앤 하이드, 2021, OD COMPANY&gt;
                    </AHref>
                );
            case '주토피아':
                return (
                    <AHref
                        href="https://movie.naver.com/movie/bi/mi/basic.naver?code=130850"
                        target="_blank"
                        rel="noreferrer"
                    >
                        &lt;Zootopia, 2016, Walt Disney Pictures&gt;
                    </AHref>
                );
            case '로미오와 줄리엣':
                return (
                    <AHref
                        href="https://movie.naver.com/movie/bi/mi/basic.naver?code=17875"
                        target="_blank"
                        rel="noreferrer"
                    >
                        &lt;Romeo + Juliet, 1996, 20th Century Studios, Inc&gt;
                    </AHref>
                );
            case '알라딘':
                return (
                    <AHref
                        href="https://movie.naver.com/movie/bi/mi/basic.naver?code=163788"
                        target="_blank"
                        rel="noreferrer"
                    >
                        &lt;Aladdin, 2019, Walt Disney Pictures&gt;
                    </AHref>
                );
            case '오페라의 유령':
                return (
                    <AHrefLong
                        href="https://movie.naver.com/movie/bi/mi/basic.naver?code=89752"
                        target="_blank"
                        rel="noreferrer"
                    >
                        &lt;The Phantom of the Opera at the Royal Albert Hall,
                        2011, Cameron Mackintosh&gt;
                    </AHrefLong>
                );
            case '세 얼간이':
                return (
                    <AHref
                        href="https://movie.naver.com/movie/bi/mi/basic.naver?code=73372"
                        target="_blank"
                        rel="noreferrer"
                    >
                        &lt;3 Idiots, 2009, Vinod Chopra Films, Reliance Big
                        Pictures&gt;
                    </AHref>
                );
            case '셜록 홈즈':
                return (
                    <AHref
                        href="https://www.bbc.co.uk/programmes/b018ttws"
                        target="_blank"
                        rel="noreferrer"
                    >
                        &lt;Sherlock, 2010, Mark Gatiss,Steven Moffat&gt;
                    </AHref>
                );
            case '슈렉':
                return (
                    <AHref
                        href="https://movie.naver.com/movie/bi/mi/basic.naver?code=31579"
                        target="_blank"
                        rel="noreferrer"
                    >
                        &lt;Shrek, 2001, DreamWorks&gt;
                    </AHref>
                );
            case '보스 베이비':
                return (
                    <AHref
                        href="https://movie.naver.com/movie/bi/mi/basic.naver?code=129094"
                        target="_blank"
                        rel="noreferrer"
                    >
                        &lt;The Boss Baby, 2017, DreamWorks Animation&gt;
                    </AHref>
                );
            case '해리 포터':
                return (
                    <AHrefLong
                        href="https://movie.naver.com/movie/bi/mi/basic.naver?code=30688"
                        target="_blank"
                        rel="noreferrer"
                    >
                        &lt;Harry Potter And The Sorcerer&apos;s Stone, 2001,
                        Warner Bros. Entertainment Inc.&gt;
                    </AHrefLong>
                );
            case '삼국지':
                return (
                    <AHrefLong
                        href="https://movie.naver.com/movie/bi/mi/basic.naver?code=45129"
                        target="_blank"
                        rel="noreferrer"
                    >
                        &lt;三國志見龍卸甲, 2008, 태원엔터테인먼트, Visualizer
                        Film Production Ltd&gt;
                    </AHrefLong>
                );
            case '오만과 편견':
                return (
                    <AHrefLong
                        href="https://movie.naver.com/movie/bi/mi/basic.naver?code=44728"
                        target="_blank"
                        rel="noreferrer"
                    >
                        &lt;Pride & Prejudice, 2005, Working Title
                        Films,Universal Pictures, Focus Features&gt;
                    </AHrefLong>
                );
            default:
                return 0;
        }
    };
    return <div>{SourceHref()}</div>;
};

export default Source;

const AHref = styled.a`
    text-decoration: none;

    font-size: 14px;
    line-height: 15px;
    letter-spacing: -0.01em;
    color: #bbb6a8;

    @media (max-width: 767px) {
        font-size: 7px;
        zoom: 0.7;
        line-height: 7px;
    }
`;

const AHrefLong = styled.a`
    text-decoration: none;

    font-size: 9px;
    zoom: 0.93;
    letter-spacing: -0.01em;
    color: #bbb6a8;

    @media (max-width: 767px) {
        font-size: 5px;
        zoom: 0.45;
        line-height: 5px;
    }
`;
