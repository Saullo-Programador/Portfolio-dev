
import SlideComponents from "./components/slide/SlideComponents"
import "./ProjectStyle.css"

export default function ProjectScreen() {
    return (
        <div className="ContainerPrincipal" id="project">
            <header className="HeaderProject">
                <p className="TitleProject">Projetos</p>
            </header>
            <main className="MainProject">
                <SlideComponents/>
            </main>
        </div>
    )
}
