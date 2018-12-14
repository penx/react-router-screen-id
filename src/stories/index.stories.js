import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import ScreenIdProvider, { Consumer } from '..';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('ScreenId', module)
  .add('default', () => (
    <BrowserRouter>
      <React.Fragment>
        <div>
          <Link to="/">Home</Link>
          <Link to="/sub">Sub</Link>
        </div>
        <ScreenIdProvider>
          <div>
            <Link to="/">Home</Link>
            <Link to="/sub">Sub</Link>
          </div>
          <Consumer>
            {props => (
              <div>
                <pre>{JSON.stringify(props)}</pre>
                <div>
                  <Link to="/">Home</Link>
                  <Link to="/sub">Sub</Link>
                </div>
              </div>
            )}
          </Consumer>
        </ScreenIdProvider>
      </React.Fragment>
    </BrowserRouter>
  ));
