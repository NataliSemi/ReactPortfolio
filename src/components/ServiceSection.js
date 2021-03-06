import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import clock from '../img/clock.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.jpg';
//Styles
import { Layout, Description, Image } from "../style";
import styled from "styled-components";

const ServiceSection = () => {
    return (
        <Services>
            <Description>
                <h2>Hight <span>quality</span> services</h2>
                <Cards >
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="clock"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem is something that densn't work because of ...efyfef.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="teamwork"/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem is something that densn't work because of ...efyfef.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm"/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem is something that densn't work because of ...efyfef.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="money"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem is something that densn't work because of ...efyfef.</p>
                    </Card>
                    </Cards>
                </Description>
                <Image>
                    <img src={home2} alt='home2'></img>
                </Image>
                
        </Services>
    );
};

const Services = styled(Layout)`
    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`; 
const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const Card = styled.div`
    flex-basis: 20rem;
    .icon{
        display: flex;
        align-items: center;
        height: 10rem;
        width: 10rem;
        h3{
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
`;

export default ServiceSection;