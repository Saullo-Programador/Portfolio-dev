import ButtonComponentProject from "../button/ButtonComponentProject";
import "./CardStyle.css"

interface propsCard {
    titulo: string;
    link: string;
    nameImg?: string;
    icons?: string;
}

export default function CardComponents({ titulo, link, nameImg, icons }: propsCard) {
    return (
        <div className="BoxCard">
            <div className="BoxImgProject">
                <img src={nameImg} className="ImgCard" />
            </div>
            <div className="BoxInfoProject">
                <div className="BoxTitleCard">
                    <p className="TituloCard">{titulo}</p>
                </div>
                <div className="BoxTecUsadas">
                    <img src={`https://skillicons.dev/icons?i=${icons}`} style={{ width: '95%' }} />
                </div>
                <ButtonComponentProject
                    title="Ver código"
                    link={link}
                />
            </div>
        </div>
    )
}
