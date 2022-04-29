import Styles from 'styles/Navbar.module.css'
import SvgShoppingCart from 'svg/ShoppingCart'

export default function Navbar() {
    return (
        <header>
            <nav className={Styles.navbar}>
                <div></div>
                <div>Logo</div>
                <SvgShoppingCart className={Styles.cartIcon} />
            </nav>
        </header >
    )
}