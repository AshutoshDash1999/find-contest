import EventList from '@/components/EventList'
import styles from '@/styles/Home.module.css'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <EventList/>
    </>
  )
}
