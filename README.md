[![Greenkeeper badge](https://badges.greenkeeper.io/penx/react-router-screen-id.svg)](https://greenkeeper.io/)

A proof of concept that introduces the concept of a 'screen id' in React, when using React Router.

A "screen id" is a unique identifier that is:
- generated when a user navigates to a new route
- stays the same while the user stays on the same route

This library will offer the following functionality:
- made available to child components via the context api
- works in universal applications where the screen id is initially generated on the server and then made available to the client
- ability to manually create a new screen id for the current route
