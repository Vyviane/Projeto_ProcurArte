import { useNavigate } from "react-router-dom";
import "../styles/home.scss";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";



const Home = () =>  {
  
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className="containerH">
      <div className="contentH">
        <div className="headerH">
          <div className="logoH">
            <h2 className="logoH">Procurarte</h2>
          </div>
          <div className="navBarH">
            <ul>
              <li>
                <a href="#" ></a>Quem somos
              </li>
              <li>
                <a href="#" onClick={() => handleLogin }></a>Login
              </li>
              <li>
                <a href="#" ></a>Contratar
              </li>
            </ul>
          </div>
        </div>
        <div className="HeroH" data-aos="fade-up" data-aos-once="true">
          <div className="col1">
            <h1> Placeat nostrum! Nobis inventore asperiores ! </h1>
            <div className="descriptionH">
              Lorem ipsum dolor sit amet, elit. s asperirccusantium soluta
              aspernatur, ad excepturi consequuntur veritatis cumque, laudantium
              optio fuga.
            </div>
            <div className="btnH">
              <button className="btnContratar">
                {" "}
                Contratar
                <img
                  className="iconSeta"
                  src="../icones/icon-seta.svg"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className="col2"></div>
        </div>
      </div>
    </div>
  );
}


export default Home;