/*
Projet 07 "Shiny" cours OpenClassrooms 
par Manuel MILLET le 03 novembre 2022
P2-C3  19h00 
*/
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../utils/style/Atoms'
import DarkLogo from '../../assets/dark-logo.png'
import LightLogo from '../../assets/light-logo.png'
import { useTheme } from '../../utils/hooks'

const HomeLogo = styled.img`
  height: 70px;
`
const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
function Header() {
  const { theme } = useTheme()
  return (
    <NavContainer>
      <Link to="/"><HomeLogo src={theme === 'light' ? DarkLogo : LightLogo} /></Link>
      <div>
        <StyledLink $theme={theme} to="/">Accueil</StyledLink>
        <StyledLink $theme={theme} to="/freelances">Profils</StyledLink>
        <StyledLink $theme={theme} to="/survey/1" $isFullLink>Faire le test</StyledLink>
      </div>
    </NavContainer>
  )
}
export default Header
/*
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

*/