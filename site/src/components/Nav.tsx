import { usePathname } from "next/navigation"

import { links } from "../config/links/nav"

const Nav = () => {

    const pathname = usePathname()

    return (
        <nav>
            {links.map((link, index) => (
                <a key={index} href={link.href} aria-disabled={link.href === pathname ? "true" : "false"} className="navlink">
                    <span>{link.title}</span>
                </a>
            ))}
        </nav>
    );
}

export default Nav;