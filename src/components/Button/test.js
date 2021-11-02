import React from 'react';
import { screen } from '@testing-library/react';
import { render } from 'react-dom';
import { Button } from '.';

describe('Like button', () => {
    beforeEach(() => {
        render(<Button />)
    })

    test('renders a button with a heart in it', () => {
        let heart = screen.queryByRole('switch')
        expect(heart.textContent).toBe('&hearts;')
    })
})