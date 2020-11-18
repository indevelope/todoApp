import React from 'react';
import App from './App';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { createMemoryHistory } from 'history';

describe('Routing', () => {
  it('renders Main page correctly', () => {
    const result = render(<App />);

    const headerEl = result.getAllByText('TN Todo App');

    expect(headerEl).toBeTruthy();
  });

  it('navigating to Contacts page and back to homepage works correctly', () => {
    const history = createMemoryHistory();
    const result = render(<App history={history} />);

    const goToContactsBtn = result.getByText('Contacts');
    userEvent.click(goToContactsBtn);

    const emailEl = result.getByText('tn@example.com');
    const { location: { pathname } } = history;
    expect(pathname).toBe('/contacts');

    expect(emailEl).toBeTruthy();

    const goBackBtn = result.getByText('Go back');
    userEvent.click(goBackBtn);
    const headerEl = result.getAllByText('TN Todo App');
    expect(headerEl).toBeTruthy();

  });
});