import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Header from './Header';

test('togle serach', () => {
  const { getByTestId } = render(<Header />);

  const toggle = getByTestId('togle-search');
  const search = getByTestId('search');

  expect(toggle).toBeInTheDocument();
  expect(search).toBeInTheDocument();
  expect(search).toHaveClass('searchHidden');

  userEvent.click(toggle);

  expect(search).not.toHaveClass('searchHidden');
});
