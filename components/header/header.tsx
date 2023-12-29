import Link from "next/link"

import {HamburgerMenu, hamburgerLink} from "./hamburger-menu/hamburger-menu"
import "./header.css"


export default function Header({menuList}:{menuList:hamburgerLink[]}) {
	return (
		<header 
		className="
				fixed 
				top-0 
				z-50 
				w-full 
				h-24 
				p-5 
				flex 
				items-center 
				justify-between
			"
		>
			<div className="circle-name">
				<Link 
					href="/" 
					className="
						text-2xl 
						font-mono
					"
				>
					プログラミング研究会
				</Link>
			</div>
			<ul 
				className="
					header-menu 
					hidden 
					md:flex 
					gap-3 
					duration-[1s]
				"
			>
				{menuList.map((link, index) => {
					return (
						<li key={index}>
							<Link 
								href={link.url} 
								className="
									text-xl
								"
							>
								{link.name}
							</Link>
						</li>
					)
				})}
			</ul>
			<HamburgerMenu 
				className="
					block 
					md:hidden
				" 
				links={menuList}
			/>
		</header>
	)
}
