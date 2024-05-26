import "./StyleButtonSubmit.css"

interface ButtonSubmitType {
    onClick: () => void
    value: string
    titulo: string
}

export const ButtonSubmit = ({onClick, titulo, value}:ButtonSubmitType) => {
    return (
            <button 
                type='submit' 
                onClick={onClick}
                value={value}
                className='ButtonSubmit'
            >
                {titulo}
            </button>
    )
}
