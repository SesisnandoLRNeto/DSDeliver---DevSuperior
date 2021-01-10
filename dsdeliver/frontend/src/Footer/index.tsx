import { ReactComponent as Youtube } from './youtube.svg'
import { ReactComponent as Linkedin } from './linkedin.svg'
import { ReactComponent as Instagram } from './instagram.svg'
import './styles.css'

function Footer() {
    return (
        <footer className='main-footer'>
         App desenvolvido na segunda semana Dev Superior
         <div className="footer-icons">
            <a href='https://www.youtube.com/c/DevSuperior' target='_new'>
              <Youtube/>
            </a>
            <a href='https://www.linkedin.com/school/devsuperior/' target='_new'> 
              <Linkedin/>
            </a>
            <a href='https://www.instagram.com/devsuperior.ig/' target='_new'> 
              <Instagram/>
            </a>
         </div>
        </footer>
    )
}
export default Footer