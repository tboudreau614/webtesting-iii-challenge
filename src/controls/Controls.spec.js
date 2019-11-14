import React from 'react';
import * as rtl from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Controls from './Controls'

test('Controls render as expected', () =>{
    const panel = rtl.render(<Controls/>)
    expect (panel.asFragment()).toMatchSnapshot()
})

test('Buttons render as expected', () => {
    const panel = rtl.render(<Controls/>)
    const lock = panel.getByText(/lock gate/i)
    const open = panel.getByText(/close gate/i)
    expect(lock).toBeDefined();
    expect(open).toBeDefined();
})

test('If lock is currently in use, user should not be able to make the button fire again', () => {
    const mock = jest.fn()
    const panel = rtl.render(<Controls toggleLocked={mock}/>)
    const button = panel.getByText(/lock gate/i);
    rtl.act(() => {rtl.fireEvent.click(button) })
	expect(mock).toHaveBeenCalledTimes(0);
})