import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import clock from '../img/clock.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.jpg';

const ServiceSection = () => {
    return (
        <div className="services">
            <div className="description">
                <h2>Hight <span>quality</span> services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="clock"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem is something that densn't work because of ...efyfef.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt="teamwork"/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem is something that densn't work because of ...efyfef.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm"/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem is something that densn't work because of ...efyfef.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={money} alt="money"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem is something that densn't work because of ...efyfef.</p>
                    </div>
                </div>
                    <img src={home2} alt='home2'></img>
            </div>

        </div>
    );
};
export default ServiceSection;