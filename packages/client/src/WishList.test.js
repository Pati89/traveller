import { render, screen } from '@testing-library/react'
import { WishList } from './WishList'

test('renders title', () => {
  render(<WishList />)
  const header = screen.getByText('Wish list')
  expect(header).toBeInTheDocument()
})

test('renders cards', () => {
  render(<WishList />)
  const cards = screen.getByTestId('cards')
  expect(cards).toBeInTheDocument()
})
