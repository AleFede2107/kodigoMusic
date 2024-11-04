import { redirect } from 'next/navigation'

import { createClient } from '@/app/utils/supabase/server'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Main from '../components/Main/Main'
import styles from './page.module.css'

export default async function PrivatePage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return (
    <div >
      <Navbar/>
      <div className={styles.body}>
        <Sidebar/>
        <Main/>
      </div>
    </div>
  )
}