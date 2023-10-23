import React from 'react';
import { screen, render } from '@testing-library/react';
import { Home } from '../../views';

describe('App renders successfully', () => {
  it('renders learn react link', () => {
    render(<Home />);
    const linkElement = screen.queryAllByText(/Olúwáségun/i);
    expect(linkElement[0]).toBeInTheDocument();
  });
});
