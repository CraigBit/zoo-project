export interface AppProps {
  getAnimalData: () => {
    id: number;
    name: string;
    feature: string;
    value: number;
  }[];
}
