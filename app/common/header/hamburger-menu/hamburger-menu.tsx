"use client";

import {useState} from "react"

type props = {
	//children: React.ReactNode,
	className: string
}

export default function HamburgerMenu({
	//children,
	className
}:props) {

	const [toggle, setToggle] = useState<boolean>(false)

	return (
		<div className={"hamburger-menu " + className}>
			<button type="button" className="hamburger-icon w-10 h-10 rounded-full bg-amber-100 " onClick={() => {setToggle(!toggle);console.log(toggle)}}>
				<span className="hamburger-bar relative block h-1 w-8 top-0 bg-black"></span>
				<span className="hamburger-bar relative block h-1 w-8 top-2 bg-black"></span>
				<span className="hamburger-bar relative block h-1 w-8 top-4 bg-black"></span>
			</button>
		</div>
	)
}