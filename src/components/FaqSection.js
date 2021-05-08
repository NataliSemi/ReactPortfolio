import styled from "styled-components";
import { Layout } from '../style'
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';

const FaqSection = () => {

    return(
        <Faq>
   
            <h2>
                Any Question <span>FAQ</span>
            </h2>
            <AnimateSharedLayout>
            <Toggle title='How do I Start'>
                    <div className="question">
                    <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Kfdfdsfnjnf dfjksdfhaeaanf aewiorpwkrMNE F;LRS,;LMGDGNSFDOSFKM,SF 
                            EJFNKEWNFSDF FLdkfnadf erenfmsnfmdn
                        </p>
                    </div>
                </div>
            </Toggle>
            <Toggle title="Daily Schelude">
            <div className="question">
                <h4></h4>
                <div className="answer">
                <p>Lorem ipsum dolor sit amet.</p>

                        <p>
                            Kfdfdsfnjnf dfjksdfhaeaanf aewiorpwkrMNE F;LRS,;LMGDGNSFDOSFKM,SF 
                            EJFNKEWNFSDF FLdkfnadf erenfmsnfmdn
                        </p>

                </div>
                
            </div>
            </Toggle>
            <Toggle title="Different Payment">
            <div  className="question">
                <div className="answer">

                    <p>
                        Kfdfdsfnjnf dfjksdfhaeaanf aewiorpwkrMNE F;LRS,;LMGDGNSFDOSFKM,SF 
                        EJFNKEWNFSDF FLdkfnadf erenfmsnfmdn
                    </p>

                </div>
            </div>
            </Toggle>
            <Toggle title="What products do you offer?">
            <div className="question">
                <div className="answer">
                    <p>
                        I write something here but not now. 
                    </p>
                </div>
            </div>
            </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
};

const Faq = styled(Layout)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`;


export default FaqSection;