import { Form } from '../Form'
import { render, screen, fireEvent } from '@testing-library/react'

const props = {
  onSubmit: () => {},
  input: 'test',
  onChange: () => {},
}

describe('Form', () => {
  test('render a Form', () => {
    render(<Form {...props} />)
    const form = screen.getByTestId('form')
    expect(form).toBeTruthy()
  })

  test('render a submit button', () => {
    render(<Form {...props} />)
    const button = screen.getByTestId('submit-button')
    expect(button).toBeTruthy()
  })

  test('should trigger onSubmit function', () => {
    const spy = jest.fn(e => e.preventDefault())
    render(<Form {...props} onSubmit={spy} />)
    const button = screen.getByTestId('submit-button')
    expect(button).toBeTruthy()
    fireEvent.click(button)
    expect(spy).toHaveBeenCalled()
  })

  test('render a Form match snapshot', () => {
    render(<Form {...props} />)

    const form = screen.getByTestId('form')
    expect(form).toMatchSnapshot()
  })
})
