import "./ItemStyle.css"
import { FaDownload } from "react-icons/fa6";

interface ItemProps{
    title: string;
    onClick: () => void;
}

export default function ItemComponent({title, onClick}: ItemProps) {
    return (
        <span className="ItemCurriculo">
            <p>{title}</p>
            <FaDownload 
                color="var(--color-primary)" 
                size={18}
                onClick={onClick}
                style={{cursor: "pointer", paddingRight: "12px"}}
            />
        </span>
    )
}
