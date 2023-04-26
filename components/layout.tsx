import Footer from './footer'
import Header from './header'
import { ReactNode } from "react"
import { Roboto } from 'next/font/google'
import data from '../json/data.json'
import BottomBar from './bottombar'

interface Props {
  children?: ReactNode;
}

const Font = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin']
})

export default function Layout({ children } : Props) {
  const menuLinks = data?.data[0].menuLinks

  return (
    <div className={Font.className}>
      <Header/>
      <main className="main">
        { children }
      </main>
      <Footer menuLinks={menuLinks}/>
      <BottomBar/>
    </div>
  )
}