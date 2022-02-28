import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { FaTimes } from 'react-icons/fa'
import { color } from '../Info/ColorTheme'

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`
export const SidebarWrapper = styled.div`
  color: #fff;
  align-items: center;
  justify-content: center;
`
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(8, 60px);
  text-align: left;
  align-items: center;
  justify-content: center;
  place-items: center;
  @media  screen and (max-width: 480px) {
    grid-template-rows: repeat(8, 60px);
    text-align: center;
    align-items: center;
    justify-content: center;
    place-items: center;
    justify-items: center;
    
  }
`
export const SidebarLink = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  
  text-decoration: none;
  list-style: none;
  transition: 02s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  padding-right: 2rem;
  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`

export const SidebarLink2 = styled(LinkR)`
border-radius: 50px;
background: ${color.Blue};
white-space: nowrap;
padding: 16px 64px;
color: #fff;
font-size: 20px;
outline:  none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
&:hover {
  transition: all 0.2s ease-in-out;
  background: #fff;
  color: ${color.Navy};
}
`
export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  z-index : 999;
`
export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: ${color.Blue};
  white-space: nowrap;
  padding: 16px 64px;
  color: #fff;
  font-size: 16px;
  outline:  none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: ${color.Navy};
  }
`