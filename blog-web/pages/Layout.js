import Header from "@/components/header";
import globalstyles from '../styles/layout.module.css'

//Layout as wrapper for the whole page
const Layout = ({children}) => {
    return ( <div className={globalstyles.layout}>
        <Header />
        {children}
    </div> );
}
 
export default Layout;