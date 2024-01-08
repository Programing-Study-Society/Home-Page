import Link from "next/link"

import {HamburgerMenu, hamburgerLink} from "./hamburger-menu/hamburger-menu"
import "./header.css"


export default function Header({menuList}:{menuList:hamburgerLink[]}) {
  return (
    <header 
      className="
        fixed 
        top-1
        z-50 
        h-20
        w-full
      "
    >
      <div 
        className="
          header-container
          w-11/12 
          h-full
          m-auto
          rounded-xl
          flex 
          justify-between
          items-center
          p-4
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
        <nav
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
              <Link 
                href={link.url} 
                key={index}
                className="
                  block
                  text-xl
                  p-2
                  rounded-xl
                  duration-[0.5s]
                "
              >
                {link.name}
              </Link>
            )
          })}
        </nav>
        <HamburgerMenu 
          className="
            block 
            md:hidden
          " 
          links={menuList}
        />
      </div>
    </header>
  )
}
