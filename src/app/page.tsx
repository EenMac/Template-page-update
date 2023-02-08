import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import NavBar from '@/components/navBar'
import About from '@/components/about'
import Experiences from '@/components/experiences'
import Contact from '@/components/contact'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <NavBar/>
        <About/>
        <Experiences/>
        <Contact/>
        <h1>Hello</h1>
      </div>
    </main>
  )
}
