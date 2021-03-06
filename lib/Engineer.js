const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name = '', id, email, github, role) {
    super(name, id, email, role);

    this.github = github
    this.role = 'Engineer'
  }

  getGithub() {
    return this.github
  }
}

module.exports = Engineer;