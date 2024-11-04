import { IoPlayCircle, IoPlayBack, IoPlayForward, IoMusicalNote} from "react-icons/io5"
import styles from './Navbar.module.css'
 
const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <h1>Kodigo<span><IoMusicalNote />Music</span></h1>
        <ul>
            <IoPlayBack/>
            <IoPlayCircle/>
            <IoPlayForward/>
        </ul>
    </nav>
  )
}

export default Navbar