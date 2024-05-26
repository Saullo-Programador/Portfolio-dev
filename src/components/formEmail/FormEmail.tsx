import React, { useRef, FormEvent, useState } from 'react'
import emailjs from '@emailjs/browser'
import "./StyleFormEmail.css"
import { InputComponents } from "../inputs/InputsComponents"
import { ButtonSubmit } from './buttonSubmit/ButtonSubmit';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';

export default function FormEmail() {
    const [open, setOpen] = useState(false);
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm(
                'service_gi3bjrl',
                'template_8lpi3g4',
                form.current,
                'oeYwNpH31iAKkJ1po'
            )
                .then(
                    (response: any) => {
                        console.log("Sucesso", response.text);
                    },
                    (err: any) => {
                        console.error("Erro...", err.text);
                    }
                )
        }
    }


    const handleClick = () => {
        setOpen(true);
        if (form.current) {
            form.current.reset();
        }   
    };

    const handleClose = (_event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    
const Action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );    

    return (
        <form onSubmit={sendEmail} ref={form} >
            <span className='FormeInfoPessoais'>
                <InputComponents
                    placeholder='Digite aqui'
                    wdt='47%'
                    type='text'
                    name={'from_name'}
                    title={'Nome:'}
                    onChange={function (): void {
                        throw new Error('Function not implemented.')
                    }} />
                <InputComponents
                    placeholder='Email@exemplo.com.br'
                    wdt='47%'
                    type='email'
                    name={'user_email'}
                    title={'Email:'}
                    onChange={function (): void {
                        throw new Error('Function not implemented.')
                    }} />
                <InputComponents
                    placeholder='Digite aqui'
                    wdt='100%'
                    type='text'
                    name={'from_assunto'}
                    title={'Assunto:'}
                    onChange={function (): void {
                        throw new Error('Function not implemented.')
                    }} />
            </span>
            <span className='FormContainerMensg'>
                <span className='form-boxMessage'>
                    <label>Mensagem:</label>
                    <textarea
                        placeholder='Mensagem'
                        className='Form-Message'
                        name='message'
                    ></textarea>
                </span>
            </span>
            <span className='BoxButtonSubmit'>
                <ButtonSubmit
                    onClick={handleClick}
                    value={'Send'}
                    titulo={'Enviar'}
                />
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="enviado com sucesso..."
                    action={Action}
                />
            </span>
        </form>
    )
}
