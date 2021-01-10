import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from './logo.svg'
import './styles.css'

function NavBar() {
    return (
        <nav className='main-navbar'>
            <Logo/>
            <Link to='/' className='logo-text'>DS Delivery</Link>
        </nav>
    )
}
export default NavBar