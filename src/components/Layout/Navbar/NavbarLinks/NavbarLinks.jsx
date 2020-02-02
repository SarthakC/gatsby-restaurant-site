import React, { useState } from "react"
import { LinkWrapper, NavbarLink } from "./NavbarLinks.styles"

const NavbarLinks = ({ navbarOpen }) => {
  const [state] = useState({
    links: [
      {
        id: 0,
        path: "/",
        name: "home",
      },
      {
        id: 2,
        path: "/about",
        name: "about",
      },
      {
        id: 3,
        path: "/menu",
        name: "menu",
      },
      {
        id: 4,
        path: "/contact",
        name: "contact",
      },
    ],
  })
  const { links } = state

  return (
    <LinkWrapper open={navbarOpen}>
      {links.map(({ id, path, name }) => {
        return (
          <li key={id}>
            <NavbarLink to={path}>{name}</NavbarLink>
          </li>
        )
      })}
    </LinkWrapper>
  )
}

export default NavbarLinks
