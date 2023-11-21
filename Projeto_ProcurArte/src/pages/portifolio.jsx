import "../styles/portifolio.scss"
import Textarea from "../components/Textarea/Textarea"

export default function Portifolio() {
    return (
        <div className="portifolio">
            <div className="inputs-portifolio">
                <div className="inputs-2">
                    <div className="select">
                        <label htmlFor="select">Estilo</label>
                        <select name="select" id="">
                            <option value="1">Axé</option>
                            <option value="2">Blues</option>
                            <option value="3">Country</option>
                            <option value="4">Eletrônica</option>
                            <option value="5">Forró</option>
                            <option value="6">Funk</option>
                            <option value="7">Gospel</option>
                            <option value="8">Hip Hop</option>
                            <option value="9">Jazz</option>
                            <option value="10">MPB</option>
                            <option value="11">Música clássica</option>
                            <option value="12">Pagode</option>
                            <option value="13">Pop</option>
                            <option value="14">Rap</option>
                            <option value="15">Reggae</option>
                            <option value="16">Rock</option>
                            <option value="17">Samba</option>
                            <option value="18">Sertanejo</option>
                        </select>
                    </div>
                    <div className="select">
                        <label htmlFor="select">Instrumento</label>
                        <select name="select" id="">
                            <option value="1">Violão</option>
                            <option value="2">Guitarra</option>
                            <option value="3">Baixo</option>
                            <option value="4">Bateria</option>
                            <option value="5">Teclado</option>
                            <option value="6">Piano</option>
                            <option value="7">Saxofone</option>
                            <option value="8">Trompete</option>
                            <option value="9">Violino</option>
                            <option value="10">Flauta</option>
                            <option value="11">Cello</option>
                            <option value="12">Trombone</option>
                            <option value="13">Harp</option>
                            <option value="14">Banjo</option>
                            <option value="15">Acordeão</option>
                        </select>
                    </div>
                </div>
                <div className="inputs-1">
                    <Textarea
                        name="generos"
                        text="Quais generos você toca?"
                    />
                    <Textarea
                        name="eventos"
                        text="Quais eventos você costuma se apresentar?"
                    />
                    <Textarea
                        name="resumo"
                        text="Resumo profissional"
                    />
                    <Textarea
                        text="Instagram"
                        name="instagram"
                    />
                </div>

            </div>
            <div className="exibir-portifolio">

            </div>
        </div>
    )
}