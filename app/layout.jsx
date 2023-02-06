import './globals.css'
import { Montserrat } from "@next/font/google"
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../app/assets/MovieBaseLogo.svg'

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: ['--font-montserrat'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${montserrat.className} mx-32 my-12`}>
        <Link className="block text-2xl mb-10 cursor-pointer font-bold" href='/'>
          <Image src={Logo} width={150} alt="go to homepage"/>
          </Link>
        {children}
        </body>
    </html>
  )
}
