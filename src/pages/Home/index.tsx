import { OurCoffees } from '../../components/OurCoffees'
import { Hero } from './components/Hero'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Hero />

      <OurCoffees />
    </HomeContainer>
  )
}
