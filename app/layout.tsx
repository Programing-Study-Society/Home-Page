import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './common/header/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'プロ研 -ホームページ-',
  description: 'OECU プログラミング研究会のホームページです',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
