interface Person {
  age: number;
  firstName: string;
  lastName: string;
  address: Address;
}

interface Address {
  country: string;
  houseNo: string;
  street?: string;
}

export const ObjectLiterals = () => {
  const person: Person = {
    age: 38,
    firstName: "Orkan",
    lastName: "Miguel",
    address: {
      country: "Valhalla",
      houseNo: "111",
    },
  };

  return (
    <>
      <h3>ObjectLiterals</h3>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};
