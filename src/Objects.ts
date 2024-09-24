// Known object
const knownObject = {
    name: "John Doe",
    age: 30,
    city: "New York",
    profession: "Engineer"
  };

  type KnownObject = {
    name: string;
    age: number;
    city: string;
    profession: string;
  };
  
  // Function to read known object values
  function readKnownObject(obj: KnownObject) {
    console.log(`Name: ${obj.name}`);
    console.log(`Age: ${obj.age}`);
    console.log(`City: ${obj.city}`);
    console.log(`Profession: ${obj.profession}`);
  }
  
  // Reading the known object
  readKnownObject(knownObject);
  