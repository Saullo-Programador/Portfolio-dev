import "./ButtonStyleProject.css"
interface propsButtonCard  {
  title: string;
  link: string;
}

export default function ButtonComponentProject({ title, link }: propsButtonCard) {
  return (
    <a href={link} className="LinkButtonCard">
      <div className="ContainerButtonCard">
        <p className="TitleButtonCard">{title}</p>
      </div>
    </a>
  )
}
