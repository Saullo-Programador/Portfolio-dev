import "./AboutStyle.css"
import img from "../../assets/imgAbout.png"
import SlideSkillComponent from "./components/SlideSkills/SlideSkillComponent"

export default function AboutScreen() {
    return (
        <div className="ContainerPrincipal" id="about">
            <main className="MainContentAbout">
                <div className="ImgContentAbout">
                    <div className="BoxImgAbout">
                        <img src={img} alt="" className="ImgAbout" />
                    </div>
                </div>
                <div className="InfoContentAbout">
                    <p className="TitleInfoAbout">Olá,</p>
                    <p className="DescInfoAbout">Sou Saullo Paulo, engenheiro de software entusiasta de tecnologia. Especialista em Aplicações Mobile e Aplicações Web utilizando UI/UX para melhor experiencia do usuario.<br/> Utilização de códigos limpos e SOLID para um melhor padrão de codificação, criação de testes otimizados e utilização de padrões de arquitetura para melhor desempenho das aplicações. <br/><br/>Estou em busca de uma oportunidade onde eu possa crescer junto com a empresa, ambos se ajudando para isso usando todas as minhas habilidades e conhecimento em prática.</p>
                </div>
            </main>
            <footer className="FooterContentAbout">
                <SlideSkillComponent/>
            </footer>
        </div>
    )
}
