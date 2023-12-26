import Link from "next/link"

import {HamburgerMenu, hamburgerLink} from "./hamburger-menu/hamburger-menu"
import "./header.css"


export default function Header() {

	let menuList: hamburgerLink[] = [
		{
			name: "メンバー",
			url: "/member",
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

	return (
		<header className="top-0 w-full h-24 flex items-center p-5 fixed z-50 justify-between">
			<div className="circle-name">
				<Link href="/" className="text-2xl font-mono">プログラミング研究会</Link>
			</div>
			<ul className="hidden md:flex header-menu gap-3 duration-[1s]">
				<li><Link href="/member" className=" text-xl">メンバー</Link></li>
				<li><Link href="/member" className=" text-xl">メンバー</Link></li>
				<li><Link href="/member" className=" text-xl">メンバー</Link></li>
			</ul>
			<HamburgerMenu className="block md:hidden" links={menuList}/>
		</header>
	)
}
