/*
Projet 07 "Shiny" cours OpenClassrooms 
par Manuel MILLET le 03 novembre 2022
P3-C3  19h00 
*/
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useTheme } from '../../utils/hooks'
import ErrorIllustration from '../../assets/404.svg'

const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  align-items: center;
`
const ErrorTitle = styled.h1`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-weight: 300;
`
const ErrorSubtitle = styled.h2`
  color: ${colors.secondary};
  font-weight: 300;
`
const Illustration = styled.img`
  max-width: 800px;
`
function Error() {
  const { theme } = useTheme()
  return (
    <ErrorWrapper theme={theme}>
      <ErrorTitle theme={theme}>Oups...</ErrorTitle>
      <Illustration src={ErrorIllustration} />
      <ErrorSubtitle theme={theme}>
        Il semblerait que la page que vous cherchez n’existe pas
      </ErrorSubtitle>
    </ErrorWrapper>
  )
}

export default Error