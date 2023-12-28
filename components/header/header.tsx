import Link from "next/link"

import {HamburgerMenu, hamburgerLink} from "./hamburger-menu/hamburger-menu"
import "./header.css"


export default function Header({menuList}:{menuList:hamburgerLink[]}) {
	return (
		<header className="top-0 w-full h-24 flex items-center p-5 fixed z-50 justify-between">
			<div className="circle-name">
				<Link href="/" className="text-2xl font-mono">プログラミング研究会</Link>
			</div>
			<ul className="hidden md:flex header-menu gap-3 duration-[1s]">
				{menuList.map((link, index) => {
					return (
						<li key={index}><Link href={link.url} className=" text-xl">{link.name}</Link></li>
					)
				})}
			</ul>
			<HamburgerMenu className="block md:hidden" links={menuList}/>
		</header>
	)
}
