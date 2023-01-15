/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-array-index-key */

import React, { useRef } from 'react';
import { Scrollspy } from '@makotot/ghostui';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import BackgroundTemplate from '../common/BackgroundTemplate';
import PageUpBtn from '../common/PageUpBtn';
import MetaTag from '../../SEOMetatag';

const DrinkTradition: React.FC = () => {
    const isMobile = useMediaQuery({
        query: '(max-width:767px)',
    });

    $(window).scroll(() => {
        const scroll = $(window).scrollTop() || 0;
        if (scroll > 1) {
            $('#service-nav').css('background', 'rgba(255, 255, 255, 0.6)');
            $('#service-nav').css('backdrop-filter', 'blur(6px)');
        } else {
            $('#service-nav').css('background', 'rgba(0, 0, 0, 0)');
        }
    });
    const SIZE = 5;
    const list = new Array(SIZE).fill(0);
    const arr = ['탁주', '과실주', '약주', '청주', '증류주'];
    const sectionRefs = [
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
    ];
    return (
        <BackgroundTemplate heightValue="100">
            <MetaTag
                title="옛술의 전당 - 역사"
                description="전통주는 특정한 민족이나 국가에서 오랜기간 동안 전승되어 온 술을 말하며, 술 문화는 식문화 중에서도 국적과 민족성이 뚜렷한 기호음료이다.
문헌에 의하면 삼국시대 이전 마한 시대부터 풍성한 수확과 복을 기원하며 맑은 곡주를 빚어 조상께 바쳤다고 한다. 이를 통해 우리나라에서는 농사를 시작한 이후부터 술을 빚어 조상께 바치기도 하고, 행사 음료로 즐기기도 했다는 사실을 알 수 있다.
우리나라의 전통주는 대표적으로 탁주, 약주, 소주로 분류되며 이 중 탁주가 가장 오랜 역사를 가지고 있다고 알려져 있다. 이후 탁주에서 재를 제거한 약주와 약주를 증류한 소주가 만들어졌다."
                keywords="전통주,전통주 역사, 옛술 역사, 우리술 역사, 옛술, 옛술의 전당, 우리술, 술, 우리나라 술, 청주, 약주, 증류주, 리큐르주, 과실주, 탁주, 막걸리, 옛술의 전당 소개, 옛술의 전당 서비스 소개"
                imgsrc="images/traditionImgSrc.png"
                url="https://www.yetsul.com/tradition"
            />
            <Scrollspy sectionRefs={sectionRefs}>
                {({ currentElementIndexInViewport }) => (
                    <div>
                        <InnerNavUl id="service-nav">
                            {list.map((_, i) => (
                                <InnerNavLI
                                    key={i}
                                    style={{
                                        color:
                                            currentElementIndexInViewport === i
                                                ? '#675B4F'
                                                : '#A7A7A7',
                                        borderBottom:
                                            currentElementIndexInViewport === i
                                                ? '2px solid #675B4F'
                                                : '1px solid #A7A7A7',
                                    }}
                                >
                                    <a href={`#section-${i}`}>{arr[i]}</a>
                                </InnerNavLI>
                            ))}
                        </InnerNavUl>
                    </div>
                )}
            </Scrollspy>
            <Inner>
                <Intro>
                    <h1>[옛술 역사]</h1>
                    <h2>“역사를 알고 마시면 더욱 맛있다. </h2>
                    <h2>우리 옛술의 역사”</h2>
                    <img
                        src="./images/Tradition/traditionNewspaper.png"
                        alt="traditionNewspaper"
                    />
                    <h3>옛술이란 무엇인가요?</h3>
                    <div>
                        <h4>
                            옛술, 전통주는 특정한 민족이나 국가에서 오랜기간
                            동안 전승되어 온 술을 말하며, 술 문화는 식문화
                            중에서도 국적과 민족성이 뚜렷한 기호음료이다.
                        </h4>

                        <h4>
                            문헌에 의하면 삼국시대 이전 마한 시대부터 풍성한
                            수확과 복을 기원하며 맑은 곡주를 빚어 조상께
                            바쳤다고 한다. 이를 통해 우리나라에서는 농사를
                            시작한 이후부터 술을 빚어 조상께 바치기도 하고, 행사
                            음료로 즐기기도 했다는 사실을 알 수 있다.
                        </h4>

                        <h4>
                            우리나라의 전통주는 대표적으로 탁주, 약주, 소주로
                            분류되며 이 중 탁주가 가장 오랜 역사를 가지고 있다고
                            알려져 있다. 이후 탁주에서 재를 제거한 약주와 약주를
                            증류한 소주가 만들어졌다.
                        </h4>
                        <h5>[참고: 한국전통주(전통주역사)</h5>
                    </div>
                </Intro>

                {isMobile ? (
                    <Contents>
                        <ToFocus ref={sectionRefs[0]} id="section-0" />
                        <DrinkWrapper>
                            <DrinkEx>
                                <h1>탁주</h1>
                                <img src="images/Tradition/Tak.png" alt="Tak" />
                                <h2>
                                    “ 맑은 술을 떠내지 않고 그대로 걸러서 만든
                                    술”
                                </h2>
                                <h3>
                                    큰 변화의 폭 없이 오래도록 대중에게 사랑받는
                                    대표적인 전통주이다. 맑지 못하고 탁하다고
                                    하여 탁주, 막 거른 술이라 하여 막걸리,
                                    빛깔이 희다고 하여 백주, 집마다 담그는
                                    술이라 하여 가주 등으로 불린다. [삼국사기]에
                                    좋은 술을 뜻하는 미온, 지주 등의 말이 나오는
                                    점을 보아 탁주의 역사가 삼국시대에 이미
                                    시작되었음을 알 수 있다.
                                </h3>
                                <h5>
                                    탁주는 술을 거르는 방식에 따라 세 종류로
                                    나눌 수 있다. 만드는 방법 역시 여러 가지가
                                    있는데, 가장 대표적으로 사용되는 방법은
                                    쌀/누룩/물 등으로 술밑을 만들어 10일 정도
                                    숙성시킨 후, 숙성이 되면 항아리에 체를
                                    걸쳐놓고 술밑을 퍼내어 체에 넣고 물을 부어
                                    거칠게 걸러내는 것이다. 일반적으로 탁주는
                                    약주에 비해 누룩의 양이 많기 때문에 알코올
                                    농도가 15 ~ 21%로 진한 편에 속하지만,
                                    시중에는 판매를 위해 물로 희석한 6 ~ 8%로
                                    조절된 탁주가 알려져 있다
                                </h5>
                                <h4>
                                    [출처: 한국민족문화대백과사전(탁주(濁酒))]
                                </h4>
                            </DrinkEx>
                        </DrinkWrapper>
                        <ToFocus ref={sectionRefs[1]} id="section-1" />
                        <DrinkWrapper>
                            <DrinkEx>
                                <h1>과실주</h1>
                                <img src="images/Tradition/Gwa.png" alt="Gwa" />
                                <h2>
                                    "과실에 당과 물을 첨가하여 발효시킨 술덧을
                                    여과하여 만든 술”
                                </h2>
                                <h3>
                                    우리나라에 언제, 어떻게 과실주를 담그는
                                    기술이 들어왔는지는 확실하게 기록되어 있지는
                                    않지만, 우리나라와 가장 빈번하게 교류했던
                                    중국에서 당나라 때 이 기술이 성행하였다는
                                    점을 미루어 보아 이와 비슷한 시기인
                                    신라시대에 전래되었을 것이라고 추측된다.{' '}
                                </h3>{' '}
                                <h5>
                                    기업적 양조주로서는 1960년대 이후에 본격적인
                                    생산이 시작되었다. 과실주의 전통적인
                                    제조법은 약주를 빚듯이 맵쌀이나 찹쌀, 누룩을
                                    과일이나 과즙과 함께 넣어 빚는 것인데,
                                    현재는 잘 익은 과즙액에 당을 일정량 첨가해
                                    효모를 넣어 15 ~ 20’c의 온도에서 발효시키고
                                    여과하여 후숙성하는 방법으로 제조한다.
                                    사용하는 원료에 따라서 색과 향이 달라지는
                                    것이 과실주의 매력이다.
                                </h5>
                                <h4>
                                    [출처:
                                    한국민족문화대백과사전(과실주(果實酒))]
                                </h4>
                            </DrinkEx>
                        </DrinkWrapper>
                        <ToFocus ref={sectionRefs[2]} id="section-2" />
                        <DrinkWrapper>
                            <DrinkEx>
                                <h1>약주</h1>
                                <img src="images/Tradition/Yak.png" alt="Yak" />
                                <h2>“술밑을 여과하여 만든 맑은 술, 약주”</h2>
                                <h3>
                                    약주는 찐 곡식에 누룩과 물을 넣고 발효시킨
                                    술에서 맑은 부분만을 떠낸 것이다. 과거에는
                                    약효가 있다고 인정되는 종류의 술이거나
                                    처음부터 약재를 넣고 빚은 술을 뜻했다.
                                    그러나 현대에는 맑은 술, 혹은 술을 높여
                                    부르는 말로 의미가 변천되었다. 약주라는
                                    명칭의 유래에 대해서는 여러가지 설이 있는데,
                                    대표적으로는 조선시대 금주령을 어기고 술을
                                    마시고 싶었던 특권계급이 약이라는 핑계를
                                    대고 마셨다고 해서 약주라는 말을 사용했다는
                                    설이 있다. 약주는 일제강점기 초까지 주로
                                    서울 부근의 중류이상 계급에서 가문의
                                    자랑으로 여기기 위해 그들만의 비법으로
                                    만들어 소비하였다.
                                </h3>
                                <h4>
                                    [출처 : 정책브리핑, 더술닷컴,
                                    한국민족문화대백과사전(약주(藥酒)),
                                    한국문화원연합회]
                                </h4>
                            </DrinkEx>
                        </DrinkWrapper>
                        <ToFocus ref={sectionRefs[3]} id="section-3" />
                        <DrinkWrapper>
                            <DrinkEx>
                                <h1>청주</h1>
                                <img
                                    src="images/Tradition/Cheong.png"
                                    alt="Cheong"
                                />
                                <h2>“청아한 술, 청주” </h2>
                                <h3>
                                    청주는 막걸리와 같은 방식으로 발효시킨
                                    술덧에서 술지게미를 걸러내어 맑게 만든
                                    술이다. 곡류 중 쌀을 원료로 하고, 누룩을 1%
                                    미만 함유하면 ‘청주’라고 한다. 청주는
                                    발효과정에서 쌀의 맛과 고급스럽고 신비스런
                                    청향의 조화를 이뤄낸다. 일본 사케와
                                    동일시되거나 혼동되는 경우가 있지만 청주는
                                    우리 고유의 맛을 살린 전통주이다.
                                </h3>
                                <h4>
                                    [출처 : 정책브리핑, 더술닷컴,
                                    한국민족문화대백과사전(약주(藥酒)),
                                    한국문화원연합회]
                                </h4>
                            </DrinkEx>
                        </DrinkWrapper>
                        <ToFocus ref={sectionRefs[4]} id="section-4" />
                        <DrinkWrapper>
                            <DrinkEx>
                                <h1>증류주</h1>
                                <img
                                    src="images/Tradition/Jeung.png"
                                    alt="Jeung"
                                />
                                <h2>“발효주를 증류하여 만든 술, 증류주"</h2>
                                <h3>
                                    증류주는 양조주를 증류기에 넣고 분별증류를
                                    통해 정제한 술을 말한다. 알코올 도수는
                                    일반적으로는 35~60%, 높으면 90% 전후일
                                    정도로 높은 편이다. 동양의 증류주는 몽골의
                                    정복 활동으로 전파되었다. 정복 활동으로 인한
                                    장거리 이동이 잦은 몽골인들이 중동에서
                                    얻어낸 증류주는 획기적이었고, 동양을
                                    정복하려는 그들을 통해 동양 전체에 빠르게
                                    확산되었다.{' '}
                                </h3>{' '}
                                <h5>
                                    이 영향으로 우리나라에서도 증류식 소주가
                                    탄생하였다. 몽골군의 주둔지였던 안동과 개성,
                                    제주도는 자연스레 증류식 소주에 대한
                                    제조법이 발달하게 되었고, 안동소주는
                                    현재까지도 대표적인 증류주로 꼽힌다.
                                    증류주를 제조하는 방법은 대표적으로 발효시킨
                                    발효주를 시루나 소줏고리를 이용하여 증류하는
                                    것이 있다.
                                </h5>{' '}
                                <h5>
                                    증류주는 제조방법에 의해 도수가 높은 편인데,
                                    2000년대 후반에 판매를 위해 22% 이하로
                                    알코올 도수를 내린 순한 희석식 소주가 많이
                                    제조되었고, 현재는 증류식 소주보다 희석식
                                    소주가 국민대표 술로 자리잡고 있다.
                                </h5>
                                <h4>[출처 : 기록으로 만나는 대한민국]</h4>
                            </DrinkEx>
                        </DrinkWrapper>
                        <ToFocus />
                    </Contents>
                ) : (
                    <Contents>
                        <ToFocus ref={sectionRefs[0]} id="section-0" />
                        <DrinkWrapper>
                            <DrinkEx>
                                <h1>탁주</h1>
                                <h2>
                                    “ 맑은 술을 떠내지 않고 그대로 걸러서 만든
                                    술”
                                </h2>
                                <h3>
                                    큰 변화의 폭 없이 오래도록 대중에게 사랑받는
                                    대표적인 전통주이다. 맑지 못하고 탁하다고
                                    하여 탁주, 막 거른 술이라 하여 막걸리,
                                    빛깔이 희다고 하여 백주, 집마다 담그는
                                    술이라 하여 가주 등으로 불린다. [삼국사기]에
                                    좋은 술을 뜻하는 미온, 지주 등의 말이 나오는
                                    점을 보아 탁주의 역사가 삼국시대에 이미
                                    시작되었음을 알 수 있다.
                                </h3>
                                <h5>
                                    탁주는 술을 거르는 방식에 따라 세 종류로
                                    나눌 수 있다. 만드는 방법 역시 여러 가지가
                                    있는데, 가장 대표적으로 사용되는 방법은
                                    쌀/누룩/물 등으로 술밑을 만들어 10일 정도
                                    숙성시킨 후, 숙성이 되면 항아리에 체를
                                    걸쳐놓고 술밑을 퍼내어 체에 넣고 물을 부어
                                    거칠게 걸러내는 것이다. 일반적으로 탁주는
                                    약주에 비해 누룩의 양이 많기 때문에 알코올
                                    농도가 15 ~ 21%로 진한 편에 속하지만,
                                    시중에는 판매를 위해 물로 희석한 6 ~ 8%로
                                    조절된 탁주가 알려져 있다
                                </h5>
                                <h4>
                                    [출처: 한국민족문화대백과사전(탁주(濁酒))]
                                </h4>
                            </DrinkEx>
                            <img src="images/Tradition/Tak.png" alt="Tak" />
                        </DrinkWrapper>
                        <ToFocus ref={sectionRefs[1]} id="section-1" />
                        <DrinkWrapper>
                            <img src="images/Tradition/Gwa.png" alt="Gwa" />
                            <DrinkEx>
                                <h1>과실주</h1>
                                <h2>
                                    "과실에 당과 물을 첨가하여 발효시킨 술덧을
                                    여과하여 만든 술”
                                </h2>
                                <h3>
                                    우리나라에 언제, 어떻게 과실주를 담그는
                                    기술이 들어왔는지는 확실하게 기록되어 있지는
                                    않지만, 우리나라와 가장 빈번하게 교류했던
                                    중국에서 당나라 때 이 기술이 성행하였다는
                                    점을 미루어 보아 이와 비슷한 시기인
                                    신라시대에 전래되었을 것이라고 추측된다.{' '}
                                </h3>{' '}
                                <h5>
                                    기업적 양조주로서는 1960년대 이후에 본격적인
                                    생산이 시작되었다. 과실주의 전통적인
                                    제조법은 약주를 빚듯이 맵쌀이나 찹쌀, 누룩을
                                    과일이나 과즙과 함께 넣어 빚는 것인데,
                                    현재는 잘 익은 과즙액에 당을 일정량 첨가해
                                    효모를 넣어 15 ~ 20’c의 온도에서 발효시키고
                                    여과하여 후숙성하는 방법으로 제조한다.
                                    사용하는 원료에 따라서 색과 향이 달라지는
                                    것이 과실주의 매력이다.
                                </h5>
                                <h4>
                                    [출처:
                                    한국민족문화대백과사전(과실주(果實酒))]
                                </h4>
                            </DrinkEx>
                        </DrinkWrapper>
                        <ToFocus ref={sectionRefs[2]} id="section-2" />
                        <DrinkWrapper>
                            <DrinkEx>
                                <h1>약주</h1>
                                <h2>“술밑을 여과하여 만든 맑은 술, 약주”</h2>
                                <h3>
                                    약주는 찐 곡식에 누룩과 물을 넣고 발효시킨
                                    술에서 맑은 부분만을 떠낸 것이다. 과거에는
                                    약효가 있다고 인정되는 종류의 술이거나
                                    처음부터 약재를 넣고 빚은 술을 뜻했다.
                                    그러나 현대에는 맑은 술, 혹은 술을 높여
                                    부르는 말로 의미가 변천되었다. 약주라는
                                    명칭의 유래에 대해서는 여러가지 설이 있는데,
                                    대표적으로는 조선시대 금주령을 어기고 술을
                                    마시고 싶었던 특권계급이 약이라는 핑계를
                                    대고 마셨다고 해서 약주라는 말을 사용했다는
                                    설이 있다. 약주는 일제강점기 초까지 주로
                                    서울 부근의 중류이상 계급에서 가문의
                                    자랑으로 여기기 위해 그들만의 비법으로
                                    만들어 소비하였다.
                                </h3>
                                <h4>
                                    [출처 : 정책브리핑, 더술닷컴,
                                    한국민족문화대백과사전(약주(藥酒)),
                                    한국문화원연합회]
                                </h4>
                            </DrinkEx>
                            <img src="images/Tradition/Yak.png" alt="Yak" />
                        </DrinkWrapper>
                        <ToFocus ref={sectionRefs[3]} id="section-3" />
                        <DrinkWrapper>
                            <img
                                src="images/Tradition/Cheong.png"
                                alt="Cheong"
                            />
                            <DrinkEx>
                                <h1>청주</h1>
                                <h2>“청아한 술, 청주” </h2>
                                <h3>
                                    청주는 막걸리와 같은 방식으로 발효시킨
                                    술덧에서 술지게미를 걸러내어 맑게 만든
                                    술이다. 곡류 중 쌀을 원료로 하고, 누룩을 1%
                                    미만 함유하면 ‘청주’라고 한다. 청주는
                                    발효과정에서 쌀의 맛과 고급스럽고 신비스런
                                    청향의 조화를 이뤄낸다. 일본 사케와
                                    동일시되거나 혼동되는 경우가 있지만 청주는
                                    우리 고유의 맛을 살린 전통주이다.
                                </h3>
                                <h4>
                                    [출처 : 정책브리핑, 더술닷컴,
                                    한국민족문화대백과사전(약주(藥酒)),
                                    한국문화원연합회]
                                </h4>
                            </DrinkEx>
                        </DrinkWrapper>
                        <ToFocus ref={sectionRefs[4]} id="section-4" />
                        <DrinkWrapper>
                            <DrinkEx>
                                <h1>증류주</h1>
                                <h2>“발효주를 증류하여 만든 술, 증류주"</h2>
                                <h3>
                                    증류주는 양조주를 증류기에 넣고 분별증류를
                                    통해 정제한 술을 말한다. 알코올 도수는
                                    일반적으로는 35~60%, 높으면 90% 전후일
                                    정도로 높은 편이다. 동양의 증류주는 몽골의
                                    정복 활동으로 전파되었다. 정복 활동으로 인한
                                    장거리 이동이 잦은 몽골인들이 중동에서
                                    얻어낸 증류주는 획기적이었고, 동양을
                                    정복하려는 그들을 통해 동양 전체에 빠르게
                                    확산되었다.{' '}
                                </h3>{' '}
                                <h5>
                                    이 영향으로 우리나라에서도 증류식 소주가
                                    탄생하였다. 몽골군의 주둔지였던 안동과 개성,
                                    제주도는 자연스레 증류식 소주에 대한
                                    제조법이 발달하게 되었고, 안동소주는
                                    현재까지도 대표적인 증류주로 꼽힌다.
                                    증류주를 제조하는 방법은 대표적으로 발효시킨
                                    발효주를 시루나 소줏고리를 이용하여 증류하는
                                    것이 있다.
                                </h5>{' '}
                                <h5>
                                    증류주는 제조방법에 의해 도수가 높은 편인데,
                                    2000년대 후반에 판매를 위해 22% 이하로
                                    알코올 도수를 내린 순한 희석식 소주가 많이
                                    제조되었고, 현재는 증류식 소주보다 희석식
                                    소주가 국민대표 술로 자리잡고 있다.
                                </h5>
                                <h4>[출처 : 기록으로 만나는 대한민국]</h4>
                            </DrinkEx>
                            <img src="images/Tradition/Jeung.png" alt="Jeung" />
                        </DrinkWrapper>
                        <ToFocus />
                    </Contents>
                )}
                <PageUpBtn />
            </Inner>
        </BackgroundTemplate>
    );
};

export default DrinkTradition;

const ToFocus = styled.div`
    height: 15.375em;
    @media (max-width: 767px) {
        height: 8.75em;
    }
`;

const InnerNavUl = styled.ul`
    z-index: 3;
    list-style: none;
    position: fixed;
    top: 9.1875em;
    left: 50%;
    width: 100%;
    height: 3.75em;
    transform: translate(-50%);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    transition: all 0.3s ease-out;
    @media screen and (max-width: 767px) {
        top: 6.0625em;
    }
`;

const InnerNavLI = styled.li`
    display: flex;
    justify-content: center;
    width: calc(100vw / 3);
    a {
        color: #8d837b;
        padding-bottom: 1.25em;
        font-size: 1.25em;
        text-decoration: none;
        @media screen and (max-width: 767px) {
            font-size: 0.8125em;
        }
    }
    @media screen and (min-width: 767px) {
        padding-left: 3.77vw;
        padding-right: 3.77vw;
        width: auto;
        float: left;
    }
`;

const Inner = styled.div`
    margin-top: 17.625em;
    text-align: center;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 767px) {
        margin-top: 11.875em;
    }
`;

const Intro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        font-size: 1.5625em;
        line-height: 175.5%;
        color: #675b4f;
        font-weight: bold;
        margin-bottom: 8.75em;

        @media (max-width: 767px) {
            font-weight: 500;
            font-size: 1.125em;
            line-height: 175.5%;
            margin-bottom: 5.0625em;
            font-weight: bold;
        }
    }

    h2 {
        font-weight: 400;
        font-size: 1.875em;
        line-height: 1.875em;
        margin-bottom: 0.625em;
        color: #675b4f;
        @media (max-width: 767px) {
            font-weight: 400;
            font-size: 1.125em;
            line-height: 1.125em;
        }
    }

    img {
        margin: 3.0625em 0 9.0625em;
        width: 26.5625em;
        height: 15.8125em;
        @media (max-width: 767px) {
            width: 15.4375em;
            height: 9.19em;
            margin: 3.0625em 0 8.375em;
        }
    }
    h3 {
        font-weight: 400;
        font-size: 1.875em;
        line-height: 151%;
        color: #4f4940;
        margin-bottom: 2.75em;
        @media (max-width: 767px) {
            font-weight: 400;
            font-size: 1.125em;
            line-height: 151%;
            margin-bottom: 2.625em;
        }
    }

    h4 {
        font-weight: 400;
        font-size: 1.25em;
        color: #675b4f;
        margin-bottom: 3.125em;

        @media (max-width: 767px) {
            font-weight: 400;
            font-size: 0.8125em;
            line-height: 1.875em;
        }
    }

    h5 {
        margin-top: -2.5em;
        color: #bbb6a8;
        @media (max-width: 767px) {
            font-size: 0.625em;
        }
    }

    div {
        width: 52.5em;

        flex-wrap: nowrap;

        @media (max-width: 767px) {
            width: 21em;

            flex-wrap: nowrap;
        }
    }
