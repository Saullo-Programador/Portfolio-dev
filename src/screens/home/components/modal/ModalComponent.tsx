
import { FaXmark } from "react-icons/fa6";
import "./ModalStyle.css"
import ItemComponent from "../item/ItemComponent";

export default function ModalComponent({ setOpenBoxCurriculo }: { setOpenBoxCurriculo: (value: boolean) => void }) {
  
  return (
    <div className="ContainerModalCurriculos">
      <header className="BoxHeaderModal">
        <p className="TitleModalCurriculo">
          Curriculos
        </p>
        <span
          onClick={() => {
            setOpenBoxCurriculo(!setOpenBoxCurriculo);
          }}
          className="ButtonCloseModal"
        >
          <FaXmark size={23} color="#ffff" />
        </span>
      </header>
      <div className="ContantModalCurriculo">
        <main className="MainModalCuriculo">
          <ItemComponent 
            title={"Engenheiro de Software"}
            onClick={() => console.log('Curric')} 
          />
        </main>
      </div>
    </div>
  )
}
