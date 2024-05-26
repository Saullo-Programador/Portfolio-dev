import FormEmail from '../../components/formEmail/FormEmail'
import './ContactStyle.css'

export default function ContactScreen() {
    return (
        <div className="" id="contact">
            <header className="HeaderContact">
                <p className="TitleContact">Fale Comigo</p>
                <p className='SubtitleContact'>Resta alguma dúvida? Preencha os campos abaixo com os seguintes dados que em breve entraremos em contato.</p>
            </header>
            <main className='FormMainContact'>
                <FormEmail/>
            </main>
        </div>
    )
}
