import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import About from '@/components/about'
import Experiences from '@/components/experiences'
import Contact from '@/components/contact'
import NavBar from '@/components/navBar'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <NavBar/>
        <div className={styles.description}>
          <About/>
          <Experiences/>
          <Contact/>
          <h1>Hello</h1>
        </div>
      </main>
    </div>
    
  )
}


// Target eg: https://colorlib.com/wp/resume-website-templates/