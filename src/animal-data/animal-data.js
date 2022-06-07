function getAnimalData() {
  let randomChar = Math.round(Math.random() * 4) + 1;

  const animalArray = [
    { id: Date.now(), name: 'Giraph', feature: '[height]', value: randomChar },
    { id: Date.now(), name: 'Wolf', feature: '[speed]', value: randomChar },
    { id: Date.now(), name: 'Hippo', feature: '[weight]', value: randomChar },
  ];

  return animalArray;
}
export { getAnimalData };
