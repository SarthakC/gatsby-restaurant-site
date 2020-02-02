import React, { useState } from "react"

import { FacebookIcon, TwitterIcon, InstagramIcon } from "./Footer.styles"

const Footer = () => {
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

  return <footer>footer content</footer>
}

export default Footer
