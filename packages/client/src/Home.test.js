import { render, screen } from '@testing-library/react'
import { Home } from './Home'

test('renders title', () => {
  render(<Home />)
  const header = screen.getByText('Smart traveller')
  expect(header).toBeInTheDocument()
})

test('renders form', () => {
  render(<Home />)
  const form = screen.getByTestId('form')
  expect(form).toBeInTheDocument()
})

test('renders cards', () => {
  render(<Home />)
  const cards = screen.getByTestId('cards')
  expect(cards).toBeInTheDocument()
})
