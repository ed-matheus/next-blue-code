"use client";

import "@/app/css/styles.sass";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ícones de redes sociais
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

// ícones normais
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <>
            <footer className="w-full flex items-start justify-around">
                <h1 className="text-white font-bold">BlueCode</h1>

                {/* Links rápidos (Menu) */}
                <div className="menu-links flex flex-col">
                    <h2 className="menu-title mb-3">Menu</h2>
                    <ul>
                        <li>
                            <Link href={'/'}>Home</Link>
                        </li>

                        <li>
                            <Link href={'/sobre'}>Sobre</Link>
                        </li>

                        <li>
                            <Link href={'/servicos'}>Serviços</Link>
                        </li>

                        <li>
                            <Link href={'/contato'}>Contato</Link>
                        </li>
                    </ul>
                </div>

                {/* Links para Redes Sociais */}
                <div className="social-links">
                    <h2 className="social-title mb-4">Redes Sociais</h2>

                    <Link className="me-3" href={'https://www.google.com/'} target="_blank">
                        <FontAwesomeIcon className="icon" icon={faFacebook} />
                    </Link>

                    <Link href={'https://www.google.com/'} target="_blank">
                        <FontAwesomeIcon className="icon" icon={faInstagram} />
                    </Link>
                </div>

                {/* Links para Redes Sociais */}
                <div className="contact">
                    <h2 className="social-title mb-3">Fale Conosco</h2>
                    <ul>
                        <li>
                            <FontAwesomeIcon className="me-2" icon={faPhone} />
                            (00) 90000-0000
                        </li>
                        <li>
                            <FontAwesomeIcon className="me-2" icon={faEnvelope} />
                            email@exemplo.com
                        </li>
                    </ul>
                </div>
            </footer>

            <div className="copyright w-full p-4 text-center">
                <h2>
                    BlueCode © - Todos os direitos reservados <br />
                    Desenvolvido por
                    <span className="ms-1">
                        <Link href={'https://www.linkedin.com/in/edson-matheus-b5a0171ba/'} target="_blank">Ed Matheus</Link>
                    </span>
                </h2>
            </div>
        </>
    )
}

export default Footer