import AnimalItem from '../animal-item/AnimalItem';
import { AnimalListProps } from '../../types/animal-list-props';

const AnimalList = ({ card, increaseValue, freeAnimal }: AnimalListProps) => {
  const elements = card.map((item) => {
    const { id, ...itemParts } = item;
    return (
      <div className="animal" key={id}>
        <AnimalItem
          {...itemParts}
          increaseValue={() => increaseValue(id)}
          freeAnimal={() => freeAnimal(id)}
        />
      </div>
    );
  });
  return <div className="zoo">{elements}</div>;
};

export default AnimalList;
