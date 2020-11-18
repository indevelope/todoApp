import React from 'react';

import { render, act } from '@testing-library/react';

import TodoProvider from './Provider';
import Context from './Context';

import httpClient from './util/httpClient';

jest.mock('./util/httpClient');

describe('Todolist Provider', () => {
  it('Setting isLoading to true and loading data on mount', async () => {
    const promise = Promise.resolve([ { text: 'Example task', completed: true } ]);
    
    httpClient.get.mockImplementationOnce(() => promise);
    
    const result = render(
      <TodoProvider>
        <Context.Consumer>
          {({ isLoading }) => <div>{isLoading ? 'Loading...' : 'Done'}</div>}
        </Context.Consumer>
      </TodoProvider>  
    );
    
    const loaderEl = result.getByText('Loading...');

    expect(loaderEl).toBeTruthy();
    expect(httpClient.get).toHaveBeenCalledTimes(1);
    
    await act(() => promise);

    const doneEl = result.getByText('Done');
    expect(doneEl).toBeTruthy();
  });
})