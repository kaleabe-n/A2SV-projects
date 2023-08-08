import Link from "next/link";
import headerstyle from "../styles/header.module.css"

const Header = () => {

    //header and navigation(navbar)
    return ( 
        <header className={headerstyle.header}>
            <nav className={headerstyle.nav}>
                <h1 className={headerstyle.title}>Blogs</h1>
                <ul>
                    <li className={headerstyle.listitem}><Link href="/" className={headerstyle.linkitem}>Home</Link></li>
                    <li className={headerstyle.listitem}><Link href="/newblog" className={headerstyle.linkitem}>Add Blog</Link></li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Header;