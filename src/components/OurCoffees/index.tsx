import { CoffeeCard } from '../CoffeeCard'
import { TitleText } from '../Typography'
import { CoffeeList, OurCoffeesContainer } from './styles'

export function OurCoffees() {
  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>

      <CoffeeList>
        <CoffeeCard />
      </CoffeeList>
    </OurCoffeesContainer>
  )
}
