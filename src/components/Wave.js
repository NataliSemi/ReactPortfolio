import styled from "styled-components";
import {motion} from "framer-motion";

const Wave = () => {
    return (
    <WaveSvg
    viewBox="0 0 628 109" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg">
    <motion.path 
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0}}
        transition={{ duration: 2 }}
    d="M1.00006 1.00005C162 185 241 88.0001 392 36C543 -16 620 1.00005 627 16.0001" 
    stroke="#D96ED4"
    strokeOpacity="0.5"
    strokeWidth="7"
    />
    </WaveSvg>
    );
};

const WaveSvg = styled.svg`
    position: absolute;
    left: 0;
    z-index: 1;
`

export default Wave;