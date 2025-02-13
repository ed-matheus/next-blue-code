"use client";

import "@/app/css/styles.sass";
import Link from "next/link";

// Hook
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();

    return (
        <nav className="header-container">
            <Link href={'/'}>
                <h2 className="project-title">BlueCode</h2>
            </Link>

            <ul className="navigation">
                <li>
                    <Link className={`link ${pathname === "/" ? "active" : ""}`} href={'/'}>
                        Home
                    </Link>
                </li>

                <li>
                    <Link className={`link ${pathname === "/sobre" ? "active" : ""}`} href={'/sobre'}>
                        Sobre
                    </Link>
                </li>

                <li>
                    <Link className={`link ${pathname === "/servicos" ? "active" : ""}`} href={'/servicos'}>
                        Serviços
                    </Link>
                </li>

                <li>
                    <Link className={`link ${pathname === "/contato" ? "active" : ""}`} href={'/contato'}>
                        Contato
                    </Link>
                </li>
            </ul>

            <button className="btn">Fale Conosco</button>
        </nav>
    )
}

export default Header