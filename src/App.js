import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import { Link, Router } from '@reach/router';
import SearchParams from './SearchParams';
import Details from './details';
import ThemeContext from './ThemeContext';

const App = () => {
  const theme = useState('PERU');
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
