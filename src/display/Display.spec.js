import React from 'react';
import * as rtl from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Display from './Display'

test('Display renders as expected', () => {
    const panel = rtl.render(<Display/>)
    expect(panel.asFragment).toMatchSnapshot()
})

test('Displays closed if closed', () => {
    const panel = rtl.render(<Display closed = {true}/>)
    const closed = panel.getByText(/closed/i);
    expect(closed).toHaveTextContent('Closed');
})

test('Init open', async () => {
    const panel = rtl.render(<Display/>)
    await panel.findByText(/open/i)
})

test('Init unlocked', async () => {
    const panel = rtl.render(<Display/>)
    await panel.findByText(/unlocked/i)
})