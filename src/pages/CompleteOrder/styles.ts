import styled from 'styled-components'

export const CompleteOrderContainer = styled.form`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
  padding: 0 2rem;
  margin-bottom: 2rem;
`

export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
`
