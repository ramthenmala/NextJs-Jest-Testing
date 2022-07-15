import {render, screen} from '@testing-library/react'
import Hello from './Hello';

describe('Testing Hello Component', () => {
    it('Should return string Hello World', () => {
        render(<Hello/>)
        const helloText = screen.getByText('Hello world');
        expect(helloText).toBeInTheDocument()
    })
})