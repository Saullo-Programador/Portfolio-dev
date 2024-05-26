import { useState } from "react";
import ButtonComponents from "./components/button/ButtonComponentHome";
import MidiaCompoonents from "./components/midiaSocial/MidiaCompoonents";
import CuboComponent from "./components/piramide/PyramidComponent";
import "./HomeStyle.css"
import ModalComponent from "./components/modal/ModalComponent";

export default function HomeScreen() {

    const [ openBoxCurriculo, setOpenBoxCurriculo] = useState(false)

    return (
        <div className="ContainerPrincipal" id="home">
            <main className="MainContentHome">
                <div className="InfoContentHome">
                    <h1 className="TitleInfoHome">Olá, eu sou Saullo <p className="typingHome">Full-Stack Developer</p></h1>
                    <p className="DescInfoHome">Entusiasta em UX. Especialista em Desenvolvimento Mobile e Desenvolvimento Web</p>
                    <div className="ContentLinksHome">
                        <MidiaCompoonents/>
                        <ButtonComponents 
                            title="Curriculo" 
                            onClick={() => {
                                setOpenBoxCurriculo(!openBoxCurriculo)
                            }}
                        />
                        {openBoxCurriculo && <ModalComponent setOpenBoxCurriculo={setOpenBoxCurriculo}/> }
                    </div>
                </div>
                <div className="ImgContentHome">
                    <CuboComponent />
                </div>
            </main>
        </div>
    )
}
