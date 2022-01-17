import Header from './Header'
import Footer from './Footer'
import layoutStyles from '../styles/Layout.module.css'

function Layout({ children }) {

    return(
        <div className={layoutStyles.App}>
            <Header layoutStyles={layoutStyles} />
            <>{ children }</>
            <Footer layoutStyles={layoutStyles} />
        </div>
    )
}
export default Layout