import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('deve renderizar sem quebrar', () => {
    render(<App />);
  });
});
