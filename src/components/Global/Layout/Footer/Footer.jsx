import React, { useState } from "react"

import { FooterWrapper, FooterTitle, IconWrapper } from "./Footer.styles"

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
  const [state] = useState({
    icons: [
      {
        id: 1,
        icon: <FaFacebook />,
        path: "https://www.facebook.com/",
      },
      {
        id: 2,
        icon: <FaTwitter />,
        path: "https://www.twitter.com/",
      },
      {
        id: 3,
        icon: <FaInstagram />,
        path: "https://www.instagram.com/",
      },
    ],
  })

  const { icons } = state

  return (
    <FooterWrapper>
      <FooterTitle>eatery</FooterTitle>
      <IconWrapper>
        {icons.map(({ path, id, icon }) => (
          <a href={path} key={id}>
            {icon}
          </a>
        ))}
      </IconWrapper>
      <p>copyright &copy; {new Date().getFullYear()}</p>
    </FooterWrapper>
  )
}

export default Footer
