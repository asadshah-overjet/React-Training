import React from 'react';
import { Link } from '@reach/router';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error, info) {
    console.error('Error Boundary caught an error', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this lising.{' '}
          <Link to="/"> Click Here</Link> to go back to the home page.
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
