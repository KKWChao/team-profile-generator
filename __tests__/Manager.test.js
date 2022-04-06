const TeamManager = require("../lib/TeamManager");

describe("Engineer Tests", () => {
  const teamManager = new TeamManager("charlie", 3, "xyz@gmail.com", 3);

  it("Should create Engineer class", () => {
    expect(teamManager.name).toBe("charlie");
    expect(teamManager.id).toBe(3);
    expect(teamManager.email).toBe("xyz@gmail.com");
    expect(teamManager.officeNumber).toBe(3)
    expect(teamManager.role).toBe("Manager");
  });

  it('Should inherit the classes from Employee', () => {
    expect(teamManager.getName())
    
    .toBe(teamManager.name)
  })

  it('Should return ID', () => {
    expect(teamManager.getID())
    
    .toEqual(teamManager.id)
  })

  it('Should return email', () => {
    expect(teamManager.getEmail())
    
    .toEqual(teamManager.email)
  })

  it('Should return current role', ()=> {
    expect(teamManager.getRole())

    .toEqual(teamManager.role)
  })

});
