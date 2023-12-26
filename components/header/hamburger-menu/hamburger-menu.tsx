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
					<li className="menu-link" key={index}>
						<Link className="text-xl" href={link.url}>{link.name}</Link>
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
			{toggle ? (
				<UrlList className="menu-list slide-in" links={links}></UrlList>
			):(
				<UrlList className="menu-list slide-out" links={links}></UrlList>
			)}
			<button 
				type="button" 
				className="hamburger-icon w-16 h-16 rounded-2xl bg-gray-600 bg-opacity-80" 
				onClick={() => {setToggle(!toggle);console.log(toggle)}}
			>
				<div className="hamburger-bar w-full h-full">
					<span/>
				</div>
			</button>
		</div>
	)
}