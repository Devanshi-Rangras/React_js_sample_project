import { render, screen } from '@testing-library/react'
import App from './App'

test('renders bg color changer title', () => {
  render(<App />)
  expect(screen.getByText(/bg color/i)).toBeInTheDocument()
})
