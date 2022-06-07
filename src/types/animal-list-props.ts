export interface AnimalListProps {
  card: {
    id: number;
    name: string;
    feature: string;
    value: number;
  }[];
  increaseValue: (id: number) => void;
  freeAnimal: (id: number) => void;
}
