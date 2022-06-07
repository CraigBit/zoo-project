import { useState } from 'react';
import AnimalList from '../animal-list/AnimalList';
import CatchButton from '../catch-button/Catch.Button';
import './App.css';
import { AppProps } from '../../types/app-props';
import { HookGeneric } from '../../types/hook-generic';

const App = ({ getAnimalData }: AppProps) => {
  const [card, setCard] = useState<HookGeneric[]>([]);

  const increaseValue = (id: number) => {
    setCard(
      card.map((item) =>
        item.id === id ? { ...item, value: item.value + 1 } : { ...item }
      )
    );
  };

  const freeAnimal = (id: number): void => {
    setCard(card.filter((item) => item.id !== id));
  };

  const addElem = () => {
    const animalItems = getAnimalData();
    const newItem = animalItems[Math.floor(Math.random() * 3)];
    setCard([...card, newItem]);
  };
  return (
    <div className="container">
      <CatchButton addElem={addElem} />
      <AnimalList
        card={card}
        increaseValue={increaseValue}
        freeAnimal={freeAnimal}
      />
    </div>
  );
};

export default App;
