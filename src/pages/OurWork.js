import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import athlete from '../img/athlete.jpg';
import goodtime from '../img/goodtime.jpg';
import theracer from '../img/theracer.jpg';

const OurWork = () => {
    return(
        <Work>
            <Movie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link>
                    <img src={athlete} alt="athlete"/>
                </Link>
            </Movie>

            <Movie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link>
                    <img src={theracer} alt="theracer"/>
                </Link>
            </Movie>

            <Movie>
                <h2>The Good times</h2>
                <div className="line"></div>
                <Link>
                    <img src={goodtime} alt="goodtime"/>
                </Link>
            </Movie>
        </Work>
    )
};

const Work = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;
    }
`;
const Movie =styled.div `
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #cccccc;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
    }
`

export default OurWork;