import { Cards } from '../Cards'
import { render, screen } from '@testing-library/react'

const props = {
  cities: [
    {
      id: 1,
      title: 'test title 1',
      country: 'country 1',
      visited: false,
      favorite: false,
      updateVisited: () => {},
      updateFavorites: () => {},
    },
    {
      id: 2,
      title: 'test title 2',
      country: 'country 2',
      visited: false,
      favorite: false,
      updateVisited: () => {},
      updateFavorites: () => {},
    },
  ],
  toggleVisited: () => {},
  toggleFavorites: () => {},
}

describe('Cards', () => {
  test('should render a Cards component', () => {
    render(<Cards {...props} />)
    const cards = screen.getByTestId('cards')
    expect(cards).toBeTruthy()
  })

  test('should render a card list', () => {
    render(<Cards {...props} />)
    const card = screen.getAllByTestId('card')
    expect(card).toHaveLength(2)
  })

  test('should not render a card list', () => {
    render(<Cards {...props} cities={[]} />)
    const card = screen.getByText('no items to show')
    expect(card).toBeTruthy()
  })

  test('should render a Cards match snapshot', () => {
    render(<Cards {...props} />)
    const cards = screen.getByTestId('cards')
    expect(cards).toMatchSnapshot()
  })
})
