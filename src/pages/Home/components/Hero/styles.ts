import styled from 'styled-components'

import heroBackgroundImage from '../../../../assets/hero-background.png'
import { TitleText } from '../../../../components/Typography'

export const HeroContainer = styled.section`
  width: 100%;
  height: 34rem;
  background: ${() => `url(${heroBackgroundImage})`} no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`

export const HeroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`
