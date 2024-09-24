type CustomerData = {
    company: string;
    city: string;
    age: number;
  };
  
  const companies: string[] = ["Virtusa", "TechCorp", "InnoSoft", "SynergyWorks", "NextGen", "FutureTech", "Pinnacle", "OptiTech", "DataDrive", "InfoQuest"];
  const cities: string[] = ["Pune", "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad", "Surat", "Jaipur"];
  const ageRange: number[] = Array.from({ length: 39 }, (_, i) => i + 21);
  
  // Function to generate random number within a range
  function getRandomElement<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  // Create 50 customers from Virtusa
  const virtusaCustomers: CustomerData  [] = Array.from({ length: 50 }, () => ({
    company: "Virtusa",
    city: getRandomElement(cities),
    age: getRandomElement(ageRange)
  }));
  
  // Create 40 customers from Pune
  const puneCustomers: CustomerData     [] = Array.from({ length: 40 }, () => ({
    company: getRandomElement(companies),
    city: "Pune",
    age: getRandomElement(ageRange)
  }));
  
  // Create the remaining random customers
const randomCustomers: CustomerData[] = Array.from({ length: 2344 }, () => ({
    company: getRandomElement(companies),
    city: getRandomElement(cities),
    age: getRandomElement(ageRange)
  }));
  
  // Combine all customer arrays
  const customersData: CustomerData[] = [...virtusaCustomers, ...puneCustomers, ...randomCustomers];
  
  // Output
 // Asynchronously fetch customers from Virtusa
async function getVirtusaCustomers(customers: CustomerData[]) {
    return customers.filter((customer) => customer.company === "Virtusa");
  }
  
  // Asynchronously fetch customers from Pune
  async function getPuneCustomers(customers: CustomerData[]) {
    return customers.filter((customer) => customer.city === "Pune");
  }
  
  // Asynchronously calculate the average age
  async function calculateAverageAge(customers: CustomerData[]) {
    const totalAge = customers.reduce((acc, customer) => acc + customer.age, 0);
    return totalAge / customers.length;
  }
  
  // Asynchronous processing
  async function processCustomerData(customers: CustomerData[]) {
    const virtusaCustomers = await getVirtusaCustomers(customers);
    console.log("Customers from Virtusa:", virtusaCustomers);
  
    const puneCustomers = await getPuneCustomers(customers);
    console.log("Customers from Pune:", puneCustomers);
  
    const averageAge = await calculateAverageAge(customers);
    console.log("Average Age of Customers:", averageAge.toFixed(2));
  }

processCustomerData(customersData);
  