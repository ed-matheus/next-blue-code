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
                <Link className={`link ${pathname === "/" ? "active" : ""}`} href={'/'}>
                    <li>Home</li>
                </Link>

                <Link className={`link ${pathname === "/sobre" ? "active" : ""}`} href={'/sobre'}>
                    <li>Sobre</li>
                </Link>

                <Link className={`link ${pathname === "/servicos" ? "active" : ""}`} href={'/servicos'}>
                    <li>Serviços</li>
                </Link>

                <Link className={`link ${pathname === "/contato" ? "active" : ""}`} href={'/contato'}>
                    <li>Contato</li>
                </Link>
            </ul>

            <button className="btn">Fale Conosco</button>
        </nav>
    )
}

export default Header