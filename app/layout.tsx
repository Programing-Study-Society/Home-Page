import type { Metadata } from 'next'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@components/header/header'
import { hamburgerLink } from '@/components/header/hamburger-menu/hamburger-menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'プロ研 -ホームページ-',
	description: 'OECU プログラミング研究会のホームページです',
}

let menuList: hamburgerLink[] = [
	{
		name: "ホーム",
		url: "/",
	},
	{
		name: "メンバー",
		url: "/member",
	},
	{
		name: "メンバー",
		url: "/member",
	}
]

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="ja">
			<body className={inter.className}>
				<Header menuList={menuList}/>
				{children}
				<Link 
					href="https://twitter.com/OECU_ProKen" 
					className="
						x-profile-button 
						fixed 
						text-xl 
						right-10 
						bottom-10 
						z-10 
						bg-sky-500 
						text-gray-200 
						p-4 
						rounded-2xl
					"
				>
					X をフォロー
				</Link>
			</body>
		</html>
	)
}
