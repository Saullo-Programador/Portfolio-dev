import { FaGithub, FaLinkedin } from "react-icons/fa6";
import "./MidiaStyle.css"

export default function MidiaCompoonents() {
  return (
    <span className="ContainerMidia">
      <span className="ItemMidia">
        <a href="https://github.com/Saullo-Programador" >
          <FaGithub className="iconsMidia"/>
        </a>
      </span>
      <span className="ItemMidia">
        <a href="https://www.linkedin.com/in/saullo-paulo-7b2676255">
          <FaLinkedin className="iconsMidia" />
        </a>
      </span>
    </span>
  )
}
