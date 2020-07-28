import React from 'react'
import logo from '../../assets/logo.png'
import './Menu.css'
// import ButtonLink from './components/ButtonLink'
import { Button } from '../Button'

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img src={logo} alt="RosanaFlix logo" className="Logo" />
      </a>
      <Button as="a" href="/">
        Novo Vídeo
      </Button>
    </nav>
  )
}

export default Menu
