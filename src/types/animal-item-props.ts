export interface AnimalItemProps {
  name: string;
  feature: string;
  value: number;
  increaseValue: React.MouseEventHandler<HTMLButtonElement>;
  freeAnimal: React.MouseEventHandler<HTMLButtonElement>;
}
