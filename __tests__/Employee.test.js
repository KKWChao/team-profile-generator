const Employee = require("../lib/Employee");

describe("Employee Tests", () => {
  const employee = new Employee("Bobo", 1, "xyz@gmail.com");

  it("Should create an employee object", () => {
    
    expect(employee.name).toEqual('Bobo');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual("xyz@gmail.com");
    expect(employee.role).toEqual("Employee");
  });

  it('Should Return name', () => {
    expect(employee.getName())
      
    .toEqual(employee.name)
  })

  it('Should return ID', () => {
    expect(employee.getID())
    
    .toEqual(employee.id)
  })

  it('Should return email', () => {
    expect(employee.getEmail())
    
    .toEqual(employee.email)
  })

  it('Should return current role', ()=> {
    expect(employee.getRole())

    .toEqual(employee.role)
  })
});
