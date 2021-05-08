import React from 'react';
import home1 from '../img/home1.jpg'
//Styles
import { Layout, Description, Image, Hide } from "../style";
//Animations
import { motion } from "framer-motion";
import { titleAnim, fade } from "../animation";
import Wave from "./Wave";


const AboutSection= () => {

    return(
        <Layout>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2
                        variants={titleAnim}
                        >
                            We work to make
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2
                        variants={titleAnim}>
                            your <span>dreams</span> come
                        </motion.h2>
                    </Hide>

                    <Hide>
                        <motion.h2
                        variants={titleAnim}>
                            true.
                        </motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>
                    Contact us for any photography or videography 
                    ideas that you have
                </motion.p>
                <motion.button>Contact Us</motion.button> 
                </Description> 
                <Image>
                    <motion.img src={home1} alt="window"/>
                </Image>
                <Wave/>
        </Layout>
    ); 
};


export default AboutSection;