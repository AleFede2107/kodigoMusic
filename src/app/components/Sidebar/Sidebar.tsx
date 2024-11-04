'use client'

import { FaHome, FaList, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { IoMusicalNote } from "react-icons/io5";
import styles from './Sidebar.module.css'
import { signOut } from "@/app/logout/actions";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <div className={styles.user}>
            <div className={styles.userInfo}>
                <FaCircleUser />
                <h1>UserName</h1>
            </div>
            <h3><IoMusicalNote />Currently listening<IoMusicalNote /></h3>
        </div>
        <ul>
            <li><FaHome /><span> Home</span></li>
            <li><FaList /><span> Playlists</span></li>
            <li><FaUser /><span> Account</span></li>
            <li><FaCog /><span> Settings</span></li>
            <li><button onClick={() => signOut()}><FaSignOutAlt /> <span>Sign Out</span></button></li>
        </ul>
    </div>
  )
}

export default Sidebar