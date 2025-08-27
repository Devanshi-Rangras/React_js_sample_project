import { render, screen } from '@testing-library/react'
import App from './App'

test('renders hello fellows text', () => {
  render(<App />)
  expect(screen.getByText(/hello fellows/i)).toBeInTheDocument()
})
