import "./ButtonStyleHome.css"

interface propsButtonHome {
    title: String;
    onClick: () => void;
}

export default function ButtonComponentHome({onClick, title}:propsButtonHome) {
  return (
    <div className="ContainerButton" onClick={onClick}>
        <p className="TitleButton">{title}</p>
    </div>
  )
}
