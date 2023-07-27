import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div>
        <nav>
            <menu>
                <Link href='/'>home</Link>
                <Link href='/about'>About</Link>
            </menu>
        </nav>
    </div>
  )
}

export default NavBar