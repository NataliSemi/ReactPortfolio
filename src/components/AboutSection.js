import React from 'react';
import home1 from '../img/home1.jpg'
//Styles
import { Layout, Description, Image, Hide } from "../style";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";


const AboutSection= () => {

    return(
        <Layout>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2>
                            We work to make
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>
                            your <span>dreams</span> come
                        </motion.h2>
                    </Hide>

                    <Hide>
                        <motion.h2>
                            true.
                        </motion.h2>
                    </Hide>
                </motion.div>
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