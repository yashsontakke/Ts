type Customer={
    customerId:number,
    FirstName:string,
    lastName:string,
    Email:string,
    City:string,
    Age:number,
    Salary:number
}
const customers: Customer[] = [
    {
        customerId: 1,
        FirstName: "John",
        lastName: "Doe",
        Email: "john.doe@example.com",
        City: "Chennai",
        Age: 30,
        Salary: 50000,
    },
    {
        customerId: 2,
        FirstName: "Jane",
        lastName: "Smith",
        Email: "jane.smith@example.com",
        City: "Chennai",
        Age: 45,
        Salary: 60000,
    },
    {
        customerId: 3,
        FirstName: "David",
        lastName: "Brown",
        Email: "david.brown@example.com",
        City: "Mumbai",
        Age: 50,
        Salary: 70000,
    },
    {
        customerId: 4,
        FirstName: "Emma",
        lastName: "Wilson",
        Email: "emma.wilson@example.com",
        City: "Delhi",
        Age: 28,
        Salary: 65000,
    },
    {
        customerId: 5,
        FirstName: "Liam",
        lastName: "Taylor",
        Email: "liam.taylor@example.com",
        City: "Chennai",
        Age: 35,
        Salary: 55000,
    },
    {
        customerId: 6,
        FirstName: "Olivia",
        lastName: "Anderson",
        Email: "olivia.anderson@example.com",
        City: "Chennai",
        Age: 40,
        Salary: 58000,
    },
    {
        customerId: 7,
        FirstName: "Sophia",
        lastName: "Thomas",
        Email: "sophia.thomas@example.com",
        City: "Bangalore",
        Age: 33,
        Salary: 62000,
    },
    {
        customerId: 8,
        FirstName: "James",
        lastName: "Jackson",
        Email: "james.jackson@example.com",
        City: "Pune",
        Age: 55,
        Salary: 49000,
    },
    {
        customerId: 9,
        FirstName: "Mia",
        lastName: "Martin",
        Email: "mia.martin@example.com",
        City: "Hyderabad",
        Age: 27,
        Salary: 51000,
    },
    {
        customerId: 10,
        FirstName: "Ava",
        lastName: "Harris",
        Email: "ava.harris@example.com",
        City: "Kolkata",
        Age: 60,
        Salary: 53000,
    }
];
// grouping customers by city

const groupedCustomer = customers.reduce((acc:Record<string,Customer[]>,customer:Customer)=>{
    const city = customer.City;
    if(acc[city]){
        acc[city].push(customer);
    }else{
        acc[city]=[customer];
    }
    return acc;
},{} as Record<string,Customer[]>);

console.log(groupedCustomer);

// grouping customers by age range

const groupingByAgeRange = customers.reduce((acc:Record<string,Customer[]>,customer:Customer)=>{

    if(customer.Age>=25 && customer.Age<=35){
        acc["25-35"]?.push(customer);
    }else if(customer.Age>=35 && customer.Age<=45){
        acc["35-45"]?.push(customer);
    }else{
        acc["45+"]?.push(customer);
    }
    return acc;
},{"25-35":[],"35-45":[],"45+":[]} as Record<string,Customer[]>);

console.log(groupingByAgeRange);

// filtering cusrtomers by city 

const chennaiCustomers = customers.filter((customer:Customer)=> {
    return customer.City==='Chennai';
});

let sumOfCustomerAgesOfChennai = chennaiCustomers.reduce((acc:number,chennaiCustomer:Customer)=>{
    return acc+chennaiCustomer.Age;
},0);

console.log(chennaiCustomers);
console.log(sumOfCustomerAgesOfChennai);