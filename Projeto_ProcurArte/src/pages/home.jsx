import "../styles/home.scss";
export default function home() {
  return (
    <div className="containerH">
      <div className="contentH">
        <div className="headerH">
          <div className="logoH">
            <img
              src="..\Imagens\logo.svg"
              alt="Logo/identidade visual do site procura Arte"
            />
          </div>
          <div className="navBarH">
            <ul>
              <li>
                <a href="#"></a>Quem somos
              </li>
              <li>
                <a href="#"></a>Contato
              </li>
              <li>
                <a href="#"></a>Login
              </li>
            </ul>
          </div>
        </div>
        <div className="contextH">
        <h1> Placeat nostrum! Nobis inventore asperiores dolorem! Sit magnam tenetur quaerat totam autem.</h1>
        <div className="descriptionH">
          Lorem ipsum dolor sit amet, elit. s asperirccusantium soluta aspernatur, ad excepturi consequuntur veritatis cumque, laudantium optio fuga.
        </div>
        </div>
      </div>
    </div>
  );
}
