const Employee = require('../lib/Employee')

test('Should create an employee object', () => {
  const employee = new Employee('bobo')

  expect(employee.name).toBe(expect.any('bobo'))
})