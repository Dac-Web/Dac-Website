import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {color} from '../Info/ColorTheme'

export const FooterContainer = styled.footer`
  background-color: ${color.Footer};
`

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`
export const FooterLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`

export const FooterLinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  // background-color: red;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    justify-content: space-between;
    align-self: flex-start;
  }
`
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  justify-self: space-between;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`
export const FooterLinkTitle = styled.h1`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`
export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: ${color.Blue};
    transition: 0.3s ease-in-out;
  }
`
export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  
`
export const WebsiteRights = styled.small`
  color: #fff;
  display: flex;
  margin-bottom: 16px;
  align-items: center;
  align-content: center;
  align-text: center;
  justify-content: center;
  justify-items:center;
  justify-self: center;
  align-self:center;

  @media screen and (max-width: 768px) {
    
  }
`
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  margin-bottom: 30px;
`
export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`