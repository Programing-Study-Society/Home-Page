import Link from "next/link"

export default function Header() {
	return (
		<header className="w-full h-24 flex items-center p-5 justify-end absolute z-50">
			<ul className="flex gap-3">
				<li><Link href="/member" className=" text-xl">メンバー</Link></li>
				<li><Link href="/member" className=" text-xl">メンバー</Link></li>
				<li><Link href="/member" className=" text-xl">メンバー</Link></li>
			</ul>
		</header>
	)
}
