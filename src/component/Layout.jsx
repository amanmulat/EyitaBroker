import React from 'react'
import { Box } from "@chakra-ui/react"
import NavBar from './NavBar'
import Footer from './Footer'

function Layout({children}) {
  return (
    <Box maxWidth="1290px" m="auto">
        <header>
            <NavBar/>
        </header>
        <main>
            {children}
        </main>
        <footer>
              <Footer />
        </footer>
    </Box>
  )
}

export default Layout