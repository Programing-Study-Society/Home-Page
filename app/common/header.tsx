import Link from "next/link"

export default function Header() {
	return (
		<header className="top-0 w-full h-24 flex items-center p-5 fixed z-50">
			<div className="circle-name">
				<Link href="/" className="text-2xl font-mono">プログラミング研究会</Link>
			</div>
			<ul className="header-menu flex gap-3">
				<li><Link href="/member" className=" text-xl">メンバー</Link></li>
				<li><Link href="/member" className=" text-xl">メンバー</Link></li>
				<li><Link href="/member" className=" text-xl">メンバー</Link></li>
			</ul>
		</header>
	)
}
