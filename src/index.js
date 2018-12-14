import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import uuidv1 from 'uuid/v1';

const ScreenIdContext = React.createContext(
  {
    screenId: '',
    newScreen: () => {},
  },
);

class ScreenIdProvider extends React.Component {
  state = {
    screenId: uuidv1(),
    location: this.props.location,
  }

  propTypes = {
    history: PropTypes.shapeOf({
      listen: PropTypes.func,
    }),
  }

  componentDidMount() {
    console.log(this.props);
    const { history } = this.props;
    this.unlisten = history.listen((location) => {
      this.setState((prevState) => {
        if (location.pathname !== prevState.location.pathname) {
          return {
            location,
            screenId: uuidv1(),
          };
        }
        return null;
      });
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  newScreen = () => {
    this.setState({
      screenId: uuidv1(),
    });
  }

  render() {
    const { screenId } = this.state;
    return (
      <ScreenIdContext.Provider
        value={{ screenId, newScreen: this.newScreen }}
        {...this.props}
      />
    );
  }
}

export default withRouter(ScreenIdProvider);

export const { Consumer } = ScreenIdContext;
