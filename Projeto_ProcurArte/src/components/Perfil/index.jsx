import P from "../../components/P"
import './style.scss';

export default function Perfil() {
  return (
    <div className="exibir-portifolio">
                <div className="first-s">
                    <img src="../../Imagens/imageSergio.svg" className="img-perfil"/>
                    <h2>Sergio mauro</h2>
                </div>
                <div className="second-s">
                    <P
                        name="estilo"
                        text="Música classica"
                        label="Estilo: "
                    />
                    <P
                        name="instrumento"
                        text="Violino"
                        label="Instrumento: "
                    />
                    <P
                        name="instagram"
                        text="@sergio_do_mal"
                        label="Instagram: "
                    />
                    <P
                        name="eventos"
                        text="Já trabalhei em festas, em orquestras, na rua..."
                        label="Quais eventos você costuma se apresentar?: "
                    />
                    <P
                        name="resumo"
                        text="Toco instrumento profissionalmente desde os 12 anos..."
                        label="Resumo profissional: "
                    />
                </div>
            </div>
  )
}
