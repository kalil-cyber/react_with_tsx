import React, { Component } from 'react';

// ---------------------------
// Composant Fonctionnel : Greeting
// ---------------------------

// Définir le type des props
interface GreetingProps {
  name: string;
}

// Composant fonctionnel avec typage des props
const Greeting = ({ name }: GreetingProps): JSX.Element => {
  return <div>Hello, {name}!</div>;
};

// ---------------------------
// Composant de Classe : Counter
// ---------------------------

// Définir le type pour l'état
interface CounterState {
  count: number;
}

class Counter extends Component<{}, CounterState> {
  // Initialisation de l'état
  state: CounterState = {
    count: 0,
  };

  // Méthode pour incrémenter le compteur
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render(): JSX.Element {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export { Greeting, Counter };
