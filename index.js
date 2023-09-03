const employee = {
    name: "Kris",
    streetAddress: "Willow Street",
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
   const newEmployee = { ...employee }; // will update this later
   
   newEmployee[key] = value

   return newEmployee;
  }

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    
    employee[key] = value;
    
    return employee;
  }

  function deleteFromEmployeeByKey(streetAddress, key) {

    delete streetAddress.key;
    
    const newAddress = { ...key };

    return newAddress;

  }

  function destructivelyDeleteFromEmployeeByKey(name, key) {

    delete name[key];

    return name;

  }