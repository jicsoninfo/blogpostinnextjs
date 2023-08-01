import Navbar from '@/components/navbar/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/footer/Footer';
import { ThemeProvider } from '@/context/ThemeContext';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'R B Sharma',
  description: 'This is the description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Layout */}
      <body className={inter.className}>
        {/* <h1>Common layout</h1> */}
        <ThemeProvider>
        <div className='container'>
        <Navbar />
        {children}
        <Footer />
        </div>
        </ThemeProvider>
        </body>
    </html>
  )
}
