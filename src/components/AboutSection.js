import React from 'react';
import home1 from '../img/home1.jpg'
//Styles
import { Layout, Description, Image, Hide } from "../style";

const AboutSection= () => {
    return(
        <Layout>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>
                            your <span>dreams</span> come
                        </h2>
                    </Hide>

                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
                <p>
                    Contact us for any photography or videography 
                    ideas that you have
                </p>
                <button>Contact Us</button> 
                </Description> 
                <Image>
                    <img src={home1} alt="window"/>
                </Image>
        </Layout>
    ); 
};


export default AboutSection;