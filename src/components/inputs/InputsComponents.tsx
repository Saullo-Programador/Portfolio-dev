import './InputsStyle.css'
interface InputProps{
  placeholder?: string,
  title: string,
  type: string,
  name: string,
  wdt: string,
  maxCaracters?: number,
  onChange: () => void,
}


export const InputComponents = ({wdt, name, placeholder, onChange, title, type, maxCaracters}:InputProps) => {
  return(
    <div className='containerInput' style={{width: wdt}}>
      <p className='titleInput'>{title}</p>
      <input
        maxLength={maxCaracters}
        type={type} 
        placeholder={placeholder} 
        onChange={onChange}
        name={name}	
        required
      />
    </div>
  )
}