// const { expect } = require("chai");

// updateEmployeeWithKeyAndValue(employee, key, value); {
//   for (const key in employee) {
//     delete employee[key];
//   }

//   employee.name = 'Sam';
// };


// updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway'); {
  
//   expect(employee['streetAddress']).to.equal('11 Broadway');
// };


// destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway'); ({
//   name: 'Sam',
//   streetAddress: '12 Broadway'
// });

// expect(employee) ({
//   name: 'Sam',
//   streetAddress: '12 Broadway'
// });

// deleteFromEmployeeByKey(employee, 'name'); {
//   let newEmployee = deleteFromEmployeeByKey(employee, 'name');

//   (newEmployee['name']) = (undefined);
//   (typeof newEmployee) = ('object');
// };

// deleteFromEmployeeByKey(employee, 'name'); {
//   deleteFromEmployeeByKey(employee, 'name');

//   expect(employee['name']).to.equal('Sam');
// };

// let newEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name'); 
// expect(newEmployee['name']) = (undefined);
// expect(employee['name']) = ('Sam');

const employee =  {
  name: ["sam"],
  streetAddress: ["11 Broadway"]
}

function updateEmployeeWithKeyAndValue(employee, key, value) {

  const updatedEmployee = { ...employee };
 
  updatedEmployee[key] = value;
  return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
 
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {

  const newEmployee = { ...employee };

  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {

  delete employee[key];
  return employee;
}