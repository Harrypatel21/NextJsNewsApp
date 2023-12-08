'use client'

import { useRouter } from 'next/navigation'
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    const router = useRouter();

  return (
    <div className={styles.main}>
      <div onClick={() => router.push('./')}>Home</div>
      <div onClick={() => router.push('/feed')}>Feed</div>
      <div onClick={() => router.push('./about')}>About</div>
      <div onClick={() => router.push('./favourites')}>Favourites</div>
    </div>
  )
}

export default Navbar
