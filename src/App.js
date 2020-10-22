const pet = (name, type) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, type),
  ]);
};

const App = () => {
  return React.createElement('div', { id: 'something' }, [
    React.createElement('h1', {}, 'Adopt Me'),
    React.createElement(pet, { name: 'Pyari', type: 'doberman' }),
    React.createElement(pet, { name: 'Fazloo', type: 'gorilla' }),
    React.createElement(pet, {
      name: 'Subhani',
      type: 'life jacket',
    }),
  ]);
};
ReactDOM.render(
  React.createElement(App),
  document.getElementById('root'),
);
