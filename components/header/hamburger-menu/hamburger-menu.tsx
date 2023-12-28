"use client";

import {useState} from "react"

import "./hamburger-menu.css"
import Link from "next/link";

export type hamburgerLink = {
	url:string,
	name:string,
}

type genUrlArg = {
	className:string|undefined,
	links:hamburgerLink[]
}

export function UrlList({
	className,
	links
}:genUrlArg) {
	return (
		<ul className={className}>
			{links.map((link, index) => {
				return (
					<li key={index} className="menu-link">
						<Link  href={link.url}>
							<div className="menu-link-item w-full h-full text-gray-700 text-xl">{link.name}</div>
						</Link>
					</li>
				)
			})}
		</ul>
	)
}

type props = {
	className: string|undefined,
	links: hamburgerLink[],
}

export function HamburgerMenu({
	className,
	links,
}:props) {

	const [toggle, setToggle] = useState<boolean>(false)

	return (
		<div className={"hamburger-menu " + className}>
			<UrlList className={"menu-list left-0 " + (toggle?"menu-list-active":"")} links={links}/>
			<button 
				type="button" 
				className="hamburger-icon w-14 rounded-2xl" 
				onClick={() => {setToggle(!toggle);console.log(toggle)}}
			>
				<div className="hamburger-bar w-full h-full">
					<span/>
				</div>
			</button>
		</div>
	)
}