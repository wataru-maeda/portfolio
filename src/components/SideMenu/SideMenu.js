import React from 'react'
import { elastic as SideMenu } from 'react-burger-menu'

export default ({
  isOpen = false,
  children,
  onStateChange
}) => (
  <SideMenu
    pageWrapId="page-wrap"
    outerContainerId="outer-container"
    isOpen={isOpen}
    styles={styles}
    onStateChange={(newState) => onStateChange(newState)}
    right
  >
    {children}
  </SideMenu>
)

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px',
    display: 'none',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
    margin: 8,
  },
  bmCross: {
    background: '#cacaca',
  },
  bmMenu: {
    background: '#353e49',
    padding: '2.5em 0 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#353e49',
  },
  bmItemList: {
    padding: '0.8em',
  },
  bmItem: {
    outline: 0,
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
}