import React, {useContext} from 'react'
import {Responsive} from 'semantic-ui-react'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'

import CartContext from '../Context/CartContext'

const Header = ({location}) => {
  const {cartCount} = useContext(CartContext)

  return (
    <>
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <MobileMenu location={location} cartCount={cartCount} />
      </Responsive>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <DesktopMenu location={location} cartCount={cartCount} />
      </Responsive>
    </>
  )
}

export default Header
