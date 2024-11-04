import Link from 'next/link'
import styles from './PublicMain.module.css'
import Image from 'next/image'

const PublicMain = () => {
  return (
    <main className={styles.main}>
        <h1>Start Listening to your favorite music</h1>
        <Link href='/login'>Register</Link>
        <div className={styles.background}>
            <Image 
                src="https://res.cloudinary.com/dgdn7rgoj/image/upload/v1730123372/kodigo%20music/hpxicyalvknoh6xmqjwt.jpg"
                width={800}
                height={400}
                alt='Vynil disks'
            />
            <div className={styles.gradientOverlay} />
        </div>
    </main>
  )
}

export default PublicMain