import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import { gsap } from 'gsap';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'fullpage.js/vendors/scrolloverflow';
import 'fullpage.js';
import 'fullpage.js/dist/jquery.fullpage.min.css';
import './App.css';
import Main from './components/Main/Main';
import SecondMain from './components/Main/SecondMain';
import ThirdMain from './components/Main/ThirdMain';

const App: React.FC = () => {
    const { service } = useParams();
    const [userData, setUserData] = useState(null);
    $(() => {
        let isLoad = false;
        // fullpage.js setting
        $('.fullpageStyle').fullpage({
            navigation: true,
            scrollingSpeed: 850,
            easingcss3: 'cubic-bezier(.61,.01,.13,.95)',
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            afterLoad: (anchorLink: string, index: number) => {
                if (isLoad) {
                    gsap.timeline().staggerFromTo(
                        $('header'),
                        0.5,
                        { opacity: 0 },
                        { opacity: 1, delay: 0.3, ease: 'easeInOut' },
                    );
                }
                isLoad = true;
            },
            onLeave: (
                anchorLink: number,
                destination: number,
                direction: string,
            ) => {
                if (anchorLink === 2) {
                    isLoad = true;
                }
                gsap.timeline().staggerFromTo(
                    $('header'),
                    0.8,
                    { opacity: 0 },
                    { opacity: 0, ease: 'easeOut' },
                );
                if (anchorLink === 3 && direction === 'down') {
                    $('header').fadeOut();
                    $('.section:nth-last-child(2)').addClass('fadeout');
                }
                if (anchorLink === 4 && direction === 'up') {
                    $('header').fadeIn();
                    $('.section:nth-last-child(2)').removeClass('fadeout');
                }
            },
        });
    });
    useEffect(() => {
        gsap.timeline().staggerFromTo(
            $('header'),
            0.8,
            { opacity: 1 },
            { opacity: 1, ease: 'easeOut' },
        );
        axios
            .get(`https://depth-server.herokuapp.com/auth/${service}`)
            .then((res) => setUserData(res.data))
            .catch((err) => console.log(err));
        console.log(userData || null);
        return () => {
            // 다른 url로 이동 시에 fullpage.js destroy -> 안해주면 fullpage.js가 여러번 호출되어 오류발생
            if ($('.fullpageStyle')) {
                $('.fullpageStyle').fullpage.destroy('all');
            }
        };
    }, []);

    return (
        <div className="main">
            <div className="fullpageStyle">
                <div className="section" id="section1">
                    <Main />
                </div>
                <div className="section" id="section2">
                    <SecondMain />
                </div>
                <div className="section" id="section3">
                    <ThirdMain />
                </div>
            </div>
        </div>
    );
};

export default React.memo(App);
