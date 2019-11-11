import React from 'react';
import * as rtl from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Dashboard from './Dashboard'

test('Dashboard renders as expected', () => {
    const dash = rtl.render(<Dashboard/>)
    expect(dash.asFragment()).toMatchSnapshot()
})

test('Unlocked init', async () => {
    const panel = rtl.render(<Dashboard/>)
    await panel.findByText(/unlocked/i)
})