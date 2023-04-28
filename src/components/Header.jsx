import { useState } from 'react'
import { HeaderLink } from './HeaderLink'
import { AiOutlineCloseSquare } from 'react-icons/ai/index.js'
import { TfiMenuAlt, TfiInstagram } from 'react-icons/tfi/index.js'

export const Header = ({ children }) => {
    const [isOpen, setisOpen] = useState(false)

    function handleOnclick() {
        setisOpen(open => !open)
    }

    return (
        <header className='bg-white text-lg flex flex-col w-full h-auto sm:flex-row sm:justify-around sm:h-auto'>
            <div className='flex justify-between items-center p-3'>
                <HeaderLink href='/' ariaLabel='redirección a la página principal'>{children}</HeaderLink>
                <div onClick={handleOnclick} className='sm:hidden'>
                    {
                        (isOpen)
                            ? <AiOutlineCloseSquare className='w-8 h-8' />
                            : <TfiMenuAlt className='w-8 h-8' />
                    }
                </div>
            </div>
            <nav className={`bg-white z-10 border sm:border-none absolute p-5 top-20 inset-x-0 transition transform origin-top-right ${(!isOpen) && 'hidden'} sm:block  sm:relative sm:top-0`}>
                <ul className='flex flex-col justify-center items-center gap-5 text-center w-full sm:flex-row sm:h-14'>
                    <HeaderLink href='/' ariaLabel='redirección a la página principal'>Inicio</HeaderLink>
                    <HeaderLink href='/contacto' ariaLabel='redirección a la pagina de contacto'>Contacto</HeaderLink>
                    <HeaderLink href='/servicios' ariaLabel='redirección a la página de servicios'>Servicios</HeaderLink>
                    <HeaderLink href='https://www.instagram.com/watt_col/' target='_blank' ariaLabel='redirección al perfil de instagram oficial'><TfiInstagram className='h-8 w-8' /></HeaderLink>
                </ul>
            </nav>
        </header>
    )
}