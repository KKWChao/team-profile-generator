const Intern = require("../lib/Intern");

describe("Intern Tests", () => {
  const intern = new Intern("delta", 4, "xyz@gmail.com", 'School Name');

  it("Should create Intern class", () => {
    expect(intern.name).toBe("delta");
    expect(intern.id).toBe(4);
    expect(intern.email).toBe("xyz@gmail.com");
    expect(intern.school).toBe('School Name')
    expect(intern.role).toBe("Intern");
  });

  it('Should inherit the classes from Employee', () => {
    expect(intern.getName())
    
    .toBe(intern.name)
  })

  it('Should return ID', () => {
    expect(intern.getID())
    
    .toEqual(intern.id)
  })

  it('Should return email', () => {
    expect(intern.getEmail())
    
    .toEqual(intern.email)
  })

  it('Should return current role', () => {
    expect(intern.getRole())

    .toEqual(intern.role)
  })

  it('Should return Intern School', () => {
    expect(intern.getSchool())

    .toEqual(intern.school)
  })
});
