import Image from 'next/image'
import styles from './Main.module.css'
import { IoPlayBack, IoPlayCircle, IoPlayForward } from 'react-icons/io5'
import { FaPlay } from 'react-icons/fa'


const Main = () => {
  return (
    <section className={styles.main}>
        <div className={styles.image}>
        <Image
            src="https://res.cloudinary.com/dgdn7rgoj/image/upload/v1730083160/kodigo%20music/qleupskckwrhvxoji3hk.jpg"
            alt="Lana del Rey album cover"
            width={350}
            height={350}
        />
        </div>
        
        <div className={styles.stats}>
            <h1>Summertime Sadness</h1>
            <h2>Lana del Rey</h2>
            <div className={styles.player}>
                <IoPlayBack/>
                <FaPlay />
                <IoPlayForward/>
            </div>
            <h3>0:00 <div></div> 3:19</h3>
        </div>
    </section>
  )
}

export default Main