import React from 'react';
import ReactDOM from 'react-dom';

import Component from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Component />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// TODO: performing actions within a page that don't change url retains screen id
// TODO: navigating to the same url with a link retains screen id
// TODO: navigation to a different url with a link changes screen id
// TODO: redirect
// TODO: manual refresh
// TODO: stub uuid generator
