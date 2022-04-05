/* Classes for program */

class Employee {
  constructor(name = "", id, email, role='Employee') {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role
  }

  // return info for employee
  getName() {
    return this.name
  }

  getID() {
    return this.id
  }

  getEmail() {
    return this.email
  }

  getRole() {
    return this.role
  }
}

module.exports = Employee;
