import React, { useState } from "react"
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  IconWrapper,
} from "./NavbarIcons.styles"

const NavbarIcons = () => {
  const [state] = useState({
    icons: [
      {
        id: 1,
        icon: <FacebookIcon />,
        path: "https://www.facebook.com/",
      },
      {
        id: 2,
        icon: <TwitterIcon />,
        path: "https://www.twitter.com/",
      },
      {
        id: 3,
        icon: <InstagramIcon />,
        path: "https://www.instagram.com/",
      },
    ],
  })

  const { icons } = state

  return (
    <IconWrapper>
      {icons.map(({ path, icon, id }) => {
        return (
          <a href={path} key={id} target="_blank" rel="noopener noreferrer">
            {icon}
          </a>
        )
      })}
    </IconWrapper>
  )
}

export default NavbarIcons
