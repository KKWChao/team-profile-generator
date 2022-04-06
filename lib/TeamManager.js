const Employee = require("./employee");

class TeamManager extends Employee {
  constructor(name = '', id, email, officeNumber) {
    super(name, id, email)

    this.officeNumber = officeNumber
    this.role = "Manager"
  }
}

module.exports = TeamManager;