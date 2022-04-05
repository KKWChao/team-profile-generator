/* Classes for program */

class Employee {
  constructor(name='', id, email) {
    this.name = name
    this.id = id
    this.email = email
  }
}

Employee.prototype.getInfo = function() {
  return {
    name: this.name,
    id: this.id,
    email: this.email
  }
}


module.exports = Employee