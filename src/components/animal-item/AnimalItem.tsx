import { AnimalItemProps } from '../../types/animal-item-props';

const AnimalItem = (props: AnimalItemProps) => {
  const { name, feature, value, increaseValue, freeAnimal } = props;
  return (
    <>
      {name}
      <p>{feature}</p>
      <p>{value}</p>
      <button onClick={increaseValue}>Feed</button>
      <button onClick={freeAnimal}>Free</button>
    </>
  );
};

export default AnimalItem;
