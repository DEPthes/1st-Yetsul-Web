import React from 'react';
import $ from 'jquery';
import { gsap } from 'gsap';
import 'fullpage.js/vendors/scrolloverflow';
import 'fullpage.js';
import 'fullpage.js/dist/jquery.fullpage.min.css';
import './App.css';
import Header from './components/common/Header';
import Main from './components/Main/Main';

const App: React.FC = () => {
    $(() => {
        $('.fullpageStyle').fullpage({
            navigation: true,
            scrollingSpeed: 850,
            easingcss3: 'cubic-bezier(.61,.01,.13,.95)',
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            afterLoad: (anchorLink: string, index: number) => {
                gsap.timeline().staggerFromTo(
                    $('header'),
                    0.5,
                    { opacity: 0 },
                    { opacity: 1, delay: 0.3, ease: 'easeInOut' },
                );
            },
            onLeave: (
                anchorLink: number,
                destination: number,
                direction: string,
            ) => {
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
    return (
        <div className="main">
            <Header />
            <div className="fullpageStyle">
                <div className="section" id="section1">
                    <Main />
                </div>
                <div className="section" id="section2">
                    2
                </div>
                <div className="section" id="section3">
                    3
                </div>
            </div>
        </div>
    );
};

export default App;
