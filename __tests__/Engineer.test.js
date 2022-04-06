const Engineer = require("../lib/Engineer");

describe("Engineer Tests", () => {
  const engineer = new Engineer("bravo", 2, "xyz@gmail.com", 'github');

  it("Should create Engineer class", () => {
    expect(engineer.name).toBe("bravo");
    expect(engineer.id).toBe(2);
    expect(engineer.email).toBe("xyz@gmail.com");
    expect(engineer.github).toBe('github')
    expect(engineer.role).toBe("Engineer");
  });

  it('Should inherit the classes from Employee', () => {
    expect(engineer.getName())
    
    .toBe(engineer.name)
  })

  it('Should return ID', () => {
    expect(engineer.getID())
    
    .toEqual(engineer.id)
  })

  it('Should return email', () => {
    expect(engineer.getEmail())
    
    .toEqual(engineer.email)
  })

  it('Should return current role', ()=> {
    expect(engineer.getRole())

    .toEqual(engineer.role)
  })

  it('Should return github', () => {
    expect(engineer.getGithub())
    
    .toBe(engineer.github)
  })
});
