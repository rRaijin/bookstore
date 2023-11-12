// dump-component & smart-component

const AnimalInfo123 = ({ animal }) => {
  return (
    <div>
      <h4>Kind: {animal.kind}</h4>
      <p>Name: {animal.name}</p>
      <p>Age: {animal.age}</p>
    </div>
  );
};

export const myConst = 1

export default AnimalInfo123;