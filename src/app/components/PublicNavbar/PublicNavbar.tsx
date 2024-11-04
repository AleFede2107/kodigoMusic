import Link from 'next/link'
import {IoMusicalNote} from "react-icons/io5"
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";
import styles from './PublicNavbar.module.css'
 
const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <h1>Kodigo<span><IoMusicalNote />Music</span></h1>
        <ul>
            <li><Link href='/login'><FaSignInAlt /><span>Login</span></Link></li>
            <li><Link href='/login'><FaUserPlus /><span>Sign Up</span></Link></li>
        </ul>
    </nav>
  )
}

export default Navbar 