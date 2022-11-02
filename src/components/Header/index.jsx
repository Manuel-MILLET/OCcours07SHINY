import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'
import DarkLogo from '../../assets/dark-logo.png'

const HomeLogo = styled.img`
  height: 70px;
`
const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

/*
const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
      props.$isFullLink &&
      `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`
*/

function Header() {
  return (
    <NavContainer>
      <Link to="/"><HomeLogo src={DarkLogo} /></Link>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelances">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
      </div>
    </NavContainer>
  )
}

export default Header

/*

import { StyledLink } from '../../utils/style/Atoms'
import DarkLogo from '../../assets/dark-logo.png'
import { useTheme } from '../../utils/hooks'
import LightLogo from '../../assets/light-logo.png'
import colors from '../../utils/style/colors'

const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
      props.$isFullLink &&
      `color: white; border-radius: 30px; background-color:  ${colors.primary};`}
`
const HomeLogo = styled.img`
  height: 70px;
`
const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

*/