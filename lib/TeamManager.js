const Employee = require("./employee");

class TeamManager extends Employee {
  constructor(name = '', id, email, officeNumber) {
    super(name, id, email)

    this.officeNumber = officeNumber
  }
}

module.exports = TeamManager;