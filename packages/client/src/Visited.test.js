import { render, screen } from '@testing-library/react'
import { Visited } from './Visited'

test('renders title', () => {
  render(<Visited />)
  const header = screen.getByText('Visited')
  expect(header).toBeInTheDocument()
})

test('renders cards', () => {
  render(<Visited />)
  const cards = screen.getByTestId('cards')
  expect(cards).toBeInTheDocument()
})
