const Employee = require('../lib/Employee')

// first test for creation
test('Should create an employee object', () => {
  const employee = new Employee('Bobo', 1, 'xyz@gmail.com')

  expect(employee.name).toEqual(expect.any(String))
  expect(employee.id).toEqual(expect.any(Number))
  expect(employee.email).toEqual(expect.any(String))
})
