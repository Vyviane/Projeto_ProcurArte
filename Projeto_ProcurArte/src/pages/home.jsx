import { useNavigate } from "react-router-dom";
import "../styles/home.scss";

export default function home() {

  const nav = useNavigate()

  const handleLogin = () => {
    nav('/login')
  }

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
        <div className="HeroH">
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
