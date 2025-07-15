//Question1

type Employee = {
    fullName: [firstName: string, lastName: string];
    age: number;
    department: String;
    skills: string[];
    isActive: boolean;
};

//Question2

const emp1: Employee = {
    fullName: ['John', 'Doe'],
    age: 30,
    department: 'Engineering',
    skills: ['JavaScript', 'Python', 'C++'],
    isActive: true 
};

const emp2: Employee = {
    fullName: ['Jane', 'Smith'],
    age: 25,
    department: 'Marketing',
    skills: ['SEO', 'Social Media', 'Content Creation'],
    isActive: false 
};

//Function Implementation and execution
function logEmployee(emp: Employee): void {
    const [firstName, lastName] = emp.fullName;
    console.log('--- Employee Details ---');
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${emp.age}`);
    console.log(`Department: ${emp.department}`);
    console.log(`Skills: ${emp.skills.join(', ')}`);
    console.log(`Active: ${emp.isActive ? 'Yes' : 'No'}`);
    console.log('-------------------------');
}

//Function Calls
logEmployee(emp1);
logEmployee(emp2);
