/*
Projet 07 "Shiny" cours OpenClassrooms 
par Manuel MILLET le 03 novembre 2022
P2-C3 19h00 
*/

import { useTheme } from '../../utils/hooks'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
`
const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.secondary};
  padding-top: 30px;
`

function Footer() {
  const { toggleTheme, theme } = useTheme()
  return (
    <FooterContainer>
      <NightModeButton onClick={() => toggleTheme()}>
          Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
      </NightModeButton>
    </FooterContainer>
  )
}

export default Footer

/*

import { useContext } from 'react'
import { ThemeContext } from '../../utils/context'
import EmailInput from '../EmailInput'

const { toggleTheme, theme } = useContext(ThemeContext)
*/