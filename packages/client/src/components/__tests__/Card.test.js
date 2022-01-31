import { Card } from '../Card'
import { render, screen, fireEvent } from '@testing-library/react'

const props = {
  title: 'test title',
  country: 'country',
  visited: false,
  favorite: false,
  updateVisited: () => {},
  updateFavorites: () => {},
}

describe('Card', () => {
  test('should render a Card', () => {
    render(<Card {...props} />)
    const card = screen.getByTestId('card')
    expect(card).toBeTruthy()
  })

  test('should render title and country', () => {
    render(<Card {...props} />)
    const card = screen.getByText('test title, country')
    expect(card).toBeTruthy()
  })

  test('should render not visited button', () => {
    render(<Card {...props} />)
    const card = screen.getByText('Not visited')
    expect(card).toBeTruthy()
  })

  test('should render visited button', () => {
    render(<Card {...props} visited={true} />)
    const card = screen.getByText('Visited')
    expect(card).toBeTruthy()
  })

  test('should trigger updateVisited function', () => {
    const spy = jest.fn()
    render(<Card updateVisited={spy} />)
    const button = screen.getByTestId('visited-button')
    fireEvent.click(button)
    expect(spy).toHaveBeenCalled()
  })

  test('should render add to favorite button', () => {
    render(<Card {...props} visited={true} />)
    const button = screen.getByTestId('favorite-button')
    expect(button).toBeTruthy()
  })

  test('should trigger updateFavorites function', () => {
    const spy = jest.fn()
    render(<Card updateFavorites={spy} />)
    const button = screen.getByTestId('favorite-button')
    fireEvent.click(button)
    expect(spy).toHaveBeenCalled()
  })

  test('should render a SubmitButton match snapshot', () => {
    render(<Card {...props} />)
    const card = screen.getByTestId('card')
    expect(card).toMatchSnapshot()
  })
})
