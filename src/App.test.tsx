import React from 'react';

import App from '@/App';
import { render } from '@/utils/testUtil';

describe('App', () => {
  it('render without crashing', () => {
    render(<App />);
  });
});