`;

const Contents = styled.div``;

const DrinkWrapper = styled.div`
    /* margin-bottom: 246px; */

    width: 60.125em;
    // height: 622px;
    display: flex;
    text-align: left;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 767px) {
        width: 21.25em;
        display: flex;
        flex-direction: column;
    }

    img {
        color: #4f4941;
        width: 20.6875em;
        height: 20.6875em;
        margin: 0 1.5625em;

        @media (max-width: 767px) {
            margin: 2.875em 0;
            width: 8em;
            height: 8em;
        }
    }

    h1 {
        font-weight: 400;
        font-size: 1.875em;
        line-height: 151%;
        color: #4f4940;
        margin-bottom: 2.0625em;

        @media (max-width: 767px) {
            margin-bottom: 0;
            margin-top: 3.125em;
            font-weight: 400;
            font-size: 1.25em;
            line-height: 151%;
        }
    }

    h2 {
        color: #675b4f;
        font-weight: 400;
        font-size: 1.125em;
        line-height: 175.5%;
        margin-bottom: 1.875em;

        @media (max-width: 767px) {
            font-weight: 400;
            font-size: 0.9375em;
            line-height: 1.25em;
        }
    }

    h3 {
        color: #989088;
        font-size: 1em;
        @media (max-width: 767px) {
            font-weight: 400;
            font-size: 0.8125em;
            line-height: 1.25em;
        }
    }

    h5 {
        color: #989088;
        margin-top: 1.875em;
        font-size: 1em;
        @media (max-width: 767px) {
            font-weight: 400;
            font-size: 0.8125em;
            line-height: 1.25em;
        }
    }

    h4 {
        margin-top: 1.5625em;
        color: #989088;
        @media (max-width: 767px) {
            font-size: 0.625em;
            color: #989088;
        }
    }
`;
const DrinkEx = styled.div`
    @media (max-width: 767px) {
        text-align: center;
        margin-bottom: 3.75em;
    }
`;
