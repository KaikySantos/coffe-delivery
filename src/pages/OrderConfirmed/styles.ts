import styled from 'styled-components'

export const OrderConfirmedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;

  h1 {
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    > img {
      width: 100%;
    }

    @media (max-width: 1000px) {
      flex-direction: column;
    }
  }
`

export const OrderDetailsContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  background: ${({ theme }) => theme.colors['base-background']};
  max-width: 32rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -3px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`
