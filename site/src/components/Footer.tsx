import { links } from "../config/links/footer"

const Footer = () => {

    return (
        <footer>
            {links.map((link, index) => (
                <a key={index} href={link.href}>
                    {link.icon}
                    <span>{link.title}</span>
                </a>
            ))}
        </footer>
    );
}

export default Footer;